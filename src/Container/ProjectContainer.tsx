import React, { useEffect } from 'react';
import { project } from "../Module/Projects";
import "./ProjectContainer.scss";
import ProjectListItemContainer from './ProjectListItemContainer';

type ProjectContainerProps = {
    queryKey?: string;
    projects: project[];
};

const scrollToRef = (ref: string) => {
    const element = document.getElementById(ref);
    element?.scrollIntoView();
};

function ProjectContainer({ queryKey, projects }: ProjectContainerProps) {

    const checkEven = (key: number) => {
        return (key%2) === 0
    }

    useEffect(() => {
        if(queryKey) scrollToRef(queryKey);
    });

    return (
        <ol className="projects-list">
            {
                projects.map(
                    project => {
                        const isEvenNum = checkEven(project.key);
                        return <ProjectListItemContainer key={project.key} isEvenNum={isEvenNum} project={project}/>
                    }
                )
            }
        </ol>
    );
}

export default ProjectContainer