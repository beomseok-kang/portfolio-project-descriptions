import React from 'react';
import "./ProjectPhotoAndName.scss";

type ProjectPhotoAndNameProps = {
    abbr: string;
    title: string;
    isEvenNum: boolean;
}

function ProjectPhotoAndName({ abbr, title, isEvenNum }: ProjectPhotoAndNameProps) {

    const className = "project-photo_and_name" +
        (isEvenNum? " even" : " odd");

    return (
        <div className="project-photo_and_name-wrapper" id={abbr}>
            <div className={className}>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default ProjectPhotoAndName;