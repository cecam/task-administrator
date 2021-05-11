import styled from '@emotion/styled'

const ButtonStyle = styled.button`
    padding: 10px 15px;
    width: 100%;
    max-width: 30vw;
    font-size: 18px;
    text-transform: uppercase;
    border: solid 1px var(--blue);
    border-radius: 8px;
    display: block;
    margin: auto;
    background: transparent;
    color: var(--white);
    cursor: pointer;
    transition: .3s ease;

    &:hover {
        color: var(--blue);
        border: solid 1px var(--white);
    }
`

const Button = ({text, event}) => {
    return ( 
        <ButtonStyle onClick={event}>
            {text}
        </ButtonStyle>
    );
}
 
export default Button;