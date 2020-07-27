import React from 'react';
import ProjectPhotoAndName from '../Components/ProjectPhotoAndName';
import ProjectDescription from '../Components/ProjectDescription';
import { project } from '../Module/Projects';
import "./ProjectListItemContainer.scss";
import ToNextButton from '../Components/ToNextButton';

type ProjectListItemContainerProps = {
    project: project;
    isEvenNum: boolean;
};

function ProjectListItemContainer ({ project, isEvenNum }: ProjectListItemContainerProps) {

    
    const className = "project-list-item" + (
        isEvenNum? " even": " odd"
    );

    return (
        <li className={className} id={project.key.toString()}>
            <div className="item-left">
                {
                    project.key !== 1
                    ? <ToNextButton toNext={false} reference={(project.key-1).toString()}/>
                    : null
                }
                <ProjectPhotoAndName
                    abbr={project.abbr}
                    title={project.title}
                    isEvenNum={isEvenNum}
                />
                {
                    project.key !== 6
                    ? <ToNextButton toNext reference={(project.key+1).toString()}/>
                    : null
                }
            </div>
            <ProjectDescription
                repositoryUrl={project.siteUrls.githubUrl}
                websiteUrl={project.siteUrls.pageUrl}
                isEvenNum={isEvenNum}
                description={project.description}
                stacks={project.stacks}
                libraries={project.libraries}
            />
        </li>
    );
}

export default ProjectListItemContainer;