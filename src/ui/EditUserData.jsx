import PasswordForm from "./PasswordForm";
import UserForm from "./UserForm";

function EditUserData() {
  return (
    <>
      <UserForm />
      <hr className="my-4" />
      <PasswordForm />
    </>
  );
}

export default EditUserData;
