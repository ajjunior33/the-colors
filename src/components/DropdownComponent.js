import { useEffect, useState } from "react";
import { FiChevronDown, FiToggleRight, FiToggleLeft, FiRefreshCw } from "react-icons/fi";
import { FiChevronRight, FiTrash, FiCopy } from "react-icons/fi";
import Swal from "sweetalert2";

//Components
import { ModalComponent } from "./ModalComponent";
import { ContainerList, Color } from "../styles/Grid";
//Styles
import { DropdownList, DropdownPanel } from "../styles/Dropdown";
import { Button } from "../styles/Button";

const DropdownComponent = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
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
    let colors = JSON.parse(localStorage.getItem("colorsList"));
    if (colors) {
      setListColors(colors);
    }
  }
  useEffect(() => {
    loadColors();
  }, [setListColors]);

  function handleCopyClipboard(color) {
    navigator.clipboard.writeText(color);
    Toast.fire({
      icon: "success",
      title: "Copiado com sucesso.",
    });
  }
  function handleRemoveColor(color) {
    const newArray = [];
    listColors.map((cor) => {
      console.log(cor.hex, color);
      if (cor.id !== color) {
        newArray.push({ id: cor.id, hex: cor.hex });
      }
    });
    setListColors(newArray);
    localStorage.setItem("colorsList", JSON.stringify(newArray));
    Toast.fire({
      icon: "success",
      title: "Removido com sucesso.",
    });
  }

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
          <Button
            onClick={() => loadColors()}
            inputColorVariant="#2980b9"
            inputColor="#3498db"
            color="#f1f2f6"
          >
            <FiRefreshCw size={15}/>
            Recaregar
          </Button>
          <p>
            <strong>Obs:</strong>
            Você consegue visualizar as cores salvas por você, mas elas ficam
            aqui temporáriamente.
          </p>

          <div className="listage">
            <ul>
              {listColors.length > 0 &&
                listColors.map((color) => (
                  <Color color={color.hex} key={color.id}>
                    <FiCopy onClick={() => handleCopyClipboard(color.hex)} />
                    <FiTrash onClick={() => handleRemoveColor(color.id)} />
                  </Color>
                ))}
            </ul>
          </div>
        </ContainerList>
      </ModalComponent>
    </>
  );
};

export { DropdownComponent };
