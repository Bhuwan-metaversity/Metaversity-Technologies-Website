import { Box, Grid, Typography } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Flip from 'react-reveal/Flip';



function Industies() {
  const { allStrapiIndustry } = useStaticQuery(graphql`
    query {
      allStrapiIndustry {
        edges {
          node {
            id
            name
            coverSquare {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <div id="industries">
      <Typography variant="h3" textAlign="center" m={6} mt={9}>
        Industries
      </Typography>
      {/* <Box display=" grid" gridTemplateColumns="repeat(3, 1fr)" gap="32px">*/}
      <Grid container gap={4} mb={7}>
        {allStrapiIndustry.edges.map(({ node: { id, name, coverSquare } }) => (
          <Grid
            item
            lg={3.75}
            md={5.75}
            xs={12}
            key={id}
            sx={{
              // height: "27vw",
              width: "auto",
              aspectRatio: "1/1",
              backgroundClip: "border-box",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "16px",
            }}
          >
                   <Flip right>
       
            <GatsbyImage
              alt={"adsfjka"}
              // layout="fill"
              style={{
                width: "100%",
                height: "100%",
              }}
              // objectFit={"fill"}
              image={coverSquare.localFile.childImageSharp.gatsbyImageData}
            />
            </Flip>
    

            <Typography
              position={"absolute"}
              m={3}
              fontSize={"20px"}
              color="white"
            >
              {name}
            </Typography>
            
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Industies
