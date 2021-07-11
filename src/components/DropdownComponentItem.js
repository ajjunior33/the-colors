import { FiChevronRight } from "react-icons/fi";

import { DropdownItem } from "../styles/Dropdown";
const DropdownComponentItem = ({ itemName }) => {
  return (
    <DropdownItem>
      {itemName} <FiChevronRight />
    </DropdownItem>
  );
};

export { DropdownComponentItem };
