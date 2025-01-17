"use client";
import { Button, Input, Stack } from "@mui/material";
import { useSignIn } from "./use-signin";
import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function SignIn() {
  const isAuth = isAuthenticated();
  if (isAuth) {
    redirect("/");
  }
  const presenter = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await presenter.signIn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" gap={6} maxWidth="20rem">
        <h1>Sign In</h1>
        <Input
          type="fullName"
          placeholder="Full Name"
          value={presenter.fullName}
          onChange={(e) => presenter.updateFullName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={presenter.password}
          onChange={(e) => presenter.updatePassword(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
