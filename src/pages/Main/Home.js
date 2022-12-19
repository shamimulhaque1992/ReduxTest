import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggle, toggleCategories } from "../../features/filter/filterSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);
  const {category, stock } = filters;
  console.log("sds", stock);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.products));
  }, []);

  const activeClass = "text-white  bg-indigo-500 border-white";

  let content;
  if (products.length) {
    content = products.map((product, index) => (
      <ProductCard key={index} product={product}></ProductCard>
    ));
  }
  if (products.length && stock || category.length) {
    content = products.filter(product=>product.status === true ).filter(product=>category.includes(product.category)).map((product, index) => (
      <ProductCard key={index} product={product}></ProductCard>
    ));
  }

  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleCategories("smartphones"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Smartphones
        </button>
        <button
          onClick={() => dispatch(toggleCategories("laptops"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Laptops
        </button>
        <button
          onClick={() => dispatch(toggleCategories("fragrances"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Fragrances
        </button>
        <button
          onClick={() => dispatch(toggleCategories("skincare"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Skincare
        </button>
        <button
          onClick={() => dispatch(toggleCategories("groceries"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Groceries
        </button>
        <button
          onClick={() => dispatch(toggleCategories("home-decoration"))}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Home-decoration
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
