export type project = {
    key: number;
    abbr: string;
    title: string;
    stacks: stack[];
    libraries: string[];
    description: string;
    siteUrls: {
        pageUrl: string;
        githubUrl: string;
    };
}

export type stack = 'css3'
    | 'firebase'
    | 'html5' 
    | 'javascript' 
    | 'react' 
    | 'redux'
    | 'sass'
    | 'styledcomponents'
    | 'typescript';