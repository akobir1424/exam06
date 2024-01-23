import { Link } from "react-router-dom";
import Logo from "../../public/Logo.svg"
import { FaRegUserCircle } from "react-icons/fa";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { IoSettingsSharp } from "react-icons/io5";
// import { logo } from '/Лого.svg';
export default function Aside() {
  return (
    <aside className="w-1/12 bg-[#5B5CE2] flex text-white flex-col items-center pt-[30px]">
      <Link to={"/"}>
        <img src={Logo} className="w-[49px] h-[32px] mb-[38px]" alt="logo" />
      </Link>
      <Link
        to={"/"}
        className="p-[15px] hover:bg-[#6C6DE5] focus:bg-[#6C6DE5] cursor-pointer rounded-md"
      >
        <IoSettingsSharp className="text-[20px]" />
      </Link>
      <Link className="p-[15px] hover:bg-[#6C6DE5] focus:bg-[#6C6DE5] cursor-pointer rounded-md">
        <FaRegUserCircle className="text-[20px]" />
      </Link>
      <Link
        to={"create"}
        className="p-[15px] hover:bg-[#6C6DE5] focus:bg-[#6C6DE5] cursor-pointer rounded-md"
      >
        <LiaShoppingBasketSolid className="text-[20px]" />
      </Link>
    </aside>
  );
}
