import { User } from "@/models/user";
import Cookies from "js-cookie";

export const isAuthenticated = () => Boolean(Cookies.get("user"));

export const setCredentialsCookies = (user: User) =>
  Cookies.set("user", JSON.stringify(user));

export const deleteCredentialsCookies = () => Cookies.remove("user");
