import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, Modal } from "@mui/material";
import React, { useState } from "react";


function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [result, setResult] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setWarning(false);
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setWarning(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name === "" ||
      user.email === "" ||
      user.phone === "" ||
      user.subject === "" ||
      user.message === ""
    ) {
      setResult(true);
      setWarning(true);
    } else {
      setResult(true);
      setWarning(false);
      setOpen(true);
    }
    setUser({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="w-full p-8 bg-gradient-to-r rounded-3xl from-purple-400 to-pink-200 text-black">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <div className="mb-6">
            <LocationOnIcon className="text-3xl mb-2" />
            <h1 className="text-xl font-bold">Location</h1>
            <span className="text-lg">
              House Number 43, Vard Number 02, Sharda Nagar, Gadasarai, Dindori,
              Madhya Pradesh, 481882
            </span>
          </div>
          <div className="mb-6">
            <LocalPhoneIcon className="text-3xl mb-2" />
            <h1 className="text-xl font-bold">Phone</h1>
            <span className="text-lg">+91-7509722382</span>
          </div>
          <div className="mb-6">
            <EmailIcon className="text-3xl mb-2" />
            <h1 className="text-xl font-bold">Email</h1>
            <span className="text-lg">rahulyadav0296@gmail.com</span>
          </div>
         
        </div>
        <div className="md:w-1/2 p-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Your Name"
              onChange={handleUser}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Your Email"
              onChange={handleUser}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              placeholder="Your Phone"
              onChange={handleUser}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            />
            <input
              type="text"
              name="subject"
              value={user.subject}
              placeholder="Your Subject"
              onChange={handleUser}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Start Writing Message Here!"
              value={user.message}
              onChange={handleUser}
              className="w-full p-2 rounded-lg bg-gray-700 text-white"
            />
            {warning && (
              <div className="text-red-500 text-center font-bold">
                Please fill out all fields
              </div>
            )}
            <button
              type="submit"
              className="w-full text-white bg-gradient-to-r from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </form>
          <Modal open={open} onClose={handleClose}>
            <div className="flex items-center justify-center h-screen ">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[350px] transform transition-all duration-500 ease-in-out hover:scale-105">
                {result ? (
                  <>
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 animate-pulse">
                      Thank You!
                    </h1>
                    <p className="text-gray-700 mb-6 text-xl">
                      I will contact you soon!
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 animate-pulse">
                      You Missed Something
                    </h1>
                    <p className="text-gray-700 mb-6 text-xl">
                      Please Enter Every Input Fields
                    </p>
                  </>
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClose}
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#fff",
                    padding: "10px 20px",
                    fontSize: "16px",
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
