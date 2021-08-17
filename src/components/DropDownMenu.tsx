import { Menu } from "@headlessui/react";
import React from "react";

interface Props {
}

const DropDownMenu : React.FC<Props> = (props) => {
  return (
     <>
        <Menu as="div">
            <Menu.Button as="img" src=""></Menu.Button>
        </Menu>
     </>
  );
};

DropDownMenu.defaultProps = {
}
export default DropDownMenu;
