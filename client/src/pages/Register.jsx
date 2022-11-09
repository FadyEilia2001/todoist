import React, { useState } from "react";
import getMoreDone from "../assets/imgs/getMoreDone.webp";
import { LoginOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import reg1 from "../assets/imgs/register-imgs/reg1.jpg";
import reg2 from "../assets/imgs/register-imgs/reg2.jpg";
import reg3 from "../assets/imgs/register-imgs/reg3.jpg";
import reg4 from "../assets/imgs/register-imgs/reg4.jpg";
import Alert from "../components/Alert";

import { useAppContext } from "../context/appContext";

const Register = () => {
  const [isMember, setIsMember] = useState(true);
  const { alertDisplay, displayAlert, hideAlert } = useAppContext();
  console.log(displayAlert);

  // form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //capture input
  const handleChange = (e) => {
    hideAlert();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      console.log("missing email or password");
      displayAlert();
      hideAlert();
    }
    if (!isMember) {
      if (!formData.name || !formData.confirmPassword) {
        console.log("missing name or confirm password");
      }
      if (formData.Password !== formData.confirmPassword) {
        console.log("password do not match");
      }
    }
  };

  return (
    <section className="mx-auto flex items-center  flex-col h-screen">
      <Navbar />
      <img src={reg1} className="md:hidden mt-8" alt="" />

      <main className="bg-white w-full h-full flex md:items-center md:justify-center gap-4 container">
        {/* left section */}
        <div className="w-1/2 hidden md:flex p-4">
          {/* images div */}
          <div>
            <img src={reg1} className="w-1/2" alt="" />
            <img src={reg2} className="w-1/2" alt="" />
            <img src={reg3} className="w-1/2" alt="" />
            <img src={reg4} className="w-1/2" alt="" />
          </div>
          {/* images div */}
        </div>
        {/* end left section */}

        <form
          className="flex flex-col space-y-6 items-center w-full justify-center md:w-1/2 h-full"
          onSubmit={handleSubmit}
        >
          <h2 className="mt-4 p-4 text-center font-bold md:w-2/3">
            {!isMember
              ? "Create a new Account and join more than 30 million other todisters managing their tasks"
              : "Login to start managing your tasks"}
          </h2>
          {alertDisplay && <Alert />}
          {/* form inputs */}
          {!isMember && (
            <input
              type="text"
              name="name"
              placeholder="First Name ..."
              className="py-2 pl-2 pr-20 rounded-xl w-64"
              onChange={handleChange}
              value={formData.name}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="py-2 pl-2 pr-20 rounded-xl w-64"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="py-2 pl-2 pr-20 rounded-xl w-64"
            onChange={handleChange}
            value={formData.password}
          />

          {!isMember && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="py-2 pl-2 pr-20 rounded-xl w-64"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          )}
          <button className="py-3 px-16 w-64 bg-red-600 rounded-xl text-white border-none text-xl font-medium tracking-wide hover:bg-red-700 cursor-pointer hover:scale-105 transition-transform ">
            <span className="mr-4">
              <LoginOutlined />
            </span>
            <span>{isMember ? "Login" : "Start for free"}</span>
          </button>

          {!isMember && (
            <p>
              Already a member?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => setIsMember(true)}
              >
                Login
              </span>
            </p>
          )}
          {isMember && (
            <p>
              Not a member?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => setIsMember(false)}
              >
                Register
              </span>
            </p>
          )}
        </form>
      </main>
      <Footer />
    </section>
  );
};
export default Register;
