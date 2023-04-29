import {
  useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../../Api";

export const loader = ({ request }) => {
  const url = new URL(request.url).searchParams.get("message");
  return url;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("pawword");
  try {
    const data = await loginUser(password, email);
    localStorage.setItem("loggedin", true);
    return redirect("host");
  } catch (error) {
    return error.message;
  }
};

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto py-20 space-y-6 px-6 md:px-12 w-1/2">
      <h1 className="text-4xl font-bold text-center">
        Sign in to your account
      </h1>
      {message && (
        <h2 className="text-red-500 text-lg text-center">{message}</h2>
      )}
      {errorMessage && (
        <h2 className="text-red-500 text-lg text-center">{errorMessage}</h2>
      )}
      <Form method="post" replace className="flex flex-col gap-y-6 ">
        <input
          name="email"
          type="email"
          placeholder="email"
          className="p-4 outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-4 outline-none"
        />
        <button
          disabled={navigation.state === "submitting"}
          className="p-3 bg-orange-500 hover:opacity-90 text-2xl font-semibold"
        >
          {navigation.state === "submitting" ? "logging in .." : "login"}
        </button>
      </Form>
    </div>
  );
};

export default Login;
