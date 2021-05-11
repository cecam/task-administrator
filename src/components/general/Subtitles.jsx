import styled from '@emotion/styled'

const Subitle = styled.h2`
    font-size: 22px;
    margin: 0 0 20px 0;
    text-align: center;
`

const Subtitles = ({subtitle}) => {
    return ( 
        <Subitle>{subtitle}</Subitle>
    );
}
 
export default Subtitles;