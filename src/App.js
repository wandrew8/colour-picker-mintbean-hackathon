import React, { useState } from "react";
import "./App.scss";
import Palette from "./Palette";
import Settings from "./Navbar";

function App() {
  const [ colorType, setColorType ] = useState('hex');
  const [ color, ChangeColor ] = useState("#8feaff");
  const [ variation, changeVariation ] = useState("tetrad");
  const [ setting, changeSetting ] = useState();
  const [ settingValue, changeSettingValue ] = useState(20);

  return (
    <div className="App">
      <Settings
        changeColorType={setColorType}
        changeSetting={changeSetting}
        changeVariation={changeVariation}
        changeColor={ChangeColor}
        changeSettingValue={changeSettingValue}
        colorType={colorType}
      />
      <Palette
        colorType={colorType}
        settingValue={settingValue}
        setting={setting}
        variation={variation}
        color={color}
      />
    </div>
  );
}

export default App;
