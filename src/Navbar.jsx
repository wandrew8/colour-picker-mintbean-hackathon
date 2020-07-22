import React from "react";
import { Navbar, Form, Nav, FormControl, NavDropdown } from "react-bootstrap";
const tinycolor = require("tinycolor2");

export default function Settings({
  changeColor,
  changeVariation,
  changeSetting,
  changeSettingValue,
  changeColorType,
  colorType,
  color
}) {
  const handleHexChange = e => {
    e.preventDefault();
    changeColor(e.target.value);
  };

  const handleVariationChange = variation => {
    changeVariation(variation);
  };

  const changeSettings = setting => {
    changeSetting(setting);
  };

  const handleChangeColorType = type => {
    changeColorType(type);
  }

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeColor(randomColor);
  };

  const handleSettingValueChange = e => {
    changeSettingValue(e);
  };

  return (
    <div>
      <Navbar style={{backgroundColor: tinycolor(color).darken(30).toString()}} expand="lg" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>Color Palette Generator</Navbar.Brand>
            <NavDropdown
              onSelect={e => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
    
            <NavDropdown
              onSelect={e => changeSettings(e)}
              title="Settings"
              id="settings"
            >
              <NavDropdown.Item eventKey="lighten">
                  Lighten
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="brighten">
                  Brighten
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="darken">
                  Darken
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="desaturate">
                  Desaturate
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="saturate">
                  Saturate
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="random" onClick={() => setRandom()}>
              Random
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleChangeColorType("rgb")}
              className={colorType === "rgb" ? "active" : null}>
              RGB
            </Nav.Link>
            <Nav.Link 
              onClick={() => handleChangeColorType("hex")}
              className={colorType === "hex" ? "active" : null}>
              Hex
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
        <Form onChange={e => handleHexChange(e)} inline>
          <Form.Label style={{fontSize: "2rem", cursor: "pointer"}}>🎨
          <FormControl style={{opacity: 0}} type="color" />
          </Form.Label>
        </Form>
      </Navbar>
    </div>
  );
}
