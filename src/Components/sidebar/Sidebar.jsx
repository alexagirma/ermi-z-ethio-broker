import React from 'react';
import styled from 'styled-components';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import HouseIcon from '@mui/icons-material/House';
import InventoryIcon from '@mui/icons-material/Inventory';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom';






const Container = styled.div`
    margin-top: 12px;
    margin-left: 4em;
    flex: 30%;
   //height: calc(100vh - 50px);
    backgroundColor={colors.primary[400]}
    height: 100vh
    background-color: pink;



`;

/*const Wrapper = styled.div`
padding: 10px;
background-color: white;
padding-right: 50px;
height: 100vh
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;



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
*/



function Sidebar(){

    
    return(
          
<Container>
            <div style={{height: "200vh", marginTop: "12px", marginLeft: "4em", flex: "30%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "#f6f6f8"}}>
            <ProSidebar sx={{backgroundColor: "rgb(0,249,249.0.7)", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
                <SidebarHeader>
                    <h2>Category</h2>
                </SidebarHeader>
                <SidebarContent>

               
            <Menu sx={{display: "flex", alignItems: "center", marginBottom: "20px", backgroundColor: "#f6f6f8"}}>
                
                <SubMenu title="Vehicles For Sale" icon={<DirectionsCarFilledIcon />} >
                              
                             
                    <Link to='/filter'> <MenuItem>Cars</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Buses & Microbuses</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Heavy Equipment</MenuItem></Link>
                    <Link to='/filter'>  <MenuItem>Motorcycles & Scooters</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Trucks & Trailers</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Vehicle Parts & Accessories</MenuItem></Link>

                </SubMenu>
                <SubMenu title="Vehicles For Rent" icon={<DirectionsCarFilledIcon />} >

                    <MenuItem>Cars
                    </MenuItem>
                    <Link to='/filter'> <MenuItem>Buses & Microbuses</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Heavy Equipment</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Motorcycles & Scooters</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Trucks & Trailers</MenuItem></Link>
                    <Link to='/filter'> <MenuItem>Vehicle Parts & Accessories</MenuItem></Link>

                </SubMenu>
             <SubMenu title="Property For Sale" icon={<HouseIcon />} >

             <Link to='/filter'><MenuItem>House & Apartments for Rent</MenuItem></Link>
             <Link to='/filter'> <MenuItem>House & Apartments for Sale</MenuItem></Link>
             <Link to='/filter'> <MenuItem>Land & Plots for Rent</MenuItem></Link>
             <Link to='/filter'> <MenuItem>Land & Plots for Sale</MenuItem></Link>
             <Link to='/filter'> <MenuItem>Events Centers, Venues & Workstations</MenuItem></Link>
             <Link to='/filter'> <MenuItem>Vehicle Parts & Accessories</MenuItem></Link>

                </SubMenu>
                <SubMenu title="Property For Rent" icon={<HouseIcon />} >

                    <MenuItem>House & Apartments for Rent</MenuItem>
                    <MenuItem>House & Apartments for Sale</MenuItem>
                    <MenuItem>Land & Plots for Rent</MenuItem>
                    <MenuItem>Land & Plots for Sale</MenuItem>
                    <MenuItem>Events Centers, Venues & Workstations</MenuItem>
                    <MenuItem>Vehicle Parts & Accessories</MenuItem>

                </SubMenu>
                <SubMenu title="Stock" icon={<InventoryIcon />} >

                    <MenuItem>abisinya</MenuItem>
                    <MenuItem>Buses & Microbuses</MenuItem>
                    <MenuItem>Heavy Equipment</MenuItem>
                    <MenuItem>Motorcycles & Scooters</MenuItem>
                    <MenuItem>Trucks & Trailers</MenuItem>
                    <MenuItem>Vehicle Parts & Accessories</MenuItem>

    </SubMenu>
    </Menu>
    </SidebarContent> 
    </ProSidebar>
    </div>
    </Container>
              
              )
            }
            
            export default Sidebar;
    {/*
<lu><li>               <Icon>
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
    </li></lu>*/}
            
 
