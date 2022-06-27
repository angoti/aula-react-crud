import { useEffect, useState } from "react";
import * as api from "../../services/Endpoints";

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    buscaLeads();
  }, []);

  const buscaLeads = () => {
    api
      .getAll()
      .then((response) => {
        setLeads(response.data);
        console.log("---------------------", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container list row">
      <div className="col-md-6">
        <h4>Leads</h4>
        {leads.length !== 0 && (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            {leads.map((lead) => (
              <tr>
                <td>{lead.nome}</td>
                <td>{lead.email}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
};

export default Leads;
