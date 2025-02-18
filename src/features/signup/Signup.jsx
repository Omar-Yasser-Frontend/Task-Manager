import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-md md:p-12 md:shadow-xl">
        <h2 className="mb-6 p-4 text-center text-3xl font-bold">
          Task Manager <br /> Welcome to you
        </h2>

        <SignupForm />

        <p className="mt-4">
          Have account already ?{" "}
          <Link className="text-blue-color" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
