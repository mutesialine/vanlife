import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false; // replace with your authentication logic
  if (!isLoggedIn) {
    return redirect("/login"); // redirect to login page
  }
  return null;
}
