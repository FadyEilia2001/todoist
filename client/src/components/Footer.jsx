import {
  FacebookOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full flex justify-evenly items-center mt-12 bottom-0 py-3  ">
      <FacebookOutlined className="text-3xl text-black cursor-pointer hover:text-red-400 p-3 rounded-lg" />
      <LinkedinOutlined className="text-3xl text-black cursor-pointer hover:text-red-400 p-3 rounded-lg" />
      <GooglePlusOutlined className="text-3xl text-black cursor-pointer hover:text-red-400 p-3 rounded-lg" />
      <GithubOutlined className="text-3xl text-black cursor-pointer hover:text-red-400 p-3 rounded-lg" />
      <input
        type="text"
        placeholder="Newsletter Signup..."
        className="rounded-full py-3 pl-4 pr-12 hidden md:block"
      />
    </footer>
  );
};
export default Footer;
