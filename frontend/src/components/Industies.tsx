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
      <Grid container gap={3} mb={4}>
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
              backgroundClip: "border-box",
              backgroundSize: "cover",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "16px",
              justifyContent:"center"
            }}
          >
                   <Flip  right>
       
            <GatsbyImage
              alt={"industry"}
              // layout="fill"
              style={{
                width: "100%",
                height: "100%",
                margin:"auto"
                // marginLeft:"30px"
                // display:"flex",
                // justifyContent:"center",
                // alignItems:"center"

             
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
