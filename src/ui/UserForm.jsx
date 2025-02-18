import { useForm } from "react-hook-form";
import { useUser } from "../features/login/useUser";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useUpdateUser } from "./useUpdateUser";

function UserForm() {
  const { updateUser, isPending } = useUpdateUser();
  const {
    user: {
      user_metadata: { username, avatar },
    },
  } = useUser();

  const { register, handleSubmit } = useForm({
    defaultValues: { username, image: avatar },
  });

  function onSubmit(data) {
    if (typeof data.image === "string")
      updateUser({ username: data.username, image: avatar });
    updateUser({ username: data.username, image: data.image[0] });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>username</Label>
      <Input type="text" placeholder="username" {...register("username")} />

      <Label>Image</Label>
      <input
        {...register("image")}
        type="file"
        accept="image/*"
        className="bg-blue-color block cursor-pointer rounded-md px-4 py-2 text-white"
      />

      <Button className={"mt-8 ml-auto"} disabled={isPending}>
        save
      </Button>
    </form>
  );
}

export default UserForm;
