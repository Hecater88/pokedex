"use client";

import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm, FieldValues } from "react-hook-form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
              </FormItem>
            )}
          />
          {error && (
            <p className="text-red-600 text-center">Invalid user or password</p>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
