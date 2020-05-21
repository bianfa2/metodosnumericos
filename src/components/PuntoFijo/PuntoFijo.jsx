import React, { useState } from "react";
import "./PuntoFijo";
import { useForm } from "react-hook-form";

const PuntoFijo = () => {
  const [tableData, setTableData] = useState(null);
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const calculate = (data) => {
    let analisysData = [];

    let x0 = parseFloat(data.initialX);

    for (let i = 0; i < data.nIteractions; i++) {
      let equation = data.formula.replace(/x/gi, x0);
      let resultData = {
        x: x0,
        result: eval(equation),
      };
      x0 = resultData.result;
      analisysData.push(resultData);
    }

    console.log(analisysData);

    setTableData(analisysData);
  };

  return (
    <div className="punto-fijo">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit(calculate)}>
          <div className="row">
            <div className="input-field col s12 m6 l3 xl3">
              <input
                id="formula"
                name="formula"
                type="text"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="formula">
                Formula despejada con la variable en x
              </label>
            </div>
            <div className="input-field col s12 m6 l3 xl3">
              <input
                id="initialX"
                name="initialX"
                type="number"
                className="validate"
                ref={register({ required: true })}
              />
              <label htmlFor="initialX">Valor de X0</label>
            </div>
            <div className="input-field col s12 m6 l3 xl3">
              <input
                id="nIteractions"
                name="nIteractions"
                type="number"
                className="validate"
                min="1"
                ref={register({ required: true })}
              />
              <label htmlFor="nIteractions">Número de iteraciones</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Calcular
            <i className="material-icons right">play_arrow</i>
          </button>
        </form>
      </div>
      <div className="row">
        {tableData && (
          <table className="col s6 offset-s3 striped">
            <thead>
              <tr>
                <th>Interacción</th>
                <th>
                  X<sub>0</sub>
                </th>
                <th>Resultado</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.x}</td>
                    <td>{item.result}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PuntoFijo;
