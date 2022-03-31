import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

import {
  InputBase,
  Button,
  Container,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Badge,
} from "@material-ui/core";
// import { theme } from "../src/theme";
import {
  AccountCircle,
  AccountCircleOutlined,
  HelpOutlineOutlined,
  KeyboardArrowDownOutlined,
  Mail,
  MoreVert,
  Notifications,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  bannerextension: {
    color: "#FF9900",
  },
  image: {
    objectFit: "contain",
  },
  searchbtn: {
    marginLeft: "20px",
    backgroundColor: "#FF9900",
    boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
    "&:hover": {
      backgroundColor: "#E4811C",
    },
  },
  header_options: {
    display: "flex",
    alignItems: "center",
    marginRight: "7px",
    [theme.breakpoints.down("md")]: {
      marginRight: "4px",
    },
    "&:hover": {
      color: "#FF9900",
    },
  },
  header_options_right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  searchinput: {
    width: "520px",
    [theme.breakpoints.down("md")]: {
      width: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "220px",
    },
  },
  headerCenter: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    display: "flex",

    flexGrow: "1",
    alignItems: "center",
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    //},
  },
  searchSection: {
    display: "flex",
    alignItems: "center",
    padding: "1px 2px",
    borderRadius: "5px",
    border: "1px solid #75757A",
  },
  header_text: {
    textTransform: "capitalize",
    marginLeft: "5px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "3px",
    },
  },
}));
const renderMobileMenu = (
  <Menu
    // anchorEl={mobileMoreAnchorEl}
    // anchorOrigin={{
    //   vertical: "top",
    //   horizontal: "right",
    // }}
    // // id={mobileMenuId}
    keepMounted
    // transformOrigin={{
    //   vertical: "top",
    //   horizontal: "right",
    // }}
    // // open={isMobileMenuOpen}
    // // onClose={handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <Mail />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <Notifications />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    {/* <MenuItem onClick={handleProfileMenuOpen}> */}
    <MenuItem>
      <IconButton
        size="large"
        // aria-label="account of current user"
        // aria-controls="primary-search-account-menu"
        // aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
);

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      // id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  );
  const classes = useStyles();
  return (
    <nav>
      {/* <Container maxWidth="xl"> */}
      <Box sx={{ bgcolor: "#FF9900", mt: "0px" }}>
        <Image
          src="/images/banner.jpg"
          height="56"
          width="1100"
          className={classes.image}
          alt=""
        />
      </Box>

      <Box sx={{ flexGrow: "1" }}>
        <AppBar position="fixed" color="primary.dark">
          <Container maxWidth="lg">
            <Toolbar>
              <Image
                src="/images/logo.png"
                width="139px"
                height="36px"
                alt=""
              />
              <Box sx={{ flexGrow: "1" }}></Box>

              <div className={classes.search}>
                <div className={classes.searchSection}>
                  <Search />
                  <InputBase
                    placeholder="Search products, brands and categories"
                    className={classes.searchinput}
                  />
                </div>

                <Button variant="contained" className={classes.searchbtn}>
                  Search
                </Button>
              </div>

              <Box sx={{ display: { xs: "none", md: "none" } }}>
                <div className={classes.header_options_right}>
                  <div className={classes.header_options}>
                    <AccountCircleOutlined />
                    <Typography className={classes.header_text} variant="h6">
                      login
                    </Typography>
                    <KeyboardArrowDownOutlined />
                  </div>

                  <div className={classes.header_options}>
                    <HelpOutlineOutlined />
                    <Typography className={classes.header_text} variant="h6">
                      Help
                    </Typography>
                    <KeyboardArrowDownOutlined />
                  </div>

                  <div className={classes.header_options}>
                    <ShoppingCartOutlined />
                    <Typography className={classes.header_text} variant="h6">
                      cart
                    </Typography>
                  </div>
                </div>
              </Box>
              <Box>
                {" "}
                <MoreVert onClick={openMenu} />{" "}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {renderMenu}
      {/* {renderMobileMenu} */}
    </nav>
  );
}
