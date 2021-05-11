import {createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';

import useLocalStorage from '../hooks/useLocalStorage'

export const ProjectContext = createContext()

const ProjectProvider = ({children}) => {
    const [projects, setProjects] = useLocalStorage('projects', [])

    const createProject = project => {
        project.id = uuidv4()
        setProjects([
            ...projects,
            project
        ])
    }

    return (
        <ProjectContext.Provider
            value={{
                projects,
                createProject,
                setProjects
            }}
        >
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider

