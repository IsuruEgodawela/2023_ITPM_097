import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


export default function AddVet() {
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

  const [image, setImage] = useState('');

  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!file) {
      // If no file is selected, submit the form without the image
      submitForm();
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    const filename = Date.now() + file.name;
    formData.append('name', filename);
    formData.append('file', file);
    console.log(formData);

    try {
      // Upload the image file to the server
      await axios.post('http://localhost:8080/api/upload', formData);
    } catch (err) {
      alert(err);
      return;
    }

    // If the upload is successful, set the image property and submit the form
    const data = {
      code,
      name,
      date,
      location,
      severity,
      tplan,
      recovery,
      rplan,
      other,
      image: filename, 
    };

    submitForm(data);
  }

  async function submitForm(data) {
    if (
      code.length === 0 ||
      name.length === 0 ||
      date.length === 0 ||
      location.length === 0 ||
      severity.length === 0 ||
      tplan.length === 0 ||
      recovery.length === 0 ||
      rplan.length === 0 ||
      other.length === 0 
    ) {
      swal(' Fields Cannot empty !', 'Please enter all data !', 'error');
    } else {
      console.log(data);
      try {
        const response = await axios.post(
          `http://localhost:8080/api/Vet/Newvet`,
          data
        );
        console.log(response.data);

        // Reset the form fields
        setCode('');
        setName('');
        setDate('');
        setLocation('');
        setGender('');
        setSeverity('');
        setTplan('');
        setRecovery('');
        setRplan('');
        setOther('');

        swal({
          text: 'Successfully Added',
          icon: 'success',
          button: 'Okay!',
        }).then((value) => {
          navigate(`/vettable`);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>



      <div
        className="dropdown"
        style={{ float: 'right', marginRight: '-150px' }}
      >
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
            <a className="dropdown-item" href="/vetview">
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



      <h1 className="mt-5 text-center" style={{ marginLeft: '250px' }}>
        Injured Species Database
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
              <form onSubmit={handleSubmit}>


                <MDBContainer className="d-flex justify-content-center">
                  <MDBRow>
                    <MDBCol size="md">
                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="code"
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
                          <option value="">Select Gender</option>
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
                          type="date"
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
  <textarea
    className="form-control w-60 float-end mt-2 mb-5"
                    type="text"
                    id="other"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                    rows={3} // Set the number of visible rows for the text box
    style={{
      resize: 'vertical', // Make the text box vertically resizable
    }}

                  />
                </div>
                

                <br />
                <br />
<br />

                <br />
                <br />

                <div className="position-relative">
                  <div
                    className="bg-white rounded p-2"
                    style={{
                      width: '150px',
                      height: '150px',
                    }}
                  >
                    <i className="fas fa-cloud-upload-alt fa-3x mb-2"></i>
                    <button
                      className="btn btn float-center"
                      style={{
                        backgroundColor: 'indigo',
                        width: '80px',
                        color: 'white',
                        textTransform: 'capitalize',
                        margin: '20px',
                      }}
                    >
                      Upload
                    </button>
                  </div>

                  
                  <input
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                    type="file"
                    id="fileInput"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <br />
                
                <div
  className="position-relative"
  style={{ marginTop: '-120px', marginBottom: '100px' }}
>
  <button
    type="submit"
    className="btn btn float-end me-5 contactButton"
    style={{
      backgroundColor: 'blue',
      width: '150px',
      color: 'white',
      textTransform: 'capitalize',
      fontFamily: 'inherit',
      fontSize: '17px',
      fontWeight: '500',
      borderRadius: '0.9em',
      border: 'none',
      letterSpacing: '0.05em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Center align the text
      boxShadow: 'inset 0 0 1.6em -0.6em #714da6',
      overflow: 'hidden',
      position: 'relative',
      height: '2.8em',
    }}
  >
    Submit
  </button>
</div>

                <br />

                <div className="d-flex justify-content-center align-items-center">
      <div style={{ marginRight: '10px' }}>
        {file && (
          <img
            className="square-image mb-5 shadow-sm"
            src={URL.createObjectURL(file)}
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
