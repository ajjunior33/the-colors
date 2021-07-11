import { useState, useEffect } from "react";

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

function App() {
  const [valueCol, setValueCol] = useState([]);
  const [active, setActive] = useState(false);
  const [qtdColors, setQtdColors] = useState(6);
  useEffect(() => {
    if (qtdColors > 0 && qtdColors <= 6) {
      handleGenerateColor(qtdColors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qtdColors]);

  function handleGenerateColor(qtdColors) {
    let array = [];
    const colors = generateMultiColors(qtdColors, active);
    colors.map((color) => {
      let object = {
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

  return (
    <>
      <Header>
        <div>
          <Button
            onClick={() => handleGenerateColor(qtdColors)}
            inputColorVariant="#2980b9"
            inputColor="#3498db"
            color="#FFFFFF"
          >
            Gerar nova cor
          </Button>
        </div>

        <div>
          <DropdownComponent />
        </div>

        <div style={{ width: "280px" }}>
          <Input
            placeholder="Quantidade de cores"
            value={qtdColors}
            type="number"
            min="1"
            max="6"
            onChange={(e) => setQtdColors(e.target.value)}
          />
        </div>
      </Header>

      <main>
        <Row>
          {valueCol.map((item) => (
            <Col color={item.color} variant={item.variant} key={item.id}>
              <strong>{item.variant}</strong>
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
