import { ArrowForward } from "@mui/icons-material"
import { Button, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function TopServices() {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            title
            slug
            description
            cover {
              id
              url
              alternativeText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(
                    webpOptions: { quality: 100 }
                    formats: WEBP
                    layout: CONSTRAINED
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
    }
  `)
  const media = useMediaQuery("(min-width:600px)")
  return (
    <Box id="top">
      <Typography
        variant="h3"
        // sx={{ fontSize: "40px", fontWeight: 500 }}
        m={2}
        textAlign={"center"}
      >
        Our Top Services
      </Typography>
      {allStrapiArticle.edges?.map(({ node: item }, index) => (
        <Box
          // display={"flex"}
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
          flex={1}
          sx={{
            display: { xs: "block", md: "flex" },
          }}
        >
          <Box my={6}>
            <GatsbyImage
              image={item.cover.localFile.childImageSharp.gatsbyImageData}
              alt={item.title}
              // src={process.env.STRAPI_API_URL + item.cover.url}
              style={{
                flex: 1,
                // aspectRatio: "15/10",
                width: media ? "42.5vw" : "85vw",
                borderRadius: "24px",
              }}
            />
          </Box>
          <Box margin={"auto"} flex={1} px={"5%"} textAlign="center">
            <Typography variant="h3" fontSize={"28px"}>
              {item.title}
            </Typography>
            <Typography m={3}>{item.description}</Typography>
            <Link to={"service/" + item?.slug}>
              <Button variant="contained" endIcon={<ArrowForward />}>
                Read More
              </Button>
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default TopServices