import React, { useState } from "react";
import * as api from "../../services/Endpoints";

const NovoLead = () => {
  const estadoInicial = {
    id: null,
    nome: "",
    email: "",
  };
  const [lead, setLead] = useState(estadoInicial);
  const [submitted, setSubmitted] = useState(false);

  const trataCampo = (event) => {
    const { name, value } = event.target;
    setLead({ ...lead, [name]: value });
  };

  const enviarLead = () => {
    api
      .create(lead)
      .then((response) => {
        setLead({
          id: response.data.id,
          nome: response.data.titulo,
          email: response.data.autor,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Cadastrado com sucesso!</h4>
        </div>
      ) : (
        <div>
          <div className="position-relative d-block" data-aos="fade-up">
            <div className="form-group">
              <label className="text-white" htmlFor="nome">
                Your Name
              </label>
              <input
                id="nome"
                required
                value={lead.nome}
                onChange={trataCampo}
                name="nome"
                type="text"
                className="form-control form-control-lg"
                placeholder="Type your name"
              />
            </div>
            <div className="form-group">
              <label className="text-white" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                required
                value={lead.email}
                onChange={trataCampo}
                name="email"
                type="email"
                className="form-control form-control-lg"
                placeholder="you@yoursite.com"
              />
            </div>

            <div className="form-group text-center">
              <button onClick={enviarLead} className="btn btn-lg btn-success btn-block mb-2" type="submit">
                Claim your free spot
              </button>
              <small className="text-white">You’ll recieve your first lesson via email in less than a minute.</small>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default NovoLead;
