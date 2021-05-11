import styled from '@emotion/styled'
import {Link} from 'react-router-dom'


const Button = styled.button`
    padding: 10px 15px;
    border: none;
    background: transparent;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--white);
    cursor: pointer;
    transition: .3s ease;

    &:focus, &:active, &:hover {
        color: var(--blue);
        font-size: 19px;
    } 
`

const Project = ({project}) => {
    return (

            <Link to={`/${project.id}`}>
                <Button>{project.name}</Button>
            </Link>
    );
}
 
export default Project;