import { useState, useEffect } from "react";
import { Button } from "./styles/Button";
import { Input } from "./styles/Input";
import { Header } from "./styles/Header";
import { Row, Col } from "./styles/Grid";

import { FaToggleOff, FaToggleOn } from "react-icons/fa";

import GlobalStyle from "./styles/global";

//Components
import { FooterComponent } from "./components/FooterComponent";
function App() {
  const [valueCol, setValueCol] = useState([]);
  const [active, setActive] = useState(false);
  const [qtdColors, setQtdColors] = useState(6);
  useEffect(() => {

    console.log(qtdColors);
    handleGenerateColor(qtdColors);
  }, [qtdColors]);

  function handleGenerateColor(qtdColors) {
    let array = [];
    const colors = generateMultiColors(qtdColors, active);
    colors.map((color) => {
      let object = {
        variant: color,
        color: verifyLum(color) === "light" ? "#2c3e50" : "#ecf0f1",
      };
      array.push(object);
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
            Generate new color
          </Button>
        </div>

        <div>
          {active === false ? (
            <FaToggleOff onClick={() => setActive(true)} />
          ) : (
            <FaToggleOn onClick={() => setActive(false)} />
          )}
          <strong>Somente cores dark</strong>
        </div>

        <div>
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

      <FooterComponent />
      <GlobalStyle />
    </>
  );
}

export default App;
