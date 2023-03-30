import React , { useState }  from 'react'
import "./contactusForm.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const contactusForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");


  return (
    <div>
       <div className="main-contact-caintanier">
            <div className="main-contact-wrapper">
              <div className="left-form">
                <div className="left-side-top-section">
                  <h1>Contact Us</h1>
                  <div className="left-side-arrow"></div>
                </div>

                <div className="left-input-section">
                  <div className="left-input1">
                    <LocationOnIcon style={{ color: "white" }} />

                    <p>
                      Suite 607,C-51,BSI Business Park <br /> Sector 62,Noida -
                      201309
                    </p>
                  </div>

                  <div className="left-input2">
                    <MailIcon style={{ color: "white" }} />
                    <p>info@metaversitytechnologies.com</p>
                  </div>

                  <div className="left-input3">
                    <PhoneIcon style={{ color: "white" }} />
                    <p>+91-8810228283 &nbsp; +91-7011314162</p>
                  </div>
                </div>
              </div>

              <div className="right-form">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    // const data = new FormData();
                    // data.append(
                    const data = JSON.stringify({
                      data: {
                        name: name,
                        email: email,
                        contact: number,
                        question: message,
                      },
                    });

                    if (!name || !email || !number || !message) {
                      alert("All Fields Are Mendatory");
                      return;
                    }

                    // data.append("Name", "ADF");
                    fetch(process.env.STRAPI_API_URL + "api/user-requests", {
                      method: "POST",
                      body: data,
                      headers: {
                        "Content-Type": "application/json",
                      },
                    })
                      .then((res) => res.json())
                      .then((res) => {
                        // console.log(res);
                        if (res?.data) {
                          alert("Submitted Sucessfully");

                          // setOpen(false);
                          setName("");
                          setEmail("");
                          setMessage("");
                          setNumber("");
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
                  <div className="top-sections">
                    <h1>Get In Touch</h1>
                    <p>Feel Free to drop us a line below</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <input
                      type="email"
                      placeholder="Email id"
                      name="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      name="Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      placeholder="Message"
                      name="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></input>
                  </div>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
    </div>
  )
}

export default contactusForm
