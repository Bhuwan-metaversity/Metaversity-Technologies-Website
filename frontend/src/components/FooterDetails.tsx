import { Box, Grid, List, ListSubheader, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";

const Tepo = ({ children }) => (
  <Typography fontSize={12} sx={{ opacity: 0.72, lineHeight: "28.8px" }}>
    {children}
  </Typography>
);
const FooterDetails = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: 'url("/studio-bg.png");',
        color: "white",
        p: { xs: 1, sm: 5, md: 10 },
      }}
      rowGap={3}
    >
      <Grid item xs={12} lg={3} md={6}>
        <img  alt="meta" src="/meta.png" />
        <Typography fontSize={12} sx={{ opacity: 0.72, mr: "30%", my: 4 }}>
          The Metaverse is a Virtual Universe where users have access to Digital
          Avatars that let them “LIVE” in this Digital World.
        </Typography>
        <Typography variant="h6">Follow Us!</Typography>
        <Box display={"flex"} gap={2} my={2}>
          <Link
            to="https://www.facebook.com/profile.php?id=100087924176394"
            target={"_blank"}
          >
            <img src="/fb.png" alt="fb" className="social" />
          </Link>
          <Link
            to="https://www.instagram.com/metaversitytechnologies/"
            target={"_blank"}
          >
            <img
              src="/insta.png" alt="insta"
              className="social"
              style={{ paddingRight: "1px" }}
            />
          </Link>
          <Link to="https://twitter.com/MetaversityTech" target={"_blank"}>
            <img src="/twitter.png"  alt="twitter" className="social" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/metaversity-technologies"
            target={"_blank"}
          >
            <img src="/linkedin.png" alt="linkdin" className="social" />
          </Link>
        </Box>
      </Grid>{" "}
      <Grid item xs={12} lg={3} md={6}>
        <Typography variant="h6" my={0.5}>
          Our Services
        </Typography>
        {[
          " Automotive and Urban Mobility",
          "Aerospace and Defence",
          "Energy and Utilities",
          "Healthcare and Life Sciences",
          "Blockchain",
          "News & Events",
          "Blogs",
        ].map((item) => (
          <Tepo key={`service-${item}`}>{item}</Tepo>
        ))}
      </Grid>{" "}
      <Grid item xs={12} lg={3} md={6}>
        <Typography variant="h6" my={0.5}>
          Metaversity Technologies
        </Typography>
        {[
          <Link to="/AboutUs" style={{color:"white"}}>About Us</Link>,
            <Link to="/Contact-us" style={{color:"white"}}>Contact Us</Link>,
            "Terms & Conditions",
          "Privacy Policy",
          "Sitemap",
        ].map((item) => (
          <Tepo key={`service-${item}`}>{item}</Tepo>
        ))}
      </Grid>{" "}
      <Grid item xs={12} lg={3} md={6}>
        <Typography variant="h6" my={0.5}>
          Get in Touch
        </Typography>
        {[
          "Suite 607, C-51, BSi Business Park",
          "Sector 62, Noida – 201309",
          "+91-8810228283  +91-7011314162",
          "info@metaversitytechnologies.com",
        ].map((item) => (
          <Tepo key={`service-${item}`}>{item}</Tepo>
        ))}
      </Grid>
    </Grid>
  );
};

export default FooterDetails;
