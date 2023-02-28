import React, { useContext, useState } from "react";
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
  Badge,
  Popper,
  Grow,
  ClickAwayListener,
  MenuList,
  Paper,
  Divider,
} from "@material-ui/core";

import {
  AccountCircleOutlined,
  HelpOutlineOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  Person,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/styles";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Store } from "../context/store";
import Link from "next/link";

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
  nav__account_btn: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    borderRadius: "4px",
    padding: "4px",
  },
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  console.log(cart.cartItems.length);

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
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width="139px"
                  height="36px"
                  alt=""
                />
              </Link>
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

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <div className={classes.header_options_right}>
                  <div className={classes.header_options}>
                    <div
                      ref={anchorRef}
                      id="composition-button"
                      onClick={handleToggle}
                      className={classes.nav__account_btn}
                    >
                      <Person />

                      <Typography className={classes.header_text} variant="h6">
                        Account
                      </Typography>
                      {open ? (
                        <KeyboardArrowUpOutlined />
                      ) : (
                        <KeyboardArrowDownOutlined />
                      )}
                    </div>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom"
                      transition
                      disablePortal
                      style={{ zIndex: 1, width: "200px" }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleClose}>
                                  <Button
                                    variant="contained"
                                    color="secondary"
                                    // onClick={checkoutHandler}
                                    fullWidth
                                  >
                                    SIGN IN
                                  </Button>
                                </MenuItem>
                                <Divider />
                                <MenuItem
                                  onClick={handleClose}
                                  style={{ marginTop: "10px" }}
                                >
                                  <Person />
                                  My account
                                </MenuItem>

                                <MenuItem onClick={handleClose}  style={{ marginTop: "10px" }}>
                                  <InventoryIcon />
                                  Orders
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>

                  <div className={classes.header_options}>
                    <HelpOutlineOutlined />
                    <Typography className={classes.header_text} variant="h6">
                      Help
                    </Typography>
                    <KeyboardArrowDownOutlined />
                  </div>
                  <Link href="/cart">
                    <div className={classes.header_options}>
                      <Badge
                        badgeContent={cart.cartItems.length || "0"}
                        color="secondary"
                      >
                        <ShoppingCartOutlined />
                      </Badge>

                      <Typography className={classes.header_text} variant="h6">
                        cart
                      </Typography>
                    </div>
                  </Link>
                </div>
              </Box>
              <Box>{/* <MoreVert onClick={openMenu} /> */}</Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {/* {renderMenu} */}
      {/* {renderMobileMenu} */}
    </nav>
  );
}
