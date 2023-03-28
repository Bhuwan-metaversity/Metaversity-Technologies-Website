/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */   

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { createTheme, ThemeProvider } from "@mui/material"
import Footer from "./Footer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A7EF8",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: "none",
          "&:hover": {
            ...((ownerState.color === "primary" || "default") &&
              ownerState.variant === "contained" && {
                backgroundColor: "#508EFF",
                transition: "0.2s",
              }),
          },
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Space Grotesk",
        },
      },
    },
  },
});

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
