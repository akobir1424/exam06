import { useNavigate, useParams } from "react-router-dom";
import Aside from "../components/Aside";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editProduct } from "../features/productSlicer";

export default function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const existingProduct = products.filter((f) => f.id == id);
  console.log(existingProduct[0]);
  const { name, element, desc, price, priceSale, brend } = existingProduct[0];
  const [uName, setuName] = useState(name);
  const [uBrend, setuBrend] = useState(brend);
  const [uElement, setuElement] = useState(element);
  const [uDesc, setuDesc] = useState(desc);
  const [uPrice, setuPrice] = useState(price);
  const [uPricesale, setuPricesale] = useState(priceSale);
  function handleUpdate(e) {
    e.preventDefault();
    dispatch(
      editProduct({
        id: id,
        name: uName,
        brend: uBrend,
        element: uElement,
        desc: uDesc,
        price: uPrice,
        priceSale: uPricesale,
      })
    );
    navigate("/");
  }
  function reset() {
    setuName("");
    setuBrend("");
    // setuDesc("");
    setuElement("");
    // setuPrice("");
    // setuPricesale("");
  }
  return (
    <div className="flex min-h-screen w-[100%]">
      <Aside />
      <div className="w-11/12 bg-[#EEEEF5]">
        <nav className="fixed w-[92%] flex justify-between pl-[40px] bg-white py-[16px] border shadow-md shadow-slate-300">
          <div>
            <h3 className="text-black font-bold text-[18px]">Новый товар</h3>
            <p className="text-gray-500">Главная / Товары / Новый товар</p>
          </div>
          <button className="mr-[48px] flex items-center rounded-md bg-[#F7F7FF] text-black p-[12px]">
            <FaArrowRightLong className="mr-[16px]" /> Выйти
          </button>
        </nav>
        <main className="mt-[120px] mb-[60px] w-[93%] rounded-[12px] p-5 m-auto bg-white">
          <button className="bg-[#F0F0F6] px-[16px] py-[14px] rounded-md font-semibold">
            Основные
          </button>
          <form
            onSubmit={handleUpdate}
            className="border rounded-[12px] mt-[12px] pt-[20px] pl-[50px]"
          >
            <div>
              <label className="font-semibold" htmlFor="name">
                Название <span className="text-[#F1419D]">*</span>
              </label>
              <br />
              <input
                className=" bg-[#F6F6FB] w-[754px] h-[44px] pl-3 rounded-md mt-[12px]"
                type="text"
                value={uName}
                onChange={(e) => setuName(e.target.value)}
                id="name"
              />
            </div>
            <div className="flex my-[30px]">
              <div>
                <label className="font-semibold" htmlFor="brend">
                  Бренд <span className="text-[#F1419D]">*</span>
                </label>
                <br />
                <input
                  className="bg-[#F6F6FB] w-[352px] h-[44px] pl-3 rounded-md mt-[12px]"
                  type="text"
                  value={uBrend}
                  onChange={(e) => setuBrend(e.target.value)}
                  id="brend"
                />
              </div>
              <div className="ml-[50px]">
                <label className="font-semibold" htmlFor="article">
                  Артикул производителя{" "}
                  <span className="text-[#F1419D]">*</span>
                </label>
                <br />
                <input
                  className="bg-[#F6F6FB] w-[352px] h-[44px] pl-3 rounded-md mt-[12px]"
                  type="number"
                  value={uElement}
                  onChange={(e) => setuElement(e.target.value)}
                  id="article"
                />
              </div>
            </div>
            <div>
              <label className="font-semibold" htmlFor="desc">
                Описание <span className="text-[#F1419D]">*</span>
              </label>
              <br />
              <textarea
                className="bg-[#F6F6FB] w-[754px] h-[110px] pl-3 rounded-md mt-[12px]"
                id="desc"
                value={uDesc}
                onChange={(e) => setuDesc(e.target.value)}
              ></textarea>
              <div className="flex my-[30px]">
                <div>
                  <label className="font-semibold" htmlFor="price">
                    Цена
                  </label>
                  <br />
                  <input
                    className="bg-[#F6F6FB] w-[228px] h-[44px] pl-3 rounded-md mt-[12px]"
                    type="number"
                    value={uPrice}
                    onChange={(e) => setuPrice(e.target.value)}
                    id="price"
                  />
                </div>
                <div className="ml-[50px]">
                  <label className="font-semibold" htmlFor="disprice">
                    Цена со скидкой
                  </label>
                  <br />
                  <input
                    className="bg-[#F6F6FB] w-[228px] h-[44px] pl-3 rounded-md mt-[12px]"
                    type="number"
                    value={uPricesale}
                    onChange={(e) => setuPricesale(e.target.value)}
                    id="disprice"
                  />
                </div>
              </div>
            </div>
            <button className="bg-[#1BC58D] font-semibold text-white px-[20px] py-[10px] rounded-md">
              Сохранить
            </button>
            <button
              className="bg-[#F0F0F6] font-semibold px-[20px] py-[10px] mb-[30px] rounded-md ms-[10px]"
              type="reset"
              onClick={() => reset()}
            >
              Отмена
            </button>
          </form>
        </main>
        <p className="text-end pr-[48px] mt[60px] text-[#80809B]">
          © Anymarket 2022
        </p>
      </div>
    </div>
  );
}
