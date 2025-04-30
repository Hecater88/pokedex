"use client";

import { signIn } from "next-auth/react";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const { username, password } = data;
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    console.log("res", res);

    if (res?.ok) {
      router.push("/");
    } else {
      setError(true);
    }
  };

  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input id="username" placeholder="Username" />
        </div>
        <div>
          <label>Password</label>
          <input id="password" placeholder="Password" type="password" />
        </div>
        {error && (
          <p className="text-red-600 text-center">Invalid user or password</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
