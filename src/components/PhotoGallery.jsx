import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
        <h3 className="text-3xl font-semibold my-14">Photos</h3>
        {/* photos down */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <ImageCard 
        title="kettle" 

        author="ashlin binshu" 

        img="https://images.pexels.com/photos/1370084/pexels-photo-1370084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        price={100} 

        icon1={
        <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}

        icon2={
        <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
        />

      <ImageCard 
        title="curtains" 

        author="Dipanshu Mandal" 

        img="https://images.pexels.com/photos/1858216/pexels-photo-1858216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        price={300} 

        icon1={
        <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}

        icon2={
        <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
        />

      <ImageCard 
        title="Screws" 

        author="joyal shine" 

        img="https://images.pexels.com/photos/5691650/pexels-photo-5691650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        price={50} 

        icon1={
        <FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}

        icon2={
        <IoIosHeart className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"/>}
        />
        </div>
    </div>
  )
}

export default PhotoGallery
