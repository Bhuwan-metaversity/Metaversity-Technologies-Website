import { Button } from "@mui/material";
import { Link } from "gatsby";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Jobdeatils from "../jobDeatils/Jobdeatils";



const JobCard = ({setOpen, bg,slug, ...rest}) => {
// const [open, setOpen] = useState(false);
console.log(rest)
  const handleClickOpen = () => {
    console.log("Clicked")
    
    setOpen(true);
  };
  // const nav = useNavigate() 
console.log("slug",slug, rest)
  return (
    <div className="jd" style={{ background:bg }}>
      <div className="container">
      <div className="wrapper">
      <div className="left-side">
          <h1>{rest.jobRole}</h1>
          <p>{rest.jobType}</p>
        </div>
        <div className="mid-side">
          <h1>Job Description</h1>
          <p id="p1">No Of Vacancy -{rest.vacancy} </p>
          <p id="p2">Location@- {rest.Location}</p>
        </div>
        <div className="right-side">
          
          <Link style={{
          // width:'100%',
          color:'#3A7EF8',
          }}  to={`/job/${slug}`} >
            {/* <button id="btn1"></button> */}
          Job Deatils
          </Link>
{/* lg=25% */}
         <Button sx={{
          width:{xs:"80% !important;"}
         }}  onClick={handleClickOpen} style={{width:'100%',marginTop:"30px", backgroundColor:'#3A7EF8',color:"white"}} className="muibutton">
        Apply Now      
      </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default JobCard;
