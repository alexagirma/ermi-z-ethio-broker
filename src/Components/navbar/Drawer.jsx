import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
const pages = [
  {
    itemTitle:'About us',
    to:'aboutus',
  },
  {
    itemTitle:'ContactUs',
    to:'contact',
  },
  {
    itemTitle:'SignUp',
    to:'register',
  },
  {
    itemTitle:'Login',
    to:'login',
  },
  // "AboutUs", "ContactUs", "SignUp", "Login"
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton sx={{ marginLeft: "10px" }} variant="contained" key={index}>
              <ListItemIcon>
                <ListItemText >
                  <Link to={page.to}>{page.itemTitle}</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
