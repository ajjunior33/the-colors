import { FiRefreshCw } from "react-icons/fi";

//Styles
import { Row } from "../styles/Grid";
import { ColorsContextProvider } from "../contexts/ColorsContext";

//Components

//hooks

function Home() {
  const qtdColors = 6;

  return (
    <>
      <main>
        <Row>
          <ColorsContextProvider qtdColors={qtdColors}></ColorsContextProvider>
        </Row>
      </main>
    </>
  );
}

export { Home };
