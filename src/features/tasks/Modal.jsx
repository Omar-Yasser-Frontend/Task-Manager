import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";

function Modal({ children, close }) {
  const ref = useRef();

  useEffect(
    function () {
      function fn(e) {
        if (!ref.current.contains(e.target)) close();
      }
      if (ref.current) document.body.addEventListener("click", fn, true);
      return () => document.body.removeEventListener("click", fn, true);
    },
    [ref, close],
  );
  return createPortal(
    <div className="modal fixed top-0 left-0 z-50 h-screen w-full">
      <div
        ref={ref}
        className="fixed top-[10px] right-0 flex w-[50vw] flex-col overflow-auto bg-white p-3 md:p-6"
      >
        <div className="flex items-center">
          <h2 className="mb-6 text-2xl font-semibold">Task Details</h2>
          <Button
            typeStyle="close"
            size="extra small"
            rounded="rounded-md"
            onClick={close}
          >
            <img src="/public/close_ring_duotone-1.svg" alt="" />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
