import React, { useState } from "react";
import "../styles/careers.css";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Jobdeatils from "../components/jobDeatils/Jobdeatils";


const JD = ({ data }) => {
  console.log(data,"template")
  return (
    <Layout>

     <Jobdeatils data={data.strapiJob} ></Jobdeatils>

     </Layout>
  );
};


export const query = graphql`
  query ($slug: String) {
    strapiJob(id: {eq: $slug}) {
      Location
        slug
      createdAt
      jobRole 
      JD {
        data {
          JD
          id
        }
      }
      Description {
        data {
          Description
          id
        }
      }
      skills {
        data {
          skills
          id
        }
      }
      jobType
      salary
      strapi_id
      vacancy
      workType
      experience
      id
    }
  }
`;



export default JD;