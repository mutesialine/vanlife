import { Form } from "react-router-dom";
import { loginUser } from "../../Api";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("pawword");
  const data = await loginUser({ password, email });
  console.log(data);
  return null;
};

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 space-y-6 px-6 md:px-12 w-1/2">
      <h1 className="text-4xl font-bold text-center">
        Sign in to your account
      </h1>
      <Form method="post" className="flex flex-col gap-y-6 ">
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
        <button className="p-3 bg-orange-500 hover:opacity-90 text-2xl font-semibold">
          Log in
        </button>
      </Form>
    </div>
  );
};

export default Login;
