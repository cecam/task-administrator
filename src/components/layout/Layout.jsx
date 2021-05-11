import {useContext} from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import {AlertContext} from '../../context/alertContext'
import Sidebar from './Sidebar'

const Container = styled.div`
    height: 100vh;
    min-height: 100vh;
    display: flex;

    @media (max-width: 850px) {
        flex-direction: column;
        height: auto;
    }
`
const appear = keyframes({
    'from': {
        opacity: '0',
    },
    'to': {
        opacity: '1',
    }
})
const Alert = styled.div`
    position: absolute;
    top: 5%;
    right: 5px;
    background-color: #eb3853;
    border-radius: 5px;
    color: var(--white);
    min-height: 25px;
    min-width: 120px;
    padding: 10px 15px;
    font-size: 20px;
    font-family: 'PT Sans', sans-serif;
    animation: ${appear} .5s ease;

    @media (max-width: 850px) {
        top: 45vh;
    }
`
const MainView = styled.div`
    width: 100%;
    height: 100%;
`

const Layout = ({children}) => {
    const {showAlert} = useContext(AlertContext)

    return (
        <Container>
            <Global 
                styles={css`
                    :root {
                        --darkBlue: #222831;
                        --grey: #878e99;
                        --blue: #00adb5;
                        --white: #eeeeee;
                    }

                    html {
                        box-sizing: border-box;
                    }

                    *, *:before, *:after {
                        margin: 0;
                        padding: 0;
                        box-sizing: inherit;
                    }

                    body {
                        background-color: var(----white);
                        min-height: 100vh;
                    }

                    h1, h2, h3, button {
                        font-family: 'PT Sans', sans-serif;
                    }

                    p, a, ul, input {
                        font-family: 'Ubuntu', sans-serif;
                    }
                `}
            />
                    
                <Sidebar />
                <MainView>
                    {children}
                </MainView>
                {showAlert
                    ?
                        <Alert>The "name" field is required</Alert>
                    : null
                }
        </Container>
    )
}

export default Layout