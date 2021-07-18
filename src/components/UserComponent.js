import { useState, useEffect } from "react";
import { GrGoogle } from "react-icons/gr";

//Components
import { ModalComponent } from "../components/ModalComponent";
import { GeneratedTypeColors } from "../components/UserComponents/GeneratedTypeColors";
//Images

//Styles
import { DropdownList, DropdownPanel } from "../styles/Dropdown";
import { PhotoUser } from "../styles/User";
import { ButtonBlock } from "../styles/Button";
import { ContainerList } from "../styles/Grid";

//hooks
import { useAuth } from "../hooks/useAuth";

const UserComponent = () => {
  const [active, setActive] = useState(false);
  const [avatar, setAvatar] = useState(
    "https://vinaora.com/avatar/99423dd4603469bda61edec3f9b206ae?s=512&d=mm&r=g"
  );
  const [loggued, setLoggued] = useState(false);
  const [modalConfig, setModalConfig] = useState(false);
  const { signInWithGoogle, user } = useAuth();

  useEffect(() => {
    if (user) {
      setLoggued(true);
      setAvatar(user.avatar);
    }
  }, [user]);

  function handleActiveDropdown() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }
  async function handleLoginAccount() {
    if (!user) await signInWithGoogle();

    if (user) {
      setLoggued(true);
      setAvatar(user.avatar);
    }
  }
  return (
    <>
      <DropdownPanel onClick={handleActiveDropdown}>
        <PhotoUser onClick={handleActiveDropdown}>
          <img src={avatar} alt="Imagem do Usuário" />
        </PhotoUser>

        {active === true && (
          <DropdownList>
            {loggued === false && (
              <ButtonBlock
                inputColorVariant="#3742fa"
                inputColor="#5352ed"
                color="#ced6e0"
                onClick={handleLoginAccount}
              >
                <GrGoogle />
                Login / Criar Conta
              </ButtonBlock>
            )}
            {loggued === true && (
              <ButtonBlock
                inputColorVariant="#3742fa"
                inputColor="#5352ed"
                color="#ced6e0"
                onClick={() => setModalConfig(true)}
              >
                Configurações
              </ButtonBlock>
            )}
          </DropdownList>
        )}
      </DropdownPanel>
      <ModalComponent
        onClose={() => setModalConfig(false)}
        showModal={modalConfig}
        closed={true}
        title="Configurações"
      >
        <ContainerList>
          <h3>Seleção de cores</h3>
          <GeneratedTypeColors />
        </ContainerList>
      </ModalComponent>
    </>
  );
};

export { UserComponent };
