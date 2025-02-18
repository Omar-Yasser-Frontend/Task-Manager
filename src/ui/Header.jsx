import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useUser } from "../features/login/useUser";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";
import Modal from "../features/tasks/Modal";
import EditUserData from "./EditUserData";

function Header() {
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState(false);
  const close = () => setEditUser(false);
  const open = () => setEditUser(true);
  const { isAuthenticated, user } = useUser();
  const { logout, isPending } = useLogout();
  return (
    <header className="px-4 py-6 shadow-sm">
      <div className="container m-auto flex items-center px-4">
        <Link
          to="/"
          className="mr-auto text-xl font-semibold select-none md:text-2xl"
        >
          Task Manager
        </Link>
        <div className="flex items-center gap-3">
          {!isAuthenticated ? (
            <>
              <Button
                onClick={() => navigate("/signup")}
                typeStyle="secondary"
                size="small"
                rounded="rounded-md"
              >
                Sign up
              </Button>
              <Button rounded="rounded-md" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          ) : (
            <>
              <p className="text-xl font-semibold">
                {user?.user_metadata?.username}
              </p>
              <img
                onClick={open}
                className="ring-green border-grayish-blue h-10 w-10 cursor-pointer overflow-hidden rounded-full border-1 inset-ring-2 ring-3 ring-offset-2"
                src={user?.user_metadata?.avatar || "/public/default-user.jpg"}
                alt="user image"
              />
              <button
                onClick={() => logout()}
                className="text-blue-color cursor-pointer text-2xl font-bold"
                disabled={isPending}
              >
                <HiArrowLeftStartOnRectangle />
              </button>
              {editUser && (
                <Modal close={close}>
                  <EditUserData close={close} />
                </Modal>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
