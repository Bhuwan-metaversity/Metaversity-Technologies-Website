// import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby";
// import MetaLogo from "../images/MV LOGO.png";
import MetaLogo from "../images/metaversityLogo.png"
import { Collapse, Menu, MenuItem, useMediaQuery } from "@mui/material";
import RequestCallButton from "./requestCallButton";
import { Height, KeyboardArrowDown } from "@mui/icons-material";
// const Header = () => {
//   const [hoverOn, setHoverOn] = React.useState("")
//   const [open, setOpen] = React.useState(false)
//   const anchorEl = React.useRef()
//   const handleClick = (event) => {
//     setOpen(true)
//     console.log(event.target.id, event)
//     anchorEl.current = event.target
//     setHoverOn(event.target.id)
//   }
//   const handleClose = () => {
//     setOpen(false)
//     setHoverOn("")
//   }
//   console.log(links?.find((item) => item.to === hoverOn))
//   return (
//     <header
//       style={{
//         margin: `0 120px`,
//         padding: `var(--space-4) var(--size-gutter)`,
//         display: `flex`,
//         alignItems: `center`,

//         justifyContent: `space-between`,
//       }}
//     >

//       <Link
//         to="/"
//         style={{
//           fontSize: `var(--font-sm)`,
//           textDecoration: `none`,
//         }}
//       >
//         <img
//           alt="Gatsby logo"
//           height={50}
//           width={160}
//           style={{ margin: 0 }}
//           src={MetaLogo}
//           // src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"
//         />
//       </Link>
//       <Box flexDirection={"row"} zIndex={1000000}>
//         {links.map(({ to, name, expandable, sublinks }) => (
//           <Link
//             // ref={anchorEl}
//             id={to}
//             key={`links-${to + name}`}
//             onMouseOver={handleClick}
//             style={{ margin: 20, fontWeight: 400 }}
//             to={to}
//           >
//             {name}
//             {expandable && (
//               <KeyboardArrowDown sx={{ mb: 0, fontWeight: "bold" }} />
//             )}
//           </Link>
//         ))}
//       </Box>
//       <Menu
//         open={
//           open && Boolean(links.find((item) => item.to === hoverOn)?.expandable)
//         }
//         anchorPosition={{ left: 0, top: 0 }}
//         anchorEl={anchorEl.current}
//         onClose={handleClose}
//       >
//         {links
//           ?.find((item) => item.to === hoverOn)
//           ?.sublinks?.map((item) => (
//             <MenuItem>
//               <Link to={item.to}>{item.name}</Link>
//             </MenuItem>
//           ))}
//       </Menu>

//       <RequestCallButton />
//     </header>
//   )
// }

// export default Header

// import * as React from "react";
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
        // sublinks: allStrapiArticle?.nodes?.map(({ slug, ServiceName }) => ({
        //   to: "/service/" + slug,
        //   name: ServiceName,
        //   expandable: false,
        // })),
      },
      {
        to: "/Product",
        name: "Product",
        expandable: false,
        // sublinks: allStrapiIndustry?.nodes?.map(({ slug, name }) => ({
        //   to: "#",
        //   name,
        //   expandable: false,
        // })),
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
  // const {pathname} = useLocation()
  useEffect(() => {
    links.forEach((item, index) => {
      if (location?.pathname.includes(item.to)) {
        setCurrent(index);
      }
    });
  }, [location?.pathname]);
  console.log(location,"path")
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
                // src="data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"
              />
            </Link>
            <Box
              flexDirection={"row"}
              zIndex={1000000}
              sx={{ display: { xs: "none", lg: "block" }, mx: "auto" }}
            >
              {links.map(({ to, name, expandable, sublinks }, index) => (
                <Link
                  // ref={anchorEl}
                  key={`links-${to + name}`}
                  className="top-link-hover"
                  onMouseOver={handleClick}
                  // style={styles.button}
                  // onMouseEnter={() => setHover(true)}
                  // onMouseLeave={() => setHover(false)}

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
            keepMounted: true, // Better open performance on mobile.
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
