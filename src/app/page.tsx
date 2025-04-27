import Link from "next/link";
import { getServerAuthSession } from "../server/auth";

export default async function Home() {
  const authSession = await getServerAuthSession();
  console.log("authSession", authSession);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      {authSession?.user && <div>Dashboard</div>}
      {!authSession?.user && (
        <Link
          className="font-medium mt-2 text-blue-600 hover:underline"
          href="/login"
        >
          Login
        </Link>
      )}
    </main>
  );
}
