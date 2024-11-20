import { Fragment } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <Fragment>
      <form>
        <Input
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1", // Fixed typo here
          }}
        />

        <button>+ Add </button>
      </form>
    </Fragment>
  );
};
export default MealItemForm;
