import { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./services/userService";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      console.log("profile", profile);

      if (account && account.type === "credentials") {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("user", user);

      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("req", req);
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        return userService.authenticate(username, password);
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
