import React from "react";

const dataTest = {
  tecnologies: ["nodejs", "MySQL", "MongoDB"],
  languages: ["Javascript", "typescript", "C#", "C++"],
  tools: ["Github", "mongoDb", "MySql", "SqlServer", "wiki"],
};

const Skill = () => {
  return (
    <div className="bg-dark text-secondary p-1 mt-5 text-center">
      <article className="blog-post">
        <div className="container p-1">
          <div className="container p-1">
            <div className="row align-items-center mt-5">
              <div className="col">
                <div className="p-1">
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
              </div>
              <div className="col">
                <div className="p-1">
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
              </div>
              <div className="col">
                <div className="p-1">
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
          <div>JALO</div>
        </div>
      </article>
    </div>
  );
};

export default Skill;
