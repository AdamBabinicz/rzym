import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./App.css";
import Potega from "./containers/potega/Potega";
import Home from "./Home";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/potęga" component={Potega} exact />
        <Route path="/" component={Home} exact />
      </Switch>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
      <Footer />
    </Router>
  );
}

export default App;
