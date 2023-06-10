import { useState } from "react";
import "./app.scss";
import BmiForm from "./components/BmiForm";
import Header from "./components/Header";
import Result from "./components/Result";
//import BmiCategories from "./BmiCategories";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  return (
    <div className="container">
      <Header />

      <BmiForm
        height={height}
        setHeight={setHeight}
        weight={weight}
        setWeight={setWeight}
        setResult={setResult}
      />

      <Result result={result} />
    </div>
  );
}

export default App;
