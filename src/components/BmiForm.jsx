import calculateBmi from "../common/calculateBmi";

const BmiForm = (props) => {
  const { height, weight, setHeight, setWeight, setResult } = props;
  return (
    <form>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        ></input>
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        ></input>
      </div>

      <button
        className="btn btn-success w-100"
        onClick={() => {
          if (height < 100) {
            alert("You need to put height bigger than 100 cm");
            return;
          }
          if (weight < 50) {
            alert("You need to put weight bigger than 50 Kg");
            return;
          }
          const result = calculateBmi(height, weight);

          setResult(result);
        }}
        type="button"
      >
        Calculate
      </button>
      <button
        className="btn btn-primary w-100"
        onClick={() => {
          setHeight("");
          setWeight("");
          setResult("");
        }}
        type="button"
      >
        Reset
      </button>
    </form>
  );
};
export default BmiForm;
