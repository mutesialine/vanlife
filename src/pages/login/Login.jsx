import {
  useLoaderData,
  useNavigation,
  Form,
  redirect,
  useActionData,
  Link,
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
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ password, email });
    console.log(data);
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
};

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();
  return (
    <div className="max-w-7xl mx-auto py-20 space-y-6 px-6 md:px-12 md:w-1/2 text-center">
      <h1 className="text-xl md:text-4xl font-bold md:text-center">
        Sign in to your account
      </h1>
      {message && (
        <h2 className="text-red-500 text-base font-bold text-center">
          {message}
        </h2>
      )}
      {errorMessage && (
        <h2 className="text-red-500 text-base font-bold text-center">
          {errorMessage}
        </h2>
      )}
      <Form method="post" replace className="flex flex-col gap-y-2">
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className="p-4 outline-none border rounded-sm"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="p-4 outline-none border rounded-sm"
        />
        <button
          disabled={navigation.state === "submitting"}
          className="p-3 bg-orange-500 hover:opacity-90 text-white text-2xl font-semibold mt-2"
        >
          {navigation.state === "submitting" ? "logging in .." : "login"}
        </button>
      </Form>
      <h2 className="text-lg pt-2 flex flex-col md:flex-row">
        Don't have an account ?
        <Link className="text-orange-500 underline">Create one now</Link>
      </h2>
    </div>
  );
};

export default Login;
