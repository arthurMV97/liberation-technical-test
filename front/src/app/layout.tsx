"use client";
import { deleteCredentialsCookies } from "@/utils/auth";
import {
  Container,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Geist, Geist_Mono } from "next/font/google";
import { redirect, usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  const handleSignOut = () => {
    deleteCredentialsCookies();
    redirect("signin");
  };
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CssBaseline />
        <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Libération
          </Typography>
          {pathName === "/dashboard" && (
            <Link component="button" underline="hover" onClick={handleSignOut}>
              Sign Out
            </Link>
          )}
          {pathName === "/signin" && (
            <Link
              component="button"
              underline="hover"
              onClick={() => redirect("signup")}
            >
              Sign Up
            </Link>
          )}
          {pathName === "/signup" && (
            <Link
              component="button"
              underline="hover"
              onClick={() => redirect("signin")}
            >
              Sign In
            </Link>
          )}
        </Toolbar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {children}
        </Container>
      </body>
    </html>
  );
}
