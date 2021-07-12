import { useEffect, useState } from "react";
import { FiChevronDown, FiToggleRight, FiToggleLeft } from "react-icons/fi";
import { DropdownList, DropdownPanel } from "../styles/Dropdown";
import { FiChevronRight } from "react-icons/fi";

//Components
import { ModalComponent } from "./ModalComponent";
import { ContainerList, Color } from "../styles/Grid";

const DropdownComponent = () => {
  const [active, setActive] = useState(false);
  const [modalEnabled, setModalEnabled] = useState(false);
  const [modalColorsEnabled, setModalColorsEnabled] = useState(false);

  const [listColors, setListColors] = useState([]);

  const [somerDark, setSomerDark] = useState(false);
  const [somerLight, setSomerLight] = useState(false);
  function handleActiveDropdown() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  function loadColors() {
    let colors = [
      { id: 1, hex: "#F17225" },
      { id: 1, hex: "#D49D73" },
      { id: 1, hex: "#1FE5F8" },
    ];
    setListColors(colors);
  }
  useEffect(() => {
    loadColors();
  }, [listColors]);

  function handleColor(color, type) {
    if (color === "dark" && type === "active") {
      if (somerLight === true) {
        setSomerLight(false);
        return setSomerDark(true);
      } else {
        return setSomerDark(true);
      }
    } else if (color === "dark" && type === "disable") {
      setSomerDark(false);
    } else if (color === "light" && type === "disable") {
      setSomerLight(false);
    } else if (color === "light" && type === "active") {
      if (somerDark === true) {
        setSomerDark(false);
        return setSomerLight(true);
      } else {
        return setSomerLight(true);
      }
    } else {
      setSomerDark(false);

      setSomerLight(false);
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
            <button
              className="DropdownItem"
              onClick={() => setModalColorsEnabled(true)}
            >
              Cores salvas
              <FiChevronRight />
            </button>
            <span>Configurações</span>

            <button
              className="DropdownItem"
              onClick={() => setModalEnabled(true)}
            >
              Distribuição de cores
              <FiChevronRight />
            </button>
          </DropdownList>
        )}
      </DropdownPanel>

      <ModalComponent
        onClose={() => setModalEnabled(false)}
        showModal={modalEnabled}
        closed={true}
        title="Configurações"
      >
        <ContainerList>
          <h3>Gerar Cores</h3>
          <div className="list">
            <div>
              {somerDark === true ? (
                <FiToggleRight onClick={() => handleColor("dark", "disable")} />
              ) : (
                <FiToggleLeft onClick={() => handleColor("dark", "active")} />
              )}
              Somente cores escuras
            </div>
            <div>
              {somerLight === true ? (
                <FiToggleRight
                  onClick={() => handleColor("light", "disable")}
                />
              ) : (
                <FiToggleLeft onClick={() => handleColor("light", "active")} />
              )}{" "}
              Somente cores claras
            </div>
          </div>
        </ContainerList>
      </ModalComponent>

      <ModalComponent
        onClose={() => setModalColorsEnabled(false)}
        showModal={modalColorsEnabled}
        closed={true}
        title="Cores Salvas"
      >
        <ContainerList>
          <p>
            <strong>Obs:</strong>
            Você consegue visualizar as cores salvas por você, mas elas ficam
            aqui temporáriamente.
          </p>

          <div className="list">
            {listColors.length > 0 &&
              listColors.map((color) => (
                <Color color={color.hex} key={color.id} />
              ))}
          </div>
        </ContainerList>
      </ModalComponent>
    </>
  );
};

export { DropdownComponent };
