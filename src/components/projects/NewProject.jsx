import { useState, useContext } from 'react'
import styled from '@emotion/styled'

import {ProjectContext} from '../../context/projectContext'
import {AlertContext} from '../../context/alertContext'
import Button from '../general/Button'

const Container = styled.div`
    padding: 20px;
`
const StyledInput = styled.input`
    border: solid 1px var(--blue);
    margin: 0 0 15px 0;
    border-radius: 8px;
    padding: 15px;
    font-size: 15px;
    width: 100%;

    &:focus, &:active, &:hover {
        border: solid 1px var(--blue);
    }
`
const NewProject = () => {
    const { createProject } = useContext(ProjectContext)
    const {displayAlert} = useContext(AlertContext)

    const [showInput, setShowInput] = useState(false)
    const [project, setProject] = useState({
        id: '',
        name: ''
    })

    const handlerForm = () => {
        setShowInput(!showInput)
    }

    const handlerInput = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const addProject = async () => {
        if(project.name === '') {
            displayAlert()
            return
        }

        createProject(project)

        setProject({
            name: '',
            id: ''
        })
        handlerForm()
    }

    return ( 
        <Container>
            {showInput
                ?
                    (
                        <>
                            <StyledInput 
                                type="text"
                                name="name" 
                                placeholder="Your name project" 
                                value={project.name}
                                onChange={handlerInput} 
                            />
                            <Button text="create" event={addProject} />
                        </>
                    )
                :
                    <Button text="new project" event={handlerForm} />
            }            
        </Container> 
    );
}
 
export default NewProject;