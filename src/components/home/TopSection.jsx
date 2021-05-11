import styled from '@emotion/styled'

import {Text, appear, spin} from './StyledComponents'

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px 20px;
    height: 50%;
    background-color: var(--blue);

    @media (max-width: 850px) {
        padding: 10px;
        min-height: 30vh;
    }
`
const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: 0 0 25px 0;
    animation: ${appear} 2s ease;
`
const Image = styled.img`
    max-width: 10vw;
    height: auto;
    animation: ${spin} 2s ease;

    @media (max-width: 850px) {
        max-width: 100px;
    }
`
const Title = styled.h2`
    text-align: center;
    font-size: 4vw;
    color: var(--white);

    @media (max-width: 850px) {
        font-size: 35px;
        margin: 0 0 10px 0;
    }
`

const TopSection = () => {
    return ( 
        <Section>
            <Header>
                <Title>Welcome to the new ToDo list</Title>
                <Image 
                    src="/images/chek.png" alt="logo"  
                />
            </Header>
            <Text>Web app that anyone can use.</Text>
            <Text>This app allow you to administrate your pending projects and task. Hopefully it will helps you to accomplish all your goals.</Text>
        </Section>
    );
}
 
export default TopSection;