import React from "react";

interface ButtonProps{
    name: string;
}

const Button: React.FC <ButtonProps> = ({name}) => {
    function handleClick() {
        alert('se hizo click');
    }
    return(
        <>
        <button onClick={handleClick}>{name}</button>        
        </>
    )
}

export default Button