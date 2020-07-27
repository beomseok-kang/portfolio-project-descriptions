import React from 'react';
import "./Button.scss";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    isFilled: boolean;
}

function Button({ href, children, isFilled }: ButtonProps) {

    const className = "btn" + (
        isFilled? " filled": ""
    );

    return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

Button.defaultProps = {
    isFilled: false,
    children: ''
}

export default Button;