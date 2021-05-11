import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";

import {ProjectContext} from '../context/projectContext'
import {TaskContext} from '../context/taskContext'
import NewTask from '../components/task/NewTask'
import TaskList from '../components/task/TaskList'

const ProjectPage = () => {
    const {projects} = useContext(ProjectContext)
    const {tasks, setTasks} = useContext(TaskContext)
    let { id } = useParams();
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        let projectFounded = projects.filter(project => id === project.id)
        setCurrentProject(projectFounded[0])
    }, [id, projects, setCurrentProject])

    return ( 
        <>
            <NewTask 
                {...currentProject} 
                tasks={tasks} 
                setTasks={setTasks} 
            />
            <TaskList {...currentProject} />
        </>
     );
}
 
export default ProjectPage;