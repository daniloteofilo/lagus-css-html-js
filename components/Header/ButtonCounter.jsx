import { useState } from "react";
import { ButtonStyled } from "./styles";


export default function ButtonCounter() {
    let [currentValue, setCurrentValue] = useState(1);
    const icrementValue = () => {
        setCurrentValue(currentValue++)
    }

    return (
        <ButtonStyled onClick={()=> icrementValue()}>
            clicked {currentValue} {currentValue > 1 ? `times`: `time`}
        </ButtonStyled>
    );
}