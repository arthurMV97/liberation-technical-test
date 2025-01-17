"use client";
import { isAuthenticated } from "@/utils/auth";
import { redirect } from "next/navigation";

export default function Page() {
  const isAuth = isAuthenticated();
  if (!isAuth) {
    redirect("/");
  }
  return <p>Dashboard Page</p>;
}
