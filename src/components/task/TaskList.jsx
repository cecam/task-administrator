import { useState, useEffect, useContext } from 'react'
import styled from '@emotion/styled'

import {TaskContext} from '../../context/taskContext'
import Task from './Task'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
`
const TitleSection = styled.h2`
    font-size: 5vw;
    margin: 0 0 20px 0;
    color: var(--darkBlue);

    @media (max-width: 850px) {
        font-size: 45px;
    }
`
const TaskSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
    width: 70%;

    @media (max-width: 850px) {
        width: 100%;
    }
`

const TaskList = ({name, id}) => {
    const {tasks} = useContext(TaskContext)
    const [currentTasks, setCurrentTasks] = useState([])

    useEffect(() => {
        let filteredTasks = tasks.filter(task => task.projectID === id)
        setCurrentTasks(filteredTasks)
    }, [tasks, id])

    return ( 
        <Container>
            <TitleSection>{name} tasks</TitleSection>
            <TaskSection>
                {currentTasks.map(task => (
                    <Task task={task} key={task.id} />
                ))}
            </TaskSection>
        </Container>
    );
}
 
export default TaskList;