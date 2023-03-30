import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TopServices from "../components/TopServices"
import Vertical2by2Slider from "../components/vertical2by2AutoSlider"
import Industries from "../components/Industies"
import { Box, Typography, useTheme } from "@mui/material"
import { GatsbyImage } from "gatsby-plugin-image"
import RequestCallButton from "../components/requestCallButton"
import { motion } from "framer-motion"
import { PlayArrow } from "@mui/icons-material"
import FooterDetails from "../components/FooterDetails"
import Seo from "../components/seo";



const IndexPage = ({ data, location }) => {
  const { allStrapiHeroBanner, strapiBackground } = data
  const [hovered, setHovered] = useState(false)
  
  const theme = useTheme()
  return (
    <Layout location={location}>
      <Seo seo={{ metaTitle: "Home" }} />
      <main>
        <Vertical2by2Slider
          timeOut={5000}
          itemsPerPage={1}
          items={
            allStrapiHeroBanner?.nodes.map((banner) => (
              <Box
                display={"flex"}
                maxWidth={{ md: "80vw", xs: "90vw" }}
                margin="auto"
              >
                <Box width={"50%"} p={"1.5vw"}>
                  <Typography
                    pl={"0.8vw"}
                    fontSize="1.2vw"
                    borderLeft="0.3vw solid #3A7EF8"
                    m={"0.5vw"}
                  >
                    METAVERSITY TECHNOLOGIES
                  </Typography>
                  <Typography
                    variant="h1"
                    fontSize={"4.5vw"}
                    whiteSpace="pre-line"
                  >
                    {" "}
                    {banner.hero_title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={{ md: "1rem", xs: "0.5rem" }}
                    my={{ xs: 1, md: 4 }}
                  >
                    {banner.hero_description}
                  </Typography>
                  <RequestCallButton />
                </Box>
                <GatsbyImage
                  // fadeIn
                  // objectFit={"contain"}
                  imgStyle={{ objectFit: "contain" }}
                  style={{ width: "50vw", marginTop: "auto" }}
                  alt="hero"
                  // fluid={banner.hero_cover.localFile.childImageSharp.fluid}
                  image={
                    banner.hero_cover.localFile.childImageSharp?.gatsbyImageData
                  }
                />
              </Box>
            )) || []
          }
        />

{/* m=7.5 */}
        <Box m={"3.5vw"}  mt={6} display="grid" className="playforfun">
          <Box mb={15} gridArea="1/1">
            <GatsbyImage
              alt="bg"
              layout="fullWidth"
              image={
                strapiBackground.Videobg.localFile.childImageSharp
                  .gatsbyImageData
              }
            />
          </Box>
          <Box
            position="relative"
            sx={{
              // backgroundImage: "url('/static/video.png');",
              // backgroundSize: "cover",
              display: "flex",
              gridArea: "1/1",
              // height: "100%",
              aspectRatio: "1.77",
              p: "6vw",
            }}
          >
            <Box width={"50%"}>
              <Typography
                pt={"8vw"}
                sx={{
                  // position: "absolute",
                  // height: "50vh",
                  left: "13.23%",
                  right: "51.65%",
                  top: "calc(50% - 180px/2 - 1653px)",
                  fontFamily: "Space Grotesk",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "3.5vw",
                  lineHeight: "108%",
                  color: "#FFFFFF",
                  // width: "65%",
                  zIndex: 1,
                }}
              >
                Play for Fun, Sport or as a Competitive Activity
              </Typography>
              <Typography
                sx={{
                  pt: "2vw",
                  color: "#FFFFFF",
                  width: "80%",
                  fontSize: "1vw",
                }}
              >
                A game is a structured form of play, usually undertaken for
                entertainment or fun, and sometimes used as an educational tool.
              </Typography>
            </Box>
            <Box
              borderRadius={"50%"}
              bgcolor="white"
              width={"6vw"}
              height="6vw"
              margin={"auto"}
              // marginLeft={0}
              component={motion.div}
              pb={{ xs: 3, sm: 0 }}
              whileHover={{
                backgroundColor: theme.palette.primary.light,
                boxShadow: "0px 16px 64px #332256",
              }}
              onHoverStart={() => {
                setHovered(true)
              }}
              onHoverEnd={() => {
                setHovered(false)
              }}
            >
              {hovered ? (
                <PlayArrow
                  htmlColor="white"
                  sx={{ fontSize: "4vw", m: "1vw" }}
                />
              ) : (
                <img
                  src="/Polygon 1.svg"
                  alt="ad"
                  style={{ margin: "1.7vw 2.2vw", width: "2.2vw" }}
                />
              )}
            </Box>
          </Box>
          <TopServices />
          <Industries />
        </Box>
        <Box display={"grid"}>
          <GatsbyImage
            alt ="bgi"
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            // aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            image={
              strapiBackground.submitQueryBg.localFile.childImageSharp
                .gatsbyImageData
            }
            // formats={["auto", "webp", "avif"]}
          />
          <Box
            sx={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              p: 1,
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              // variant="h2"
              sx={{
                fontFamily: "Space Grotesk",
                fontSize: "40px",
                fonWeight: 600,
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Submit Online Enquiry
            </Typography>
            <Typography color="white" >
              We are available for a friendly chat to discuss future opportunity.
            </Typography>
            <RequestCallButton isWhite />
          </Box>
        </Box>
        <FooterDetails />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    allStrapiHeroBanner {
      nodes {
        id
        createdAt
        hero_cover {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, formats: PNG)
            }
          }
        }
        hero_description
        hero_title
        strapi_id
        updatedAt
        publishedAt
      }
    }
    strapiBackground {
      createdAt
      submitQueryBg {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              pngOptions: { quality: 100 }
              formats: NO_CHANGE
              outputPixelDensities: 10
            )
          }
        }
      }
      Videobg {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              pngOptions: { quality: 100 }
              formats: NO_CHANGE
              outputPixelDensities: 10
            )
          }
        }
      }
    }
  }
`
export default IndexPage
