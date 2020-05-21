import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import PuntoFijo from "./components/PuntoFijo/PuntoFijo";

function App() {
  useEffect(() => {
    var select = document.querySelectorAll("select");
    M.FormSelect.init(select, {});
  }, []);

  return (
    <div className="App">
      <h1>Métodos númericos</h1>
      <hr />
      <div className="content">
        <div className="row">
          <div className="right input-field col s12 m6 l3 xl3">
            <select defaultValue="1">
              <option value="0" disabled>
                Escoge un método
              </option>
              <option value="1">Punto fijo</option>
            </select>
            <label>Método</label>
          </div>
        </div>
        <PuntoFijo></PuntoFijo>
      </div>
    </div>
  );
}

export default App;
