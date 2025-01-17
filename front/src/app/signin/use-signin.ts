import { UserCredentials } from "@/models/user";
import { setCredentialsCookies } from "@/utils/auth";
import { redirect } from "next/navigation";
import { useState } from "react";

export const useSignIn = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserSignedIn, setUserSignedIn] = useState(false);

  const signIn = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, password }),
      });
      if (response.ok) {
        const userInformations = await response.json();
        await setCredentialsCookies(userInformations);
        setUserSignedIn(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      if (isUserSignedIn) {
        redirect("dashboard");
      }
    }
  };

  const updatePassword = (password: UserCredentials["password"]) => {
    setPassword(password);
  };
  const updateFullName = (fullName: UserCredentials["fullName"]) => {
    setFullName(fullName);
  };

  return {
    signIn,
    updatePassword,
    updateFullName,
    fullName,
    password,
    isUserSignedIn,
  };
};
