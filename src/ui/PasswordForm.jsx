import { useState } from "react";
import { useUser } from "../features/login/useUser";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { useUpdatePassword } from "./useUpdatePassword";

function PasswordForm() {
  const [password, setPassword] = useState("");
  const { updatePass, isPending } = useUpdatePassword();
  const {
    user: { email },
  } = useUser();

  function handleSubmit(e) {
    e.preventDefault();
    updatePass({ password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label>Email</Label>
      <Input type="email" value={email} disabled={true} onChange={() => {}} />

      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button className={"mt-10 ml-auto"} disabled={isPending}>
        Save
      </Button>
    </form>
  );
}

export default PasswordForm;

// import { useState } from "react";
// import Button from "./Button";
// import Input from "./Input";
// import Label from "./Label";
// import { useUser } from "../features/login/useUser";
// import { useUpdatePassword } from "./useUpdatePassword";

// function PasswordForm() {
//   const [password, setPassword] = useState("");

//   const { updatePassword, isPending } = useUpdatePassword();
//   const {
//     user: { email },
//   } = useUser();

//   function handleSubmit(e) {
//     e.preventDefault();
//     updatePassword({ password });
//   }

//   return (
//     <form
//       onSubmit={(e) => {
//         handleSubmit(e);
//         console.log("update");
//       }}
//     >
//       <Label>Email</Label>
//       <Input type="text" placeholder="Email" value={email} disabled={true} />
//       <Label>Password</Label>
//       <Input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button className={"mt-8 ml-auto"} disabled={isPending}>
//         save
//       </Button>
//     </form>
//   );
// }

// export default PasswordForm;
