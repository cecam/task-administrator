import { useContext } from 'react'
import styled from '@emotion/styled'

import {ProjectContext} from '../../context/projectContext'
import Subtitles from '../general/Subtitles'
import Project from '../projects/Project'

const Projects = styled.div`
    display: flex;
    flex-direction: column;
`
const Message = styled.p`
    font-size: 16px;
    color: var(--white);
    text-align: center;
`

const ProjectList = () => {
    const {projects} = useContext(ProjectContext)
    
    return ( 
        <>
            <Subtitles subtitle="Projects" />

            {!projects || projects.length === 0
                ?
                    <Message>No projects yet</Message>
                     
                :
                    <Projects>
                        {projects.map(project => (
                            <Project project={project} key={project.id} />
                        ))}
                    </Projects> 
            }
            
        </>
    );
}
 
export default ProjectList;