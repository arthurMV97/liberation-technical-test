"use client";
import { Alert, Button, Input, Link, Snackbar, Stack } from "@mui/material";
import { useSignUp } from "./use-signup";
import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function SignUp() {
  const isAuth = isAuthenticated();
  if (isAuth) {
    redirect("/");
  }
  const presenter = useSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await presenter.signUp();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" gap={6} maxWidth="20rem">
        <h1>Sign Up</h1>
        <Input
          type="fullName"
          placeholder="Nom complet"
          value={presenter.fullName}
          onChange={(e) => presenter.updateFullName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={presenter.password}
          onChange={(e) => presenter.updatePassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
        <Snackbar open={presenter.isUserRegistered} autoHideDuration={2000}>
          <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
            You have been registered, please{" "}
            <Link href="signin" underline="always" color="inherit">
              Sign In
            </Link>
          </Alert>
        </Snackbar>
      </Stack>
    </form>
  );
}
