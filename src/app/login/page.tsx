"use client";

import { signIn } from "next-auth/react";
import { useForm, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../components/shared/input";
import Button from "../components/shared/button";

export default function LoginPage() {
  const [error, setError] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const { username, password } = data;
    console.log("entra", username, password);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-sm mx-auto bg-white p-6 rounded"
      >
        <div>
          <label className="font-bold">Username</label>
          <Input {...form.register("username")} id="username" />
        </div>
        <div>
          <label className="font-bold">Password</label>
          <Input
            {...form.register("password")}
            id="password"
            type="password"
            style={{ fontFamily: "Arial, sans-serif" }}
          />
        </div>
        {error && (
          <p className="text-red-600 text-center">Invalid user or password</p>
        )}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="hover:bg-green-500 hover:text-white "
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
