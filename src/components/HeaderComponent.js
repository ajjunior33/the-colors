import { Header } from "../styles/Header";

import { DropdownComponent } from "../components/DropdownComponent";
import { UserComponent } from "../components/UserComponent";

import logo from "../assets/images/logo.svg";

const HeaderComponent = () => {
  return (
    <Header>
      <div className="logo">
        <img src={logo} alt="The Colors" />
        <strong>The Colors</strong>
      </div>
      <div id="bloco_usuario">
        <UserComponent />
        <DropdownComponent />
      </div>
    </Header>
  );
};

export { HeaderComponent };
