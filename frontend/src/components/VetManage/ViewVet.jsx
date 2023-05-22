
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';

// import { useParams } from 'react-router-dom';
const ViewVet = ({ id }) => {
  console.log(id);

  // const [_id, setEmployeeID] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [severity, setSeverity] = useState('');
  const [tplan, setTplan] = useState('');
  const [recovery, setRecovery] = useState('');
  const [rplan, setRplan] = useState('');
  const [other, setOther] = useState('');
  const navigate = useNavigate();
  const PF = 'http://localhost:8080/image/';
  const [image, setImage] = useState('');

  id = '6459110da929aad5cb6142df';

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/Vet/getVet/${id}`)

      .then((res) => {
        console.log(res.data.Vet);
        // setEmployeeID(res.data.Employee._id);
        setCode(res.data.Vet.code);
        setName(res.data.Vet.name);
        setDate(res.data.Vet.date);
        setLocation(res.data.Vet.location);
        setGender(res.data.Vet.gender);
        setSeverity(res.data.Vet.severity);
        setTplan(res.data.Vet.tplan);
        setRecovery(res.data.Vet.recovery);
        setRplan(res.data.Vet.rplan);
        setOther(res.data.Vet.other);
        setImage(res.data.Vet.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    // handle edit button click
    navigate(`/editvet/${id}`);
  };

  return (
    <>


      <div className="dropdown" style={{ float: 'right' }}>
        <Link
          className="dropdown-toggle d-flex align-items-center hidden-arrow mt-2"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="50"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <br />
          <h6 className="me-5 ms-2">Rathnayaka</h6>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="/viewvet">
              My profile
            </a>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <h1 className="mt-5 text-center" style={{ marginLeft: '150px' }}>
        Speicies Details
      </h1>



      <div
        className="d-flex justify-content-center"
        style={{ marginLeft: '250px' }}
      >
        <div className="card text-center bg-gradient mt-5 mb-5 w-70">
          <div
            className="card-body warm-flame-gradient color-block "
            style={{

          borderRadius: '10px',
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,.05)',
          boxShadow: '0 0 10px rgba(0,0,0,0.25)',
              
            }}
          >



            <br />
            <br />
            <div className="d-flex justify-content-center">
              <form>
                <img
                  src={PF + image}
                  class="img-fluid rounded-circle mb-5 img-thumbnail shadow-sm"
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
                <MDBContainer className="d-flex justify-content-center">
                  <MDBRow>
                    <MDBCol size="md">
                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Species Code:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="code"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="gender"
                        >
                          Gender
                        </label>
                        <select
                          className="form-control w-50 float-end"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Location of injury:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Severity of injury:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="severity"
                          value={severity}
                          onChange={(e) => setSeverity(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Estimated recovery time:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="recovery"
                          value={recovery}
                          onChange={(e) => setRecovery(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />


                    </MDBCol>
                    <MDBCol size="md">
                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Species Name:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Date:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Treatment plan:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="tplan"
                          value={tplan}
                          onChange={(e) => setTplan(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Rehabilitation plan:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="rplan"
                          value={rplan}
                          onChange={(e) => setRplan(e.target.value)}
                        />
                      </div>

                      <br />
                      <br />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                <div>
                <label className="float-start font-weight-bold fs-6" htmlFor="message">
    Other Notes:
  </label>
                  <input
                    className="form-control w-60 float-end mt-2 mb-5"
                    type="text"
                    id="other"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <br />
                <Link
                  to="/vettable"
                  className="btn btn  float-end me-5"
                  style={{
                    backgroundColor: 'red',
                    width: '100px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="btn btn float-end me-5"
                  style={{
                    backgroundColor: 'blue',
                    width: '100px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                  onClick={() => handleEdit(id)}
                >
                  Modify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewVet;
