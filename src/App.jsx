import React from "react";
import Button from "./Button";
import Name from "./Name";
import Random from "./Random";

function App(){
  return (
    <div>
      <h1 className="text-red-500 text-5xl">This is tailwindcss</h1>
      <Button></Button>
      <Name></Name>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
)
}

export default App;