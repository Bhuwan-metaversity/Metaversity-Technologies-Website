import { ApplyJobDailog } from "./ApplyJobDailog";
import React, { useState } from "react";
import { render } from "react-dom";
import "../../components/jobDeatils/jobDeatils.css";
import salary from "../../../static/salary.png";
import experience from "../../../static/Group.png";
import location from "../../../static/Location.png";
import Modalpopup from "../modal/Modalpopup";
import FooterDetails from "../FooterDetails";
import ReactMarkdown from "react-markdown";
import StyledMarkdown from "./MarkDown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import LeftSide from "./LeftSide";
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';



import { Button } from "@mui/material";
import { Link } from "gatsby";
// import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { Email } from "@mui/icons-material";

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
                 
                      '&:hover': {
                        bgcolor: '#FBB03B !important',
                        boxShadow: 'none',
                      }
                     
                    }}
                    style={{
                      // width: "20%",
                      //  margin:"0px 0px 0px 880px",
                      backgroundColor: "#3A7EF8",
                      fontSize: "20px",
                      color: "white",
                      // lineHeight:"25px",
                      // marginLeft:'780px',
                    }}
                    // sx={{
                    //   width:{xs:"30% !important; ",lg:'25%!important'}
                    // }}
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
                  <img src={salary} id="img1"></img>
                </div>

                <div className="left-sides-innerdiv">
                  <h2>{data.salary}</h2>
                  <p>Yearly salary </p>
                </div>
              </div>

              {/* <LeftSide></LeftSide> */}

              <div className="mid-sides">
                <div className="mid-sides-left-innerdiv">
                  <img src={experience} id="img2"></img>
                </div>

                <div className="mid-side-innerdiv">
                  <h2>{data.experience} Year</h2>
                  <p>Experience </p>
                </div>
              </div>

              {/* <LeftSide h2={data.experience} p="Experience" ></LeftSide> */}

              <div className="right-sides">
                {/* <div className='right-sides-left-innerdiv'>
            
                </div> */}
                <div className="left-side-innerdiv">
                  <img src={location} id="img3"></img>
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
              {/* {console.log(data.JD.data?.JD,"jd")} */}
              <ReactMarkdown>{data.JD.data?.JD}</ReactMarkdown>
              {/* {data.JD.data?.JD} */}

              {/* <ul>
                  {data.JD}.map((item) => 
                  return{
                    <li>
                  {data.JD.data.JD}
                  </li>
                  }
                  )
                </ul> */}

              {/* A job description summarizes the essential responsibilities,
              activities, qualifications and skills for a role. Also known as a */}
              {/* </StyledMarkdown> */}
            </div>
            </Fade>

            <Fade right>
            <div className="responsibility">
              <h3>Responsibillities - </h3>

              <ReactMarkdown children={data.Description.data?.Description} />

              {/* <ul>
             <div dangerouslySetInnerHTML={

               { __html:data.Description.data?.Description
             }} >
              </div> {
              }
              <li>
               . Build pixel-perfect, buttery smooth UIs across both mobile
                platforms.
              </li>
              <li>. Transition existing React web apps to React Native.</li>
              <li>. Add any other relevant responsibilities here</li> 
              </ul> */}
            </div>
            </Fade>

            <Fade left>
            <div className="skills">
              <h1>skills -</h1>
              {/* {data.skills.data?.skills} */}
              <ReactMarkdown children={data.skills.data?.skills} />
              {/* <ul>
                <li>
               . Firm grasp of the JavaScript and Typescript or ClojureScript
                language and its nuances, including ES6+ syntax.
              </li>
              <li>
               . Experience with automated testing suites, like Jest or Mocha
              </li>
              </ul> */}
            </div>
                 </Fade>
          </div>
        </div>
      </div>

      {/* modal  */}

      {/* <Dialog
       
        open={open}
     
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
  
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="popUpcontainer">
              <div className="popUpwrapper">
                <h1>APPLY FOR JOB :</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const data = new FormData();

                    data.append("Name", "ADF");
                    fetch(process.env.STRAPI_API_URL + "api/applied-for-jobs", {
                      method: "POST",
                      body: JSON.stringify({
                        data: {
                          Name: name,
                          Email: email,
                          Phone: number,
                          Message: message,
                          File: file,
                        },
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        console.log(res);
                        if (res?.data) {
                          setOpen(false);
                          setName("");
                          setEmail("");
                          setMessage("");
                          setNumber("");
                          setFile("");
                        }
                      })
                      .then(() => window.alert("Sucessfully Submitted !"))
                      .catch((err) => alert(err?.toString()));
                    console.log(data);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    type="number"
                    placeholder="Phone"
                    max={100000000000}
                    name="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Message"
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <br />
                  <label htmlFor="resume">Upload Resume</label>
                  <input
                    type="file"
                    className="upload-resume"
                    placeholder="Upload Resume"
                    name="File"
                    id="resume"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                  />
                  <br />
                  <p>
                    If You are Unable To Submit Your Deatils. then plese share
                    your <br /> recently updated resume at{" "}
                    <a href="" style={{ color: "#3A7EF8" }}>
                      hr@metaversitytechnologies.com
                    </a>
                  </p>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        
        </DialogActions>
      </Dialog> */}

      <ApplyJobDailog open={open} handleClose={handleClose} />

      <FooterDetails></FooterDetails>
    </>
  );
}

export default Jobdeatils;
