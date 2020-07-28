import React from 'react';
import "./ProjectDescription.scss";
import Button from './Button';
import Stack from './Stack';
import { stack } from '../Module/Projects';

type ProjectDescriptionProps = {
    isEvenNum: boolean;
    websiteUrl: string;
    repositoryUrl: string;
    description: string;
    stacks: stack[];
    libraries: string[];
}

function ProjectDescription({
    isEvenNum,
    websiteUrl,
    repositoryUrl,
    description,
    stacks,
    libraries
}: ProjectDescriptionProps) {

    const className = "project-description" +
        (isEvenNum? " even" : " odd");

    return (
        <div className={className}>
            <div className="description-upper">
                <div className="stacks-list-wrapper">
                    <h4>Stacks</h4>
                    <ul className="stacks-list">
                        {
                            stacks.map(stack => (
                                <Stack key={stack} stack={stack}/>
                            ))
                        }
                    </ul>
                    {
                        libraries.length > 0
                        ? <>
                            <h4>Other Libraries</h4>
                            <ul className="libraries-list">
                                {
                                    libraries.map(library => (
                                        <li key={library}>{library}</li>
                                    ))
                                }
                            </ul>
                        </>
                        : null
                    }
                </div>
                <div className="description-wrapper">
                    <h4>Description</h4>
                    <div className="description-text" dangerouslySetInnerHTML={{__html: description}}>
                    </div>
                </div>
            </div>
            <div className="buttons-wrapper">
                <Button href={websiteUrl}>Live Website</Button>
                <Button href={repositoryUrl}>Github Repository</Button>
            </div>
        </div>
    );
}

export default ProjectDescription