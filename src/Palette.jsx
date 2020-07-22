import React from "react";
import Colors from "./Colors";
import { SwatchesPicker } from 'react-color'
import "./Palette.css";

const tinycolor = require("tinycolor2");

export default function Palette({ isSuccess, setIsSuccess, color, setColor, colorType, variation, setting, settingValue }) {
  let colors;
  // Using a switch to set variation type set
  switch (variation) {
    case "tetrad":
      colors = tinycolor(color).tetrad();
      break;
    case "analogous":
      colors = tinycolor(color).analogous();
      break;
    case "monochromatic":
      colors = tinycolor(color).monochromatic();
      break;
    case "splitcomplement":
      colors = tinycolor(color).splitcomplement();
      break;
    case "triad":
      colors = tinycolor(color).triad();
      break;
    case "tetrad":
      colors = tinycolor(color).tetrad();
      break;
    case "complement":
      colors = tinycolor(color).complement().toHexString();
      break;
  }

  // Using a dictionary object to set setting
  const settings = color => {
    const converter = {
      lighten: tinycolor(color).lighten(settingValue).toString(),
      brighten: tinycolor(color).brighten(settingValue).toString(),
      darken: tinycolor(color).darken(settingValue).toString(),
      desaturate: tinycolor(color).desaturate(settingValue).toString(),
      saturate: tinycolor(color).saturate(settingValue).toString(),
      undefined: color,
    };

    return converter[setting];
  };

  let colorPalette;
  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  } else {
    colorPalette = colors.map(t => {
      let hexColor = t.toHexString();
      let rgbColor = t.toRgbString();
      t.getAlpha();
      rgbColor = settings(rgbColor);
      hexColor = settings(hexColor);

      return <Colors 
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        color={colorType === "rgb" ? rgbColor : hexColor} />;
    });
  }

  const setNewColor = color => {
    setColor(color.hex)
  }

  return (
    <div className="palette">
      <div id="container">{colorPalette}</div>
      <SwatchesPicker 
        color={color}
        onChangeComplete={setNewColor}
        className="swatch"
        width="100%"
        height="auto"
      />
    </div>
  )
}
