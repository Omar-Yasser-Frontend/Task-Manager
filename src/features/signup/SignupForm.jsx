import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import FormErrorMessage from "../tasks/formErrorMessage";
import { useSignup } from "./useSignup";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { signup, isPending } = useSignup();

  function onSubmit(data) {
    signup(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            className={"md:max-w-[200px]"}
            type="text"
            id="first-name"
            placeholder="First Name"
            {...register("firstName", {
              required: "Please enter your first name",
            })}
          />
          {errors?.firstName?.message && (
            <FormErrorMessage message={errors.firstName.message} />
          )}
        </div>
        <div>
          <Label htmlFor="second-name">Second Name</Label>
          <Input
            className={"md:max-w-[200px]"}
            type="text"
            id="second-name"
            placeholder="Second Name"
            {...register("secondName", {
              required: "Please enter second name",
            })}
          />
          {errors?.secondName?.message && (
            <FormErrorMessage message={errors.secondName.message} />
          )}
        </div>
      </div>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="Please enter email"
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter valid email",
          },
        })}
      />
      {errors?.email?.message && (
        <FormErrorMessage message={errors.email.message} />
      )}
      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        id="password"
        placeholder="Please enter password"
        {...register("password", {
          required: "Please enter your password",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W]).{8,}$/,
            message:
              "Password should contain capital and small letters, symbols (#@%^*#) and number ",
          },
        })}
      />
      {errors?.password?.message && (
        <FormErrorMessage message={errors.password.message} />
      )}
      <Label htmlFor="confirm-password">Confirm Password</Label>
      <Input
        type="password"
        id="confirm-password"
        placeholder="Please enter confirm password"
        {...register("confirmPassword", {
          required: "Please confirm password",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
      />
      {errors?.confirmPassword?.message && (
        <FormErrorMessage message={errors.confirmPassword.message} />
      )}
      <Button
        disabled={isPending}
        size="large"
        className="mx-auto my-6 w-fit"
        rounded="rounded-md"
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignupForm;
