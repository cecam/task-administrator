import {useContext} from 'react'

import styled from '@emotion/styled'
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { keyframes } from '@emotion/react'

import {TaskContext} from '../../context/taskContext'

const appear = keyframes({
    'from': {
        opacity: '0',
    },
    'to': {
        opacity: '1',
    }
})
const Card = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-areas: "taskName actions";
    align-items: center;
    width: 100%;
    margin: 15px 0;
    padding: 10px 15px;
    border: solid 1px var(--grey);
    border-radius: 5px;
    animation: ${appear} .5s ease;
`
const TaskName = styled.p`
    grid-area: taskName;
    font-size: 20px;
    letter-spacing: 1px;
    color: var(--darkBlue);
`
const Actions = styled.div`
    grid-area: actions;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const ActionButton = styled.button`
    font-size: 26px;
    transition: .3s ease;
    border: none;
    background: transparent;
    cursor: pointer;

    &:hover {
        font-size: 30px;
    }

    @media (max-width: 850px) {
        font-size: 22px;

        &:hover {
            font-size: 24px;
        }
    }
`
const Completed =styled.p`
    color: #2ab34c;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
`

const Task = ({task}) => {
    const {tasks, setTasks} = useContext(TaskContext)

    const updateTask = () => {
        let foundIndex = tasks.findIndex(x => x.id === task.id)
        console.log(foundIndex)
        task.status = true
        tasks[foundIndex] = task
        setTasks([
            ...tasks
        ])
    }

    const deleteTask = () => {
        setTasks(
            tasks.filter(fulltask => task.id !== fulltask.id)
        )
    }

    return ( 
        <Card>
            <TaskName>{task.name}</TaskName>
            <Actions>
                {!task.status 
                    ?
                        <>
                            <ActionButton
                                onClick={updateTask}
                            >
                                <FaCheckCircle style={{color: '#2ab34c'}} />
                            </ActionButton>  
                            <ActionButton
                                onClick={deleteTask}
                            >
                                <FaTrashAlt style={{color: '#eb3853'}} />
                            </ActionButton> 
                        </>
                    :
                        <Completed>Completed</Completed>
                }
            </Actions>
        </Card>
    );
}
 
export default Task;