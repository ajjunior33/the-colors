//Styles
import GlobalStyle from "./styles/global";

//Components
import { FooterComponent } from "./components/FooterComponent";
import { BrowserRouter, Route } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { AuthContextProvider } from "./contexts/AuthContext";

//Pages
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <HeaderComponent />
        <Route path="/" component={Home} exact />
        <FooterComponent />
        <GlobalStyle />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
