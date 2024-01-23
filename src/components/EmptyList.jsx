import { useNavigate } from "react-router-dom";
import product from "/image 2.png";

export default function EmptyList() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="font-bold text-[21px] pt-3">
        Вы пока не создали ни одного товара
      </h3>
      <img
        className="text-center w-[313px] m-auto my-[33px]"
        src={product}
        alt="img"
      />
      <button
        onClick={() => navigate("create")}
        className="bg-[#1BC58D] text-white mb-[50px] py-[15px] px-[24px] rounded-md"
      >
        Создать первый товар
      </button>
    </div>
  );
}
