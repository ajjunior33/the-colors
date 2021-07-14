import { FiChevronRight } from "react-icons/fi";

const DropdownComponentItem = ({ itemName }) => {
  return (
    <button className="DropdownItem">
      {itemName} <FiChevronRight />
    </button>
  );
};

export { DropdownComponentItem };
