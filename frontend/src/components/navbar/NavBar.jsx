
import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Logo from '../../imgs/logo.png';

export default function NavBar() {
  return (
    <>
      <MDBCol size="2">
        <MDBTabs
          pills
          className="flex-column text-center"
          style={{
            background: '#fff',
            width: '150px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            height: '100vh',
          }}
        >
<div className="logo" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src={Logo} alt="Logo" style={{ height: '40px', margin: '20px 0px 0px 0px' }} />
          </div>


          <Link to="/aboutus">
            <MDBTabsItem>
              <MDBTabsLink
                style={{
                  background: 'transparent',
                  margin: '50px 0px 40px 40px',
                  color: 'black',
                  height: '80px',
                  width: '80px',
                  borderRadius: '20px',
                  padding: '10px',
                }}
              >
                <MDBIcon fas size="3x" icon="home" className="icon"/>
                <h6 style={{ fontSize: '10px', marginTop: '10px'  }}>
                  Dashboard
                </h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </Link>

          <Link to="/">
            <MDBTabsItem>
              <MDBTabsLink
                style={{
                  background: 'transparent',
                  margin: '5px 40px 40px 40px',
                  color: 'black',
                  height: '80px',
                  width: '80px',
                  borderRadius: '20px',
                  padding: '10px',
                }}
              >
                <MDBIcon fas size="3x" icon="heartbeat" className="icon"/>
                <h6 style={{ fontSize: '10px', marginTop: '10px'}}>
                  Animal Care
                </h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </Link>

          <Link to="/vettable">
            <MDBTabsItem>
              <MDBTabsLink
                style={{
                  background: 'transparent',
                  margin: '5px 40px 40px 40px',
                  color: 'black',
                  height: '80px',
                  width: '80px',
                  borderRadius: '20px',
                  padding: '10px',
                }}
              >
                <MDBIcon fas size="3x" icon="paw" />
                <h6 style={{ fontSize: '10px', marginTop: '10px' }}>
                  Vetarinary
                </h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </Link>

          <Link to="/">
            <MDBTabsItem>
              <MDBTabsLink
                style={{
                  background: 'transparent',
                  margin: '5px 40px 40px 40px',
                  color: 'black',
                  height: '80px',
                  width: '80px',
                  borderRadius: '20px',
                  padding: '10px',
                }}
              >
                <MDBIcon fas size="3x" icon="fa fa-user-circle" />
                <h6 style={{ fontSize: '10px', marginTop: '10px' }}>
                  Employee Management
                </h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </Link>

          <Link to="/">
            <MDBTabsItem>
              <MDBTabsLink
                style={{
                  background: 'transparent',
                  margin: '5px 40px 40px 40px',
                  color: 'black',
                  height: '80px',
                  width: '80px',
                  borderRadius: '20px',
                  padding: '10px',
                }}
              >
                <MDBIcon fas size="3x" icon="briefcase-medical" />
                <h6 style={{ fontSize: '10px', marginTop: '10px' }}>
                  Medicine
                </h6>
              </MDBTabsLink>
            </MDBTabsItem>
          </Link>

        </MDBTabs>
      </MDBCol>
    </>
  );
}
