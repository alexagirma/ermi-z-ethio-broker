import { Search } from '@material-ui/icons'
import styled from 'styled-components'




const Container = styled.div`          
   height: 35vh;
   background-color: #2badf2;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: 0px;
   z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;

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
    border-radius:200px;
`;  
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    border-radius: 0.5rem;

    

`;
const Button = styled.button`
    flex: 1;
    border: none;
    border-radius: 0.5rem;

    background-color: white;
    color: #2badf2;

`;

function Slider(){



  return (
    <Container>

      <Title>Ermi the Ethiopian relationship in trust</Title>
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