import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { FiCopy, FiSave, FiRefreshCw } from "react-icons/fi";
import Swal from "sweetalert2";

//Styles
import GlobalStyle from "./styles/global";
import { Button } from "./styles/Button";
import { Input } from "./styles/Input";
import { Header } from "./styles/Header";
import { Row, Col } from "./styles/Grid";
import { TextDanger } from "./styles/Text";

//Components
import { FooterComponent } from "./components/FooterComponent";
import { DropdownComponent } from "./components/DropdownComponent";
import { UserComponent } from "./components/UserComponent";

function App() {
  const [valueCol, setValueCol] = useState([]);
  const [qtdColors, setQtdColors] = useState(6);
  useEffect(() => {
    if (qtdColors >= 0 && qtdColors <= 6) {
      handleGenerateColor(qtdColors);
    }else{
      setQtdColors(6);
      handleGenerateColor(qtdColors);
      Toast.fire({
        icon: "error",
        title: "Não é possível adicionar essa quantidade de cores.",
      });
    }

    if (qtdColors > 6 || qtdColors < 0) {
      Toast.fire({
        icon: "error",
        title: "Não é possível usar essa quantidade de Colunas.",
      });
      setQtdColors(6);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qtdColors]);

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

  function handleGenerateColor(qtdColors) {
    let array = [];
    const colors = generateMultiColors(qtdColors);
    colors.map((color) => {
      let object = {
        id: uuid(),
        variant: color,
        color: verifyLum(color) === "light" ? "#2c3e50" : "#ecf0f1",
      };
      return array.push(object);
    });
    setValueCol(array);
  }

  function verifyLum(color) {
    let r, g, b, lum;
    let hex = color.replace("#", "");
    r = parseInt(hex.substr(0, 2), 16);
    g = parseInt(hex.substr(2, 2), 16);
    b = parseInt(hex.substr(4, 2), 16);
    lum = parseInt((r * 299 + g * 587 + b * 114) / 1000);
    if (lum > 128) {
      return "light";
    }
    return "dark";
  }

  function generateMultiColors(quantidadedeCores, luminosa = false) {
    let listColor = [];
    let color;
    let tipoLuminosidade = "dark";
    while (listColor.length < quantidadedeCores) {
      color = generateColorHex();
      if (luminosa === true) {
        let verification = verifyLum(color);
        verification === tipoLuminosidade && listColor.push(color);
      } else {
        listColor.push(color);
      }
    }

    return listColor;
  }

  function generateColorHex() {
    return (
      "#" +
      parseInt(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")
    );
  }

  function handleCopyClipboard(color) {
    navigator.clipboard.writeText(color);
    Toast.fire({
      icon: "success",
      title: "Copiado com sucesso.",
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
      <Header>
        <div className="comum">
          <Button
            onClick={() => handleGenerateColor(qtdColors)}
            inputColorVariant="#2980b9"
            inputColor="#3498db"
            color="#f1f2f6"
          >
            <FiRefreshCw size={15} />
            Gerar nova cor
          </Button>
        </div>

        <div className="comum" style={{ width: "280px" }}>
          <Input
            placeholder="Quantidade de cores"
            value={qtdColors}
            type="number"
            min="1"
            max="6"
            onChange={(e) => setQtdColors(e.target.value)}
          />
        </div>
        <div id="bloco_usuario">
          <UserComponent />
          <DropdownComponent />
        </div>
      </Header>

      <main>
        <Row>
          {valueCol.map((item) => (
            <Col color={item.color} variant={item.variant} key={item.id}>
              <FiCopy onClick={() => handleCopyClipboard(item.variant)} />
              <strong>{item.variant}</strong>
              <FiSave onClick={() => handleSaveColors(item.variant)} />
            </Col>
          ))}
        </Row>
      </main>

      <TextDanger strong>* É possível difinir de 1 a 6 cores.</TextDanger>

      <FooterComponent />
      <GlobalStyle />
    </>
  );
}

export default App;
