import React, { Component } from "react";
import "./style.css";

//let nombre = "Mi nombre";

function A(props) {
  //console.log(props.children);
  //return <p>hola {props.nombre}</p>;
  return props.children;
}

function B(props) {
  return <p>{props.nombre}: 10</p>;
}

function MiComponente() {
  return <p>Hola Mundo</p>;
}

class MiComponenteDeClase extends Component {
  render() {
    return <p>Hola soy de la clase</p>;
  }
}

//Estados
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  aumentar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
  }
}

export default function App() {
  let nombre = "Aldo";
  /*return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <MiComponente />
      <MiComponenteDeClase />
      <A nombre={nombre}>
        <p>Hola!</p>
        <p>Hola 2!</p>
      </A>
      <B nombre={nombre} />
    </div>
  );*/
  return (
    <div>
      <Contador />
    </div>
  );
}
