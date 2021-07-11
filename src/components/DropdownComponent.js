import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DropdownList, DropdownPanel } from "../styles/Dropdown";

//Components
import { DropdownComponentItem } from './DropdownComponentItem';

const DropdownComponent = () => {
  const [active, setActive] = useState(false);
  function handleActiveDropdown() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  return (
    <>
      <DropdownPanel onClick={handleActiveDropdown}>
        <span>
          Exibir mais opções <FiChevronDown />
        </span>

        {active === true && (
          <DropdownList>
            <span>Cores</span>
            <DropdownComponentItem itemName="Cores salvas"/>
            <span>Configurações</span>
            <DropdownComponentItem itemName="Distribuição de cores"/>
          </DropdownList>
        )}
      </DropdownPanel>
    </>
  );
};

export { DropdownComponent };
