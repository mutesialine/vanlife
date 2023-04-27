import { redirect } from "react-router-dom";

export function requireAuth() {
  const isLoggedin = false;
  if (!isLoggedin) {
    throw redirect("/signin");
  }
}
