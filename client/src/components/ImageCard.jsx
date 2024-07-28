import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const ImageCard = ({id, img, title, price, author,icon1, icon2}) => {
    function capitalize(){
        let words = author.split(" ");
        let newAuth = "";
        words.map((item) => {
            newAuth = newAuth + item.charAt(0).toUpperCase() + item.slice(1) + " "
        })
        return newAuth
    }
  return (
    <div className="rounded-lg bg-white shadow-lg p-2">

            <div className="w-[300px] h-[200px] overflow-hidden rounded-2xl">
                <img src={img} alt={title} 
                className="w-full h-full hover:scale-105 transition-all ease-linear duration-300 transform cursor-pointer"
                />
            </div>
            <p className="font-semibold text-white text-end bg-black w-fit mt-3 px-5 py-1 rounded-full text-sm">

                {capitalize()}
            </p>
            <div className="flex justify-between items-center mt-2 ">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{"₹" + price}</p>
                </div>
                <div className="flex gap-6 justify-center">
                   {icon1}
                   {icon2}
                </div>
            </div>
          </div>
  )
}

export default ImageCard