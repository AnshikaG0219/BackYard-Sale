import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { Badge } from "@material-ui/core";

export default function NavBar() {
  return (
    <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand
          style={{ fontWeight: "bold", color: "#262A53", fontSize: "1.5rem" }}
          href="#home"
        >
          Backyard Sale
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="navitem" to="/">
              Home
            </NavLink>
            <NavLink className="navitem" to="/shop">
              Shop
            </NavLink>
            <NavLink className="navitem" to="/about">
              About Us
            </NavLink>
            <NavLink className="navitem" to="/contact">
              Contact Us
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="navitem" to="/cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
