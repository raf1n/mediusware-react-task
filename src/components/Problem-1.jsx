import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, formData]);
  };

  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                onBlur={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                onBlur={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {show === "all" &&
              allData
                ?.sort(function (a, b) {
                  if (
                    a.status.toLowerCase() === "active" &&
                    b.status.toLowerCase() !== "active"
                  ) {
                    return -1;
                  } else if (
                    a.status.toLowerCase() === "completed" &&
                    b.status.toLowerCase() !== "active"
                  ) {
                    return -1;
                  }
                  if (a.status > b.status) {
                    return 1;
                  }
                })
                .map((dt, id) => {
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{dt?.name}</td>
                        <td>{dt?.status}</td>
                      </tr>
                    </tbody>
                  );
                })}
            {show === "active" &&
              allData
                ?.filter((data) => data?.status.toLowerCase() === "active")
                .map((dt, id) => {
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{dt?.name}</td>
                        <td>{dt?.status}</td>
                      </tr>
                    </tbody>
                  );
                })}
            {show === "completed" &&
              allData
                ?.filter((data) => data?.status.toLowerCase() === "completed")
                .map((dt, id) => {
                  return (
                    <tbody key={id}>
                      <tr>
                        <td>{dt?.name}</td>
                        <td>{dt?.status}</td>
                      </tr>
                    </tbody>
                  );
                })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
