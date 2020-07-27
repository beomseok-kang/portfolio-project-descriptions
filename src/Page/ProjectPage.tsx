import React from 'react';
import ProjectContainer from '../Container/ProjectContainer';
import { project } from '../Module/Projects';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function ProjectPage() {

    let queryKey = useQuery().get('key');

    const projects: project[] = require('../Assets/json/projects.json');

    return <ProjectContainer queryKey={queryKey?queryKey:undefined} projects={projects}/>;
}

export default ProjectPage;