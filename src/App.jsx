import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import EmptyList from "./components/EmptyList";
import { useState } from "react";
import Aside from "./components/Aside";
import { deleteProduct } from "./features/productSlicer";
function App() {
  const products = useSelector((state) => state.products);
  const [brend, setBrend] = useState("");
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const filteredProducts = products.filter((product) => {
    return product.brend.toLowerCase().includes(brend.toLowerCase());
  });
  return (
    <div className="flex min-h-screen w-[100%]">
      <Aside />
      <div className="w-11/12 bg-[#EEEEF5]">
        <nav className="z-50 fixed w-[92%] flex justify-between pl-[40px] bg-white py-[16px] border shadow-md shadow-slate-300">
          <div>
            <h3 className="text-black font-bold text-[18px]">Товары</h3>
            <p className="text-gray-500">Главная / Товары</p>
          </div>
          <button className="mr-[48px] flex items-center rounded-md bg-[#F7F7FF] text-black p-[12px]">
            <FaArrowRightLong className="mr-[16px]" /> Выйти
          </button>
        </nav>
        <main className="mt-[120px] pt-[30px] mb-[60px] w-[93%] rounded-[12px] text-center m-auto bg-white">
          {products.length == 0 ? (
            <EmptyList />
          ) : (
            <div>
              <div className="font-semibold pb-[30px] items-center relative mx-[24px] flex justify-between">
                <p>Все товары (5)</p>
                <CiSearch className="absolute right-[16%] top-4" />
                <input
                  type="text"
                  onChange={(e) => setBrend(e.target.value)}
                  className="bg-[#F7F7FF] rounded-lg py-[10px] pl-[56px]"
                  placeholder="Поиск"
                />
              </div>
              <hr />
              <div className="mx-[24px]">
                <table className="w-full text-start">
                  <thead className="font-medium text-[#B5B5C3]">
                    <tr className="text-left p-[30px]">
                      <th className="border-b">
                        <input type="checkbox" />
                      </th>
                      <th className="border-b py-[30px]">Наименование</th>
                      <th className="border-b ">Артикул</th>
                      <th className="border-b ">Бренд</th>
                      <th className="border-b ">Цена</th>
                      <th className="border-b ">Цена со скидкой</th>
                      <th className="border-b ">Дейсивия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, item) => {
                      return (
                        <tr key={product.id}>
                          <td className="border-b py-[30px]">
                            <input type="checkbox" />
                          </td>
                          <td className="border-b">Товар {item}</td>
                          <td className="border-b">{product.element}</td>
                          <td className="border-b">{product.brend}</td>
                          <td className="border-b">{product.price} $</td>
                          <td className="border-b">{product.priceSale} $</td>
                          <td className="border-b">
                            <Link
                              to={`/edit/${product.id}`}
                              className="p-[9px] inline-grid rounded-md bg-[#F7F7FF] mr-[6px] text-[#5B5CE2]"
                            >
                              <MdOutlineEditCalendar />
                            </Link>
                            <button
                              onClick={() => removeProduct(product.id)}
                              className="p-[9px] rounded-md bg-[#F7F7FF] text-[#5B5CE2]"
                            >
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
        {products.length == 0 ? (
          ""
        ) : (
          <div className="flex justify-between px-[50px] items-center mb-[30px]">
            <Link
              to={"/create"}
              className="px-[20px] py-[10px] bg-[#1BC58D] rounded-md text-white"
            >
              + Новый товар
            </Link>
            <p className="text-[#80809B]">© Anymarket 2022</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
