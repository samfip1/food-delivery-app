import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    return (
        <li>
            <div>
                <h3> {props.name}</h3>
                <h3>{props.description}</h3>
                <h3>{props.price}</h3>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )

}
export default MealItem;