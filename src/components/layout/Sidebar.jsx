import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

import ProjectList from '../projects/ProjectList'
import NewProject from '../projects/NewProject'

const SideBar = styled.div`
    padding: 20px;
    background-color: var(--darkBlue);
    color: var(--white);
    width: 25%;
    max-width: 250px;
    height: 100%;
    text-align: center;

    @media (max-width: 850px) {
        width: 100%;
        max-width: 100%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    font-family: 'PT Sans', sans-serif;
    font-size: 25px;
`

const Sidebar = () => {
    return ( 
        <SideBar>
            <StyledLink to="/">Task Manager</StyledLink>
            <NewProject />
            <ProjectList />
        </SideBar>
     );
}
 
export default Sidebar;