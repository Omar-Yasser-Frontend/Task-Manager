import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import DrawImage from "./DrawImage";

function Landing() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container mx-auto mt-20 grid p-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="order-2 mb-4 text-center md:order-1 md:mb-0 md:text-left xl:ml-10">
          <h1 className="mb-6 text-4xl font-bold">
            Task manager app, <br /> to manage your tasks
          </h1>
          <p className="sm:m-none m-auto mb-6 max-w-[500px] text-lg text-[#808080] md:m-0">
            check this app out, you can manage your tasks and progress by
            adding: won't to do, in progress and complete, you can also add date
            to manage the time and know when to start and when to finish
          </p>
          <Button
            className="mx-auto mt-6 md:mx-0"
            onClick={() => navigate("/tasks")}
          >
            Try it now
          </Button>
        </div>
        <DrawImage />
      </div>
    </section>
  );
}

export default Landing;
