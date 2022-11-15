import { PlusCircleOutlined } from "@ant-design/icons";
import Logo from "../assets/logo/Logo.png";


const Card = () => {
  return (
    <div class="w-full max-w-md px-8 py-4 mt-16 md:mr-4 bg-white rounded-lg shadow-xl h-fit border-2 mb-8 border-red-500">
      <div class="flex justify-center -mt-16 md:justify-end">
        <img
          class="object-cover w-20 h-20 border-2 border-red-500 rounded-full "
          alt="Testimonial avatar"
          src={Logo}
        />
      </div>

      <h2 class="mt-2 text-2xl font-semibold text-blackmd:mt-0 md:text-3xl">
        <span className="mr-4 cursor-pointer hover:text-red-500 animate-pulse  transition-all">
          <PlusCircleOutlined className="hover:animate-spin shadow-lg rounded-full transition-all" />
        </span>
        Design Tools
      </h2>

      <p class="mt-2 text-gray-600 dark:text-black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
        deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
        commodi hic, suscipit in a veritatis pariatur minus consequuntur!
      </p>

      <div class="flex justify-end mt-4 text-white">todoist</div>
    </div>
  );
};
export default Card;
