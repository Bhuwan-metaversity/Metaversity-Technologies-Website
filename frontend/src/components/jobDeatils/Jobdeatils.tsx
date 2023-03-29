import { ApplyJobDailog } from "./ApplyJobDailog";
import React, { useState } from "react";
import "../../components/jobDeatils/jobDeatils.css";
import salary from "../../../static/salary.png";
import experience from "../../../static/Group.png";
import location from "../../../static/Location.png";
import FooterDetails from "../FooterDetails";
import ReactMarkdown from "react-markdown";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";

import { Button } from "@mui/material";

function Jobdeatils({ data }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="jdCaintanier">
        <div className="jdWrapper">
          <div className="jd-inner-wrapper">
            <div className="top-section">
              <h1>JOB DETAIL</h1>

              <div className="top-section-detail">
                <div>
                  <h2>{data.jobRole} </h2>
                  {/* -------  Split will Break Arr in Parts, then we will print split index */}
                  <p>{data?.createdAt.split("T")[0]}</p>
                </div>

                <div>
                  <Button
                    onClick={handleClickOpen}
                    sx={{
                      "&:hover": {
                        bgcolor: "#FBB03B !important",
                        boxShadow: "none",
                      },
                    }}
                    style={{
                      backgroundColor: "#3A7EF8",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
              <hr />
            </div>
            <HeadShake>
              <div
                className="grid-container"
                style={{
                  height: "auto",
                }}
              >
                <div className="left-sides">
                  <div className="left-sides-left-innerdiv">
                    <img alt="salery" src={salary} id="img1"></img>
                  </div>

                  <div className="left-sides-innerdiv">
                    <h2>{data.salary}</h2>
                    <p>Yearly salary </p>
                  </div>
                </div>

                <div className="mid-sides">
                  <div className="mid-sides-left-innerdiv">
                    <img alt="experience" src={experience} id="img2"></img>
                  </div>

                  <div className="mid-side-innerdiv">
                    <h2>{data.experience} Year</h2>
                    <p>Experience </p>
                  </div>
                </div>

                <div className="right-sides">
                  <div className="left-side-innerdiv">
                    <img alt="location" src={location} id="img3"></img>
                  </div>
                  <div className="rigth-sides-innerdiv">
                    <h2>{data.Location}</h2>
                    <p>Location </p>
                  </div>
                </div>
              </div>
            </HeadShake>

            <Fade left>
              <div className="jd2">
                <h2>Job Description - </h2>

                <ReactMarkdown>{data.JD.data?.JD}</ReactMarkdown>
              </div>
            </Fade>

            <Fade right>
              <div className="responsibility">
                <h3>Responsibillities - </h3>

                <ReactMarkdown children={data.Description.data?.Description} />
              </div>
            </Fade>

            <Fade left>
              <div className="skills">
                <h1>skills -</h1>

                <ReactMarkdown children={data.skills.data?.skills} />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <ApplyJobDailog open={open} handleClose={handleClose} />

      <FooterDetails></FooterDetails>
    </>
  );
}

export default Jobdeatils;
