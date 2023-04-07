import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Navbar';
import FilterPanel from './FilterPanel'
import EmptyView from '../EmptyView/EmptyView';
import List from './List';
import { dataList } from '../Constants';
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import './home.css';




const Container = styled.div`


`;



const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 40px;

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


  




const Filters = () => {


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



  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Addis Ababa' },
    { id: 2, checked: false, label: 'Adama' },
    { id: 3, checked: false, label: 'Bahirdar' },
    { id: 4, checked: false, label: 'Hawasa' },
    { id: 5, checked: false, label: 'Diredawa' },
  ]);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice]);

  return (


    <Container>
      

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
  

    
 

    
    <div className='home'>
      <Navbar/>
      {/* Search Bar */}
      <div className='home_panelList-wrap'>
        {/* Filter Panel */}
        <div className='home_panel-wrap'>
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            changePrice={handleChangePrice}
          />
        </div>
        {/* List & Empty View */}
        <div className='home_list-wrap'>
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
    </Container>

  );
};

export default Filters;
