import { useState } from "react";
import { GrGoogle } from "react-icons/gr";

//Images
import defaultPhoto from "../assets/images/user.png";

//Styles
import { PhotoUser } from "../styles/User";
import { DropdownList, DropdownPanel } from "../styles/Dropdown";
import { ButtonBlock } from "../styles/Button";

const UserComponent = () => {
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
        <PhotoUser onClick={handleActiveDropdown}>
          <img src={defaultPhoto} alt="avatar" />
        </PhotoUser>

        {active === true && (
          <DropdownList>
            <ButtonBlock
              inputColorVariant="#3742fa"
              inputColor="#5352ed"
              color="#ced6e0"
            >
              <GrGoogle />
              Login / Criar Conta
            </ButtonBlock>
          </DropdownList>
        )}
      </DropdownPanel>
    </>
  );
};

export { UserComponent };
