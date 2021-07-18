//Styles
import { Row } from "../styles/Grid";
import { ColorsContextProvider } from "../contexts/ColorsContext";

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
