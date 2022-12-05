import { FC, useEffect, useRef } from "react";
import { BModalProps } from "./types.d";
import "./style.scss";

const Modal: FC<BModalProps> = (props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideContent = (e: MouseEvent) => {
      if (e.target === modalRef.current) {
        props.setShow(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [props]);

  return (
    <div ref={modalRef} className={`modal ${props.show ? "active" : ""}`}>
      <div className="modal__content">
        <div className="modal__body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
