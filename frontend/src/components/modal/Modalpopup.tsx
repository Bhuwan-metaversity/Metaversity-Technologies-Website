import React, { useState } from "react";
import "../modal/Modalpopup.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../modal/Modalpopup.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Modalpopup({ open, setOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [file, setFile] = useState<FileList | null>();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* <h1>APPLY FOR JOB :</h1> */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="popUpcontainer">
              <div className="popUpwrapper">
                <h1
                  style={{
                    height: "auto",
                    margin: "0px auto",
                    fontSize: "clamp(1.2rem, 16px, 14px )",
                    padding: "20px 0",
                    textAlign: "center",
                  }}
                >
                  APPLY FOR JOB :
                </h1>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const data = new FormData();
                    data.append(
                      "data",
                      JSON.stringify({
                        Name: name,
                        Email: email,
                        Phone: number,
                        Message: message,
                      })
                    );
                    if (file) {
                      data.append("files.image", file[0], file[0].name);
                    }

                    if (!name || !email || !number || !message || !file) {
                      alert("All Fields Are Mendatory");
                      return;
                    }

                    data.append("Name", "ADF");
                    fetch(process.env.STRAPI_API_URL + "api/applied-for-jobs", {
                      method: "POST",
                      body: data,
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        // console.log(res);
                        if (res?.data) {
                          alert("Registred Sucessfully");

                          setOpen(false);
                          setName("");
                          setEmail("");
                          setMessage("");
                          setNumber("");
                          setFile(null);
                        } else {
                          res.error.details.errors.forEach((element) => {
                            alert(
                              element.path?.join(",") + ": " + element.message
                            );
                          });
                        }
                      })
                      .catch((err) => alert(err?.toString()));
                    // console.log(data);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Your Email Address"
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="number"
                    placeholder="Phone"
                    max={100000000000}
                    name="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Message"
                    name="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <div className="fileinputholder">
                    <label htmlFor="resume">
                      <CloudUploadIcon />
                    </label>
                    <input
                      type="file"
                      className="upload-resume"
                      placeholder="Upload Resume"
                      name="File"
                      id="resume"
                      onChange={(e) => setFile(e.target.files)}
                    />
                  </div>

                  <div
                    className="contentholder"
                    style={{
                      margin: "10px auto 20px",
                    }}
                  >
                    <p
                      style={{
                        height: "auto",
                        paddingTop: "15px",
                        textAlign: "center",
                      }}
                    >
                      If You are Unable To Submit Your Deatils. then plese share
                      your recently updated resume at
                      {/* <a href="" style={{ color: "#3A7EF8" }}> */}
                      <span style={{ color: "#3A7EF8" }}>
                        {" "}
                        hr@metaversitytechnologies.com
                      </span>
                      {/* hr@metaversitytechnologies.com */}
                      {/* </a> */}
                    </p>
                  </div>
                  <div
                    className="submitbtnwrapper"
                    style={{
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Modalpopup;
