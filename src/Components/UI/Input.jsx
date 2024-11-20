import { Fragment } from "react";

const Input = (props) => {
    return (
        <Fragment>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input}/>
        </Fragment>
    )
}

export default Input;