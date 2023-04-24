// import Header from "./Components/Header";
// import Input from "./Components/Input";
import { useState } from "react";
import { Inputs } from "./Components/Inputs";


function App() {
  const [flag,setFlag] = useState(true)
  return (
    <div className="App">
      {/* <Header title="gago"/>
      <Header title="vaxo"/>
      <Header /> */}
      {/* <Input /> */}
      <button onClick={()=>setFlag(!flag)}>Click</button>
      {flag? <Inputs /> : null}
    </div>
  );
}

export default App;
