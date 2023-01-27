import React, { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView';
import FilterPanel from '../../components/Home/FilterPanel';
import List from '../../components/Home/List';
import SearchBar from '../../components/Home/SearchBar';
import { dataList } from '../../constants';
import './styles.css';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([300000, 40000000]);

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'Toyota' },
    { id: 2, checked: false, label: 'Hyundai' },
    { id: 3, checked: false, label: 'Suzuki' },
    { id: 4, checked: false, label: 'Nissan' },
    { id: 5, checked: false, label: 'Volkswagen' },
    { id: 6, checked: false, label: 'Audi' },
    { id: 7, checked: false, label: 'Bestune' },
    { id: 8, checked: false, label: 'BJC' },
    { id: 9, checked: false, label: 'BMW' },
    { id: 10, checked: false, label: 'Brilliance' },
    { id: 11, checked: false, label: 'Cadillac' },
    { id: 12, checked: false, label: 'Chery' },
    { id: 13, checked: false, label: 'Chevrolet' },
    { id: 14, checked: false, label: 'Citroen' },
    { id: 15, checked: false, label: 'Daewoo' },
    { id: 16, checked: false, label: 'Daihatsu' },
    { id: 17, checked: false, label: 'Datsun' },
    { id: 18, checked: false, label: 'Dodge' },
    { id: 19, checked: false, label: 'Dongefeng' },
    { id: 20, checked: false, label: 'Fiat' },
    { id: 21, checked: false, label: 'Ford' },
    { id: 22, checked: false, label: 'Geely' },
    { id: 23, checked: false, label: 'GMC' },
    { id: 24, checked: false, label: 'Honda' },
    { id: 25, checked: false, label: 'Isuzu' },
    { id: 26, checked: false, label: 'Iveco' },
    { id: 27, checked: false, label: 'JAC' },
    { id: 28, checked: false, label: 'Jeep' },
    { id: 29, checked: false, label: 'Jetour' },
    { id: 30, checked: false, label: 'Kia' },
    { id: 31, checked: false, label: 'Land Rover' },
    { id: 32, checked: false, label: 'Lexus' },
    { id: 33, checked: false, label: 'Lifan' },
    { id: 34, checked: false, label: 'Mazda' },
    { id: 35, checked: false, label: 'Mercedes-Benz' },
    { id: 36, checked: false, label: 'Mitsubishi' },
    { id: 37, checked: false, label: 'Opel' },
    { id: 38, checked: false, label: 'Peugeot' },
    { id: 39, checked: false, label: 'Renault' },
    { id: 40, checked: false, label: 'Seat' },
    { id: 41, checked: false, label: 'SsangYong' },
    { id: 42, checked: false, label: 'T King' },
    { id: 43, checked: false, label: 'Volvo' },
    { id: 44, checked: false, label: 'Zotye' },
    { id: 45, checked: false, label: 'Other Make' },
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
    <div className='home'>
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
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
  );
};

export default Home;
