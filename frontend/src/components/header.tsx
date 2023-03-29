import { graphql, Link, useStaticQuery } from "gatsby";

import MetaLogo from "../images/metaversityLogo.png";
import { Collapse, Menu, MenuItem, useMediaQuery } from "@mui/material";
import RequestCallButton from "./requestCallButton";
import { Height, KeyboardArrowDown } from "@mui/icons-material";

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { useLocation } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  location?: Location;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
export default function DrawerAppBar(props: Props) {
  const [current, setCurrent] = useState(0);
  const theme = useTheme();
  console.log(theme, "theme");
  const { window, location } = props;
  console.log(location, "locarion");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { allStrapiArticle, allStrapiIndustry } = useStaticQuery(graphql`
    query {
      allStrapiIndustry {
        nodes {
          name
          id
        }
      }
      allStrapiArticle {
        nodes {
          ServiceName
          slug
          id
        }
      }
    }
  `);
  const [hoverOn, setHoverOn] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const anchorEl = React.useRef();
  const handleClick = (event) => {
    setOpen(true);
    anchorEl.current = event.target;
    setHoverOn(event.target.id);
  };
  const handleClose = () => {
    setOpen(false);
    setHoverOn("");
  };

  const links = React.useMemo(
    () => [
      {
        to: "/",
        name: "Home",
        expandable: false,
      },
      {
        to: "/AboutUs",
        name: "About Us",
        expandable: false,
      },
      {
        to: "/Services",
        name: "Services",
        expandable: false,
      },
      {
        to: "/Product",
        name: "Product",
        expandable: false,
      },
      {
        to: "/Careers",
        name: "Careers",
        expandable: false,
      },
      {
        to: "/Contact-us",
        name: "Contact Us",
        expandable: false,
      },
    ],
    []
  );

  const matches = useMediaQuery("(min-width: 1200px)");
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {links.map(({ to, name, expandable, sublinks }) => (
          <>
            <ListItem key={to + name} disablePadding>
              <ListItemButton
                href={to}
                sx={{ textAlign: "center", ":hover": { color: "red" } }}
              >
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
            {sublinks?.map((item, index) => (
              <ListItem key={item.to + "-" + index} disablePadding>
                <ListItemButton href={to} sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    links.forEach((item, index) => {
      if (location?.pathname.includes(item.to)) {
        setCurrent(index);
      }
    });
  }, [location?.pathname]);
  console.log(location, "path");
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" elevation={0}>
        <Toolbar sx={{ background: "#fff" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon color="action" />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: { xs: "space-between" },
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: `var(--font-sm)`,
                textDecoration: `none`,
              }}
            >
              <img
                alt="Gatsby logo"
                height={!matches ? 40 : 60}
                width={!matches ? 100 : 170}
                style={{ margin: 5 }}
                src={MetaLogo}
              />
            </Link>
            <Box
              flexDirection={"row"}
              zIndex={1000000}
              sx={{ display: { xs: "none", lg: "block" }, mx: "auto" }}
            >
              {links.map(({ to, name, expandable, sublinks }, index) => (
                <Link
                  key={`links-${to + name}`}
                  className="top-link-hover"
                  onMouseOver={handleClick}
                  style={{
                    color: current === index ? "#FBB03B" : "",

                    margin: 20,
                    display: "inline-block",
                    fontWeight: 400,
                  }}
                  to={to}
                >
                  {name}
                  {expandable && (
                    <KeyboardArrowDown
                      id={to}
                      onClick={handleClick}
                      sx={{ mb: 0, fontWeight: "bold" }}
                    />
                  )}
                </Link>
              ))}
            </Box>
            <RequestCallButton />
          </Box>
          {/* <Box sx={{ display: { xs: "none", sm: "block" }, mx:"auto" }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
            </Box>*/}
          <Menu
            open={
              open &&
              Boolean(links.find((item) => item.to === hoverOn)?.expandable)
            }
            anchorPosition={{ left: 0, top: 0 }}
            anchorEl={anchorEl.current}
            onClose={handleClose}
            sx={{ zIndex: 1100 }}
          >
            {links
              ?.find((item) => item.to === hoverOn)
              ?.sublinks?.map((item) => (
                <MenuItem>
                  <Link to={item.to}>{item.name}</Link>
                </MenuItem>
              ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
