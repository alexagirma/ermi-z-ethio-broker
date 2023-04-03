import { Search } from '@material-ui/icons'
import styled from 'styled-components'
import boy from '../../../assets/frontend/img/img/boy.png';




const Container = styled.div`          
   height: 40vh;
   background-color: #2badf2;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: row;
   margin-top: 0px;
   z-index: -1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 100%;
  padding: 10px 0px 25px 8px;
  display: flex;
  
  

`;
const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 53px;
    color: white;

`;

const InputContainer = styled.div`
    width: 90%;
    height: 5vh;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius:200px;
    margin-bottom: 55px;

`;  
const Input = styled.input`
    border: none;
    padding-left: 6em;
    border-radius: 0.5rem;

    

`;
const Button = styled.button`
    flex: 1;
    border: none;
    border-radius: 0.5rem;

    background-color: white;
    color: #2badf2;


`;
const Right = styled.div`


position: relative;
font-size: 10px;
display: flex;
align-items: center;
font-size: 10px;
padding: 10px 05px 0px 150px;
    
`;

const Left = styled.div`
flex-direction: column;
display: flex;
align-items: center;
font-size: 20px;
padding: 19px 60px 0px 20px;
margin-left: 50px


`;



function Slider(){



  return (
    <Container>
   
  <Left>
      <Title>Ermi the Ethiopian relationship in trust</Title>
      <InputContainer>
          <Input placeholder="I am looking for..........."/>
          <Button>
            <Search/>
          </Button>
      </InputContainer>
      </Left>
      <Right>
   <img  src={boy} alt="" />

  </Right>

    </Container>
  )
}

export default Slider