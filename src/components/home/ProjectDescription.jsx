import styled from '@emotion/styled'

import {Text, appear} from './StyledComponents'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 20px;
    height: 50%;
    background-color: var(--white);

    @media (max-width: 850px) {
        padding: 10px;
        min-height: 30vh;
    }
`
const Title = styled.h2`
    font-size: 2.5vw;
    color: var(--darkBlue);
    text-align: center;
    margin: 0 0 20px 0;
    animation: ${appear} ease 2s;

    @media (max-width: 850px) {
        font-size: 28px;
        margin: 0 0 10px 0;
    }
`
const Subtitle = styled.h3`
    font-size: 2vw;
    color: var(--darkBlue);
    text-align: center;
    margin: 0 0 20px 0;
    animation: ${appear} ease 2s;

    @media (max-width: 850px) {
        font-size: 24px;
        margin: 0 0 10px 0;
    }
`

const ProjectDescription = () => {
    return ( 
        <Section>
            <Title>About the project:</Title>
            <Text>
                All the information that you store on the app will be saved locally on your browser, for that reazon you'll be able to use it only in one device.
            </Text>
            <Subtitle>What's next?</Subtitle>
            <Text>
                The next step for the application will be to implement a pomodoro counter in order to work in blocks of time on each task while marking them as completed. All without leaving the web.
            </Text>
        </Section>
    );
}
 
export default ProjectDescription;