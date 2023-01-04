import { Search } from '@material-ui/icons'
import styled from 'styled-components'



const Container = styled.div`
   height: 40vh;
   background-color: #2badf2;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: -25px;

`;
const Title = styled.h1`
    font-size: 20px;
    margin-bottom: 60px;
    color: white;

`;

const InputContainer = styled.div`
    width: 30%;
    height: 15%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`;  
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    

`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: white;
    color: #2badf2;

`;

function Slider(){
  return (
    <Container>

      <Title>ኤርሚ ዘ ኢትዮጵያ በመታመን ውስጥ ያለ ግንኙነት</Title>
      <InputContainer>
          <Input placeholder="I am looking for..."/>
          <Button>
            <Search/>
          </Button>
      </InputContainer>

    </Container>
  )
}

export default Slider