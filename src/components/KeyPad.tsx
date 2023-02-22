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
      <Button className="btn equal" onClick={clearAll}>
        Clear
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("1")}>
        1
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("2")}>
        2
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("3")}>
        3
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("4")}>
        4
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("5")}>
        5
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("6")}>
        6
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("7")}>
        7
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("8")}>
        8
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("9")}>
        9
      </Button>
      <Button className="btn equal" onClick={() => handleNumber("0")}>
        0
      </Button>
      <Button className="btn equal" onClick={() => handleAction("+")}>
        +
      </Button>
      <Button className="btn" onClick={() => handleAction("-")}>
        -
      </Button>
      <Button className="btn" onClick={() => handleAction("*")}>
        x
      </Button>
      <Button className="btn" onClick={() => handleAction("/")}>
        /
      </Button>
      <Button className="btn equal" onClick={handleResult}>
        =
      </Button>
    </div>
  );
};

export default KeyPad;
