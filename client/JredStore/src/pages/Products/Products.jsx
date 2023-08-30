import React, { useState, useEffect } from "react";
import { List } from "../../components/List/List.jsx";
import { useParams } from "react-router-dom";
import "./Products.scss";
import useFetch from "../../hooks/useFetch.js";
export const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {
    data: catData,
    loading: catLoading,
    error: catError,
  } = useFetch(`/categories/${catId}?populate=*`);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  useEffect(() => {
    console.log(catData?.attributes);
  }, [catData]);

  useEffect(() => {
    if (data) {
      const initialSubCats = data.map((item) => item.id.toString());
      setSelectedSubCats(initialSubCats);
    }
  }, [data]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedSubCats((prevSubCats) =>
        prevSubCats.includes(value) ? prevSubCats : [...prevSubCats, value]
      );
    } else {
      setSelectedSubCats((prevSubCats) =>
        prevSubCats.filter((item) => item !== value)
      );
    }
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                defaultChecked
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              value={maxPrice}
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              defaultChecked
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src={
            import.meta.env.VITE_REACT_APP_UPLOAD_URL +
            catData?.attributes?.img?.data?.attributes?.url
          }
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};
