"use client";
import { deleteCredentialsCookies, isAuthenticated } from "@/utils/auth";
import { Button, Stack } from "@mui/material";
import { redirect } from "next/navigation";

export default function Home() {
  const handleSignOut = () => {
    deleteCredentialsCookies();
    redirect("signin");
  };
  const isAuth = isAuthenticated();
  return (
    <Stack alignItems="center" justifyContent="center" gap={6}>
      {isAuth ? (
        <>
          <Button variant="contained" onClick={() => redirect("dashboard")}>
            Go to Dashboard
          </Button>
          <Button variant="outlined" onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => redirect("signin")}>
            Sign In
          </Button>
          <p>or</p>{" "}
          <Button variant="outlined" onClick={() => redirect("sign up")}>
            Sign Up
          </Button>
        </>
      )}
    </Stack>
  );
}
