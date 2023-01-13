import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Navbar from "../../layouts/frontend/Navbar"



const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
   flex: 1;
   max-width: 100%;



`;

const Image = styled.img`
   width: 100%;
   height: 50vh;
   object-fit: cover;

`;
const InfoContainer = styled.div`
   flex: 1;
   padding: 0px 50px;

`;
const Title = styled.h1`
   font-weight: 200;

`;
const Desc = styled.p`
   margin: 20px 0px;

`;
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;

`;


const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;

`;
const Filter = styled.div`
   display: flex;
   align-items: center;


`;
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;

`;
const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => props.color};
   margin: 0px 5px;
   cursor: pointer;

`;
const FilterSize = styled.select`
   margin-left: 10%;
   padding: 7px;

`;
const FilterSizeOption = styled.option``;


const AddContainer = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;

`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;


`;
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 5px;


`;
const Button = styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;

   &:hover{
    background-color: #497979;
   }



`;




const Product = () => {
  return (
    <Container>

        <Navbar/>
       

        <Wrapper>
          <ImgContainer>
           <Image src="https://purepng.com/public/uploads/large/61502738450rmdyyubo5bupscm2oegdvnn6xb7yysuzcvpydir88l3gohfrpwxfagozxsdigyculn6z7gdtbrn48quwogndauzjsizmpaxijbab.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Lorem Ipsum </Title>
            <Desc>
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here,It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            as opposed to using 'Content here,

            </Desc>
            <Price>1000 Birr</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>

              </Filter>
              <Filter>
                <FilterTitle>Brands</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>Toyota</FilterSizeOption>
                  <FilterSizeOption>BMW</FilterSizeOption>
                  <FilterSizeOption>Ford</FilterSizeOption>
                  <FilterSizeOption>Tesla</FilterSizeOption>
                  <FilterSizeOption>Suzuki</FilterSizeOption>
                  <FilterSizeOption>Hyundai</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
               <AmountContainer>

                <Remove/>
                <Amount>1</Amount>
                <Add/>

               </AmountContainer>

               <Button>ADD TO CART</Button>
               
            </AddContainer>

          </InfoContainer>.
        </Wrapper>

       
      
    </Container>
  )
}

export default Product
