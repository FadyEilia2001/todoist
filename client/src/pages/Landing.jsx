import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import getMoreDone from "../assets/imgs/getMoreDone.webp";
import clearYourMind from "../assets/imgs/clearYourMind.webp";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-12 md:mt-24 mb-12 text-center">
        <p className="text-2xl md:text-6xl font-medium p-0 m-0">
          Organize your
        </p>
        <p className=" text-2xl md:text-6xl font-medium m-0 mb-8">
          work and life, finally.
        </p>
        <p className="md:text-[1.5rem] p-0 m-0 mb-2">
          Become focused, organized, and calm with Todoist.
        </p>
        <p className="md:text-[1.5rem] p-0 m-0">
          The world’s #1 task manager and to-do list app.
        </p>
        <button className="relative mt-8 py-3 px-12 mr-4 bg-red-500 rounded-xl text-white border-none text-xl font-medium tracking-wide hover:bg-red-700 cursor-pointer">
          <LoginOutlined className="mr-4 animate-pulse" />
          <Link to="/register" className="text-white">
            Start for free
          </Link>
        </button>
      </main>

      <section className="flex flex-col items-center p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 text-center md:text-start">
          <img src={clearYourMind} alt="tasks" className="w-1/2 mt-16 mb-8" />
          <div>
            <p>Get More done</p>
            <h3 className="text-xl font-bold">
              Add your tasks. Organize your life.
            </h3>
            <p>
              Add tasks like “Read work emails every day at 10am” to fill your
              to-do list in
            </p>
            <p>
              seconds using Todoist’s powerful natural language recognition and
              recurring dates.
            </p>
          </div>
        </div>

        <Divider />

        <div className="container flex flex-col md:flex-row items-center justify-center mx-auto mt-12 mb-12">
          <div className="flex flex-col items-center text-center md:text-left justify-center ">
            <p>Clear your mind</p>
            <h3 className="text-xl font-bold">
              Reach that mental clarity you’ve been longing for.
            </h3>
            <p>Your to-do lists are automatically sorted into Today,</p>
            <p>
              Upcoming and custom Filter views to help you focus on your most
              important things.
            </p>
          </div>
          <img src={getMoreDone} className="w-1/2 mt-8" alt="" />
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Landing;
