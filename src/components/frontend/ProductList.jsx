import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Navbar from "../../layouts/frontend/Navbar"
import Test from "../../layouts/frontend/Test"

const Container = styled.div``;
const Title = styled.h1`
   margin: 20px;

`;
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;

`;
const Filter = styled.div`
   margin: 20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;

`;
const Option = styled.option``

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters,setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) =>{

    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });


  };

  return (
    <Container>
      <Navbar/>
      
      <Title>Vehicle</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name= "color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name= "Brand" onChange={handleFilters}>
            <Option disabled >
            Brands
            </Option>
            <Option>Toyota</Option>
            <Option>BMW</Option>
            <Option>Ford</Option>
            <Option>Tesla</Option>
            <Option>Suzuki</Option>
            <Option>Hyundai</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
      <Test cat={cat} filters={filters} sort={sort} />
    

      
    </Container>
  )
}

export default ProductList
  