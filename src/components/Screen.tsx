type ScreenProps = {
  input: string;
  total: string;
};
const Screen = ({ input, total }: ScreenProps) => {
  return (
    <div className="visor" id="display">
      <div className="acc">{input}</div>
      <div className="total">{total}</div>
    </div>
  );
};

export default Screen;
