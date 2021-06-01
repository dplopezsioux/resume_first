import React from "react";

const dataTest = {
  tecnologies: ["nodejs", "MySQL", "MongoDB"],
  languages: ["Javascript", "typescript", "C#", "C++"],
  tools: ["Github", "mongoDb", "MySql", "SqlServer", "wiki"],
};

//programacion

const Skill = () => {
  return (
    <div>
      <div className="bg-dark text-secondary p-1 text-center">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-4 themed-grid-col">
              <table className="table text-light bg-dark  table-borderless">
                <thead>
                  <tr>
                    <th>
                      <h1 className="display-6">Tecnologies</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTest.tecnologies.map((elemnt) => {
                    return (
                      <tr key={Math.random() * 1000000}>
                        <td>{elemnt}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td>****</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="col-md-4 themed-grid-col">
              <table className="table text-light bg-dark  table-borderless">
                <thead>
                  <tr>
                    <th>
                      <h1 className="display-6">Lenguajes</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTest.languages.map((elemnt) => {
                    return (
                      <tr key={Math.random() * 1000000}>
                        <td>{elemnt}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td>****</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="col-md-4 themed-grid-col">
              <table className="table text-light bg-dark  table-borderless">
                <thead>
                  <tr>
                    <th>
                      <h1 className="display-6">Tools</h1>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTest.tools.map((elemnt) => {
                    return (
                      <tr key={Math.random() * 1000000}>
                        <td>{elemnt}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td>****</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
