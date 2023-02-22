import { useState } from "react";
import KeyPad from "./KeyPad";
import Screen from "./Screen";

const Calculator = () => {
  const [input, setInput] = useState<string>("");
  const [total, setTotal] = useState<string>("");

  const handleAction = (action: string) => {
    if (total === "") return;
    setInput(input + total + `${action}`);
    setTotal("");
  };

  const clearAll = () => {
    setInput("");
    setTotal("");
  };

  const handleNumber = (num: string) => {
    setTotal(total + num);
  };

  const handleResult = () => {
    const result = String(eval(input + total));
    setTotal(result.substring(0, 6));
    setInput("");
  };

  return (
    <div className="wrapper">
      <div className="title">React Calculator</div>
      <Screen input={input} total={total} />
      <KeyPad
        handleAction={handleAction}
        clearAll={clearAll}
        handleNumber={handleNumber}
        handleResult={handleResult}
      />
    </div>
  );
};

export default Calculator;
