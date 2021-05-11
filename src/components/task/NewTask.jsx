import {useState, useContext} from 'react'
import styled from '@emotion/styled'
import { v4 as uuidv4 } from 'uuid';

import {AlertContext} from '../../context/alertContext'
import Button from '../general/Button'

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    min-height: 20vh;
    max-height: 35vh;
    background-color: var(--grey);
`
const Form = styled.input`
    border: solid 1px var(--blue);
    border-radius: 8px;
    padding: 15px;
    font-size: 15px;
    width: 100%;
    max-width: 30vw;

    &:focus, &:active, &:hover {
        border: solid 1px var(--blue);
    }

    @media (max-width: 850px) {
        max-width: 50vw;
    }
`
const FormTitle = styled.h2`
    font-size: 26px;
    color: var(--white);
    margin: 0 0 15px 0;
`

const NewTask = ({id, tasks, setTasks}) => {
    const {displayAlert} = useContext(AlertContext)
    const [task, setTask] = useState({
        name: '',
        id: '',
        finished: false,
        projectID: ''
    })

    const handlerInput = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const createTask = () => {
        if(task.name === ''){
            displayAlert()
            return
        }

        task.id = uuidv4()
        task.projectID = id

        setTasks([
            task,
            ...tasks
        ])
        setTask({
            name: '',
            id: '',
            projectID: ''
        })
    }

    return ( 
        <FormContainer>
            <FormTitle>Create a new task</FormTitle>
            <Form
                type="text"
                name="name" 
                placeholder="Task name"  
                value={task.name}
                onChange={handlerInput}
            />
            <Button text="Create task" event={createTask} />
        </FormContainer>
    );
}
 
export default NewTask;