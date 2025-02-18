import { Link } from "react-router-dom";
import FormInputs from "./FormInputs";

function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md md:p-12 md:shadow-xl">
        <h2 className="mb-6 text-center text-3xl font-bold">
          Task Manager <br /> Welcome to you
        </h2>
        <FormInputs />
        <p className="mt-4">
          Don't have an account ?{" "}
          <Link className="text-blue-color" to={"/signup"}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
