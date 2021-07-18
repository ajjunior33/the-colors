import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiRefreshCw,
} from "react-icons/fi";
import { FiChevronRight, FiTrash, FiCopy } from "react-icons/fi";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";

//Components
import { ModalComponent } from "./ModalComponent";
import { ContainerList, Color } from "../styles/Grid";
//Styles
import { DropdownList, DropdownPanel } from "../styles/Dropdown";
import { Button } from "../styles/Button";
import { Input, InputControl, InputGroup } from "../styles/Input";

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
  const [modalColorsPersonalized, setModalColorsPersonalized] = useState(false);
  const [colorPersonalized, setColorPersonalized] = useState("#232121");

  const [listColors, setListColors] = useState([]);
  
  function handleActiveDropdown() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  function handleUpdateColor(e) {
    let color = e.target.value;
    setColorPersonalized(color);
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
      if (cor.id !== color) {
        newArray.push({ id: cor.id, hex: cor.hex });
      }
      return newArray;
    });
    setListColors(newArray);
    localStorage.setItem("colorsList", JSON.stringify(newArray));
    Toast.fire({
      icon: "success",
      title: "Removido com sucesso.",
    });
  }


  function handleSaveColors(color) {
    const item = localStorage.getItem("colorsList");
    if (!item) {
      const object = [{ id: uuid(), hex: color }];
      localStorage.setItem("colorsList", JSON.stringify(object));
    } else {
      let newArray = [];
      let object = { id: uuid(), hex: color };
      let listage = JSON.parse(localStorage.getItem("colorsList"));

      listage.map((cor) => {
        return newArray.push(cor);
      });
      newArray.push(object);
      localStorage.setItem("colorsList", JSON.stringify(newArray));
    }
    Toast.fire({
      icon: "success",
      title: "Cor salva com sucesso.",
    });
  }
  return (
    <>
      <DropdownPanel onClick={handleActiveDropdown}>
        <FiChevronDown className="iconDropdown" />

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

            <button
              className="DropdownItem"
              onClick={() => setModalColorsPersonalized()}
            >
              Cores Personalizadas
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
            <FiRefreshCw size={15} />
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

      <ModalComponent
        onClose={() => setModalColorsPersonalized(false)}
        showModal={modalColorsPersonalized}
        closed={true}
        title="Gerar uma cor personalizada"
      >
        <ContainerList>
          PREVIEW
          <Color color={colorPersonalized} />
          <InputControl>
            <label htmlFor="input_color">Insira o hex da cor: </label>
            <InputGroup>
              <Input
                type="color"
                value={colorPersonalized}
                placeholder="#232121"
                onChange={(e) => handleUpdateColor(e)}
                style={{ height: "40px" }}
              />
              <Button
                onClick={() => handleSaveColors(colorPersonalized)}
                inputColorVariant="#2ecc71"
                inputColor="#27ae60"
                color="#f1f2f6"
              >
                Salvar
              </Button>
            </InputGroup>
          </InputControl>
        </ContainerList>
      </ModalComponent>
    </>
  );
};

export { DropdownComponent };
