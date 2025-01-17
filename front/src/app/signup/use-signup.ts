import { UserCredentials } from "@/models/user";
import { useState } from "react";

export const useSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserRegistered, setUserRegistered] = useState(false);

  const signUp = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, password }),
      });
      if (response.ok) {
        setUserRegistered(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updatePassword = (password: UserCredentials["password"]) => {
    setPassword(password);
  };
  const updateFullName = (fullName: UserCredentials["fullName"]) => {
    setFullName(fullName);
  };

  return {
    signUp,
    updatePassword,
    updateFullName,
    fullName,
    password,
    isUserRegistered,
  };
};
