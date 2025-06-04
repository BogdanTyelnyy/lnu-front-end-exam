import Picture from "../Picture/Picture";
import { useState, useEffect } from "react";
import { update } from "../../math/math.js";
import "./Calculator.css";
export default function Calculator() {
    const [current, setCurrent] = useState("");
    function handleClick(e) {
        update(e, setCurrent, current);
    }
    return (
        <Picture 
            id={"calculator-opened"} 
            src={"calculator.svg"} 
            width={300}
            className={"calculator-opened"}
            onClick={handleClick}
        >
            <div id="calculator-text">
                {current}
            </div>
        </Picture>
    );
}