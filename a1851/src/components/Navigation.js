import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import C2851 from "./C2851";

function Navigation() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">C1851</NavLink>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/C2851">C2851</NavLink>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
  }
  
  export default Navigation;