import React from 'react';
import styled from 'styled-components';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import HouseIcon from '@mui/icons-material/House';
import InventoryIcon from '@mui/icons-material/Inventory';

const Container = styled.div`
    margin-top: 12px;
    margin-left: 8em;
    flex: 30%;
    height: calc(100vh - 50px);
`;

const Wrapper = styled.div`
padding: 10px;
background-color: #ddd7d7;
padding-right: 50px;

ul {
padding:0;
margin: 0;
list-style: none;
}

li {
    display: flex;
    align-item: center;
    margin-bottom: 20px;
}
`;
const Icon = styled.div`
margin-right: 15px;
`;




function Sidebar(){

    return(
        <Container>
            
            <Wrapper>
            Category
            <ul>
            <li>
                <Icon>
                 <DirectionsCarFilledIcon/>
                </Icon>
            <span>Vehicles</span>
            </li>
            <li>
                <Icon>
                 <HouseIcon/>
                </Icon>
            <span>Property</span>
            </li>
            <li>
                <Icon>
                  <InventoryIcon/>
                </Icon>
            <span>Stock</span>
            </li>
            </ul>

            </Wrapper>
        </Container>
    )
}

export default Sidebar;
