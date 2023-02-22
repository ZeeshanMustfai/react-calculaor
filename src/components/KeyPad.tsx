import { Button } from "antd";
interface KeyProps {
  handleAction: (arg: string) => void;
  clearAll: VoidFunction;
  handleNumber: (arg: string) => void;
  handleResult: VoidFunction;
}
const KeyPad = ({
  handleAction,
  clearAll,
  handleNumber,
  handleResult,
}: KeyProps) => {
  return (
    <div className="btn-wrapper">
      <Button className="btn equal" id="clear" onClick={clearAll}>
        Clear
      </Button>
      <Button className="btn equal" id="one" onClick={() => handleNumber("1")}>
        1
      </Button>
      <Button className="btn equal" id="two" onClick={() => handleNumber("2")}>
        2
      </Button>
      <Button
        className="btn equal"
        id="three"
        onClick={() => handleNumber("3")}
      >
        3
      </Button>
      <Button className="btn equal" id="four" onClick={() => handleNumber("4")}>
        4
      </Button>
      <Button className="btn equal" id="five" onClick={() => handleNumber("5")}>
        5
      </Button>
      <Button className="btn equal" id="six" onClick={() => handleNumber("6")}>
        6
      </Button>
      <Button
        className="btn equal"
        id="seven"
        onClick={() => handleNumber("7")}
      >
        7
      </Button>
      <Button
        className="btn equal"
        id="eight"
        onClick={() => handleNumber("8")}
      >
        8
      </Button>
      <Button className="btn equal" id="nine" onClick={() => handleNumber("9")}>
        9
      </Button>
      <Button className="btn equal" id="zero" onClick={() => handleNumber("0")}>
        0
      </Button>
      <Button
        className="btn equal"
        id="decimal"
        onClick={() => handleNumber(".")}
      >
        .
      </Button>
      <Button className="btn equal" id="add" onClick={() => handleAction("+")}>
        +
      </Button>
      <Button className="btn" id="subtract" onClick={() => handleAction("-")}>
        -
      </Button>
      <Button className="btn" id="multiply" onClick={() => handleAction("*")}>
        x
      </Button>
      <Button className="btn" id="divide" onClick={() => handleAction("/")}>
        /
      </Button>
      <Button className="btn equal" id="equals" onClick={handleResult}>
        =
      </Button>
    </div>
  );
};

export default KeyPad;
