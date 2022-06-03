import React from "react";
import Button from "@mui/material/Button";
import { purple, orange } from "@mui/material/colors";
import styled from "styled-components";
import "./dashboard.css";

export default function AdminDashboard() {
  return (
    <Container>
      <div className="container" align="center">
        &nbsp; &nbsp; &nbsp;
        <Form>
          <center>
            <h1>Admin DashBoard</h1>
          </center>

          <div class="container mt-12 d-flex justify-content-center main">
            <div class="d-flex justify-content-between px-3 pt-4">
              <Button
                className="btnAdmin1"
                style={{ backgroundColor: orange[600] }}
                variant="contained"
                href="/addMovie"
              >
                Add Movie
              </Button>
            </div>
            <div class="d-flex justify-content-between px-3 pt-4">
              <Button
                style={{ backgroundColor: orange[600] }}
                variant="contained"
                href="/displayMovies"
              >
                Manage Movie
              </Button>
            </div>
            <div class="d-flex justify-content-between px-3 pt-4">
              <Button
                style={{ backgroundColor: orange[600] }}
                variant="contained"
                href="/addTheater"
              >
                Add Theaters
              </Button>
            </div>
            &nbsp; &nbsp; &nbsp;
          </div>
        </Form>
        &nbsp; &nbsp; &nbsp;
      </div>
    </Container>
  );
}
const Form = styled.div`
  width: 50%;
  padding: 50px;
  background: #f2f2f2;
  border-radius: 15px;
  box-shadow: 10px 10px 30px 0;
  text-align: left;
`;
const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/Pic.png") center center / cover no-repeat fixed;
    content: "";
    position: fixed;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
