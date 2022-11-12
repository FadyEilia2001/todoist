import Card from "../components/Card";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

const Templates = () => {
  return (
    <div className="flex h-screen flex-col items-center lg:gap-x-8 lg:gap-y-12 mx-auto ">
      <Navbar />
      <div className="p-4 flex flex-col lg:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="p-4 flex flex-col lg:flex-row">
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};
export default Templates;
