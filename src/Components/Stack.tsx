import React from 'react';
import "./Stack.scss";
import { stack } from "../Module/Projects";

type StackProps = {
    stack: stack;
}

// Stacks: e.g. react, html5, css3, javascript, typescript, python, ...

const stacks = {
    css3: "CSS 3",
    firebase: "Firebase",
    html5: "HTML 5",
    javascript: "JavaScript",
    react: "React",
    redux: "Redux",
    sass: "Sass",
    styledcomponents: "Styled Components",
    typescript: "TypeScript"
}

function Stack({ stack }: StackProps) {

    return (
        <li className="stack-list-item" id={stack}>
            <div className="logos" id={stack}>
                {stack} logo
            </div>
            <div className="hovers">
                {stacks[stack]}
            </div>
        </li>
    );
}

export default Stack;