import { Dialog } from "@headlessui/react";
import React, { useRef, useState } from "react";

interface Props {
}

const DialogPractice : React.FC<Props> = (props) => {
    let [isOpen, setIsOpen] = useState(true)
    let completeButtonRef = useRef(null)

  return (
     <>
        <Dialog
      initialFocus={completeButtonRef}
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Dialog.Overlay />

      <Dialog.Title>Complete your order</Dialog.Title>

      <p>Your order is all ready!</p>

      <button onClick={() => setIsOpen(false)}>Cancel</button>
      
    </Dialog>
     </>
  );
};

DialogPractice.defaultProps = {
}
export default DialogPractice;
