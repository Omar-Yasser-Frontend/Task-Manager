import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import FormErrorMessage from "../tasks/formErrorMessage";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

function FormInputs() {
  const navigate = useNavigate();
  const { login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email, password }) {
    login({ email, password }, { onSuccess: () => navigate("/tasks") });
  }

  return (
    <form
      className="flex w-[320px] max-w-full flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-10">
        <Input
          type="text"
          id="email"
          placeholder="Email"
          // className="mb-10"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter valid email",
            },
          })}
        />
      </div>
      {errors?.email?.message && (
        <FormErrorMessage message={errors.email.message} />
      )}
      <div className="mb-12">
        <Input
          type="password"
          id="password"
          placeholder="Password"
          // className="mb-12"
          {...register("password", {
            required: "Password is required",
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/,
            //   message:
            //     "Password should contain capital and small letters, symbols (#@%^*#) and number ",
            // },
            // minLength: {
            //   value: 8,
            //   message: "Password must be 8 characters at least",
            // },
          })}
        />
        {errors?.password?.message && (
          <FormErrorMessage message={errors.password.message} />
        )}
      </div>
      <Button
        disabled={isPending}
        size="large"
        className="mx-auto w-fit"
        rounded="rounded-md"
      >
        Login
      </Button>
    </form>
  );
}

export default FormInputs;
