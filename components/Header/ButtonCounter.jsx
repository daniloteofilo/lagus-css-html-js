import { useState } from "react";
import { ButtonStyled } from "./styles";


export default function ButtonCounter() {
    const  [currentValue, setCurrentValue] = useState(1);
    const incrementValue = () => {
        setCurrentValue(currentValue+1)
    }

    return (
        <ButtonStyled onClick={incrementValue}>
            clicked {currentValue} {currentValue > 1 ? `times`: `time`}
        </ButtonStyled>
    );
}