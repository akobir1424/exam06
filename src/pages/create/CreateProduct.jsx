import { FaArrowRightLong } from "react-icons/fa6";
import Aside from "../../components/Aside";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/productSlicer";
import { uid } from "uid";
export default function CreateProduct() {
  const [name, setName] = useState("");
  const [brend, setBrend] = useState("");
  const [element, setElement] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if ((name && brend && element && desc && price && priceSale) !== "") {
      dispatch(
        addProduct({ id: uid(), name, brend, element, desc, price, priceSale })
      );
      navigate("/");
    } else {
      alert("Forma to'iq to'ldirilmagan!");
    }
  }
  function reset() {
    setName("");
    setBrend("");
    setElement("");
    setDesc("");
    setPrice("");
    setPriceSale("");
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
            onSubmit={handleSubmit}
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
                onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setBrend(e.target.value)}
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
                  onChange={(e) => setElement(e.target.value)}
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
                onChange={(e) => setDesc(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) => setPriceSale(e.target.value)}
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
