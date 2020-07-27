import React from 'react';
import "./ToNextButton.scss";

const scrollToRef = (ref: string) => {
    const element = document.getElementById(ref);
    element?.scrollIntoView({ behavior: "smooth" })
};

type ToNextButtonProps = {
    toNext: boolean;
    reference: any;
}

function ToNextButton ({ toNext, reference }: ToNextButtonProps) {

    const className = "to-next-button" + (
        toNext ? " to-next" : " to-prev"
    );

    const onClick = () => scrollToRef(reference);

    return <button onClick={onClick} className={className}>
        <div className="arrow">
            { toNext ? "To Next" : "To Prev"}
        </div>
    </button>;
}

export default ToNextButton;