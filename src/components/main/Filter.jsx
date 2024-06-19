import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryServices";

const Filter = ({
  filterInputValue,
  setfilterInputValue,
  setfilterSelectValue,
  setAdsShowOrder,
}) => {
  const [categories, setcategories] = useState([]);



  useEffect(() => {
    getCategories(setcategories);
  }, []);

  const selectChange = (el) => {
    setfilterSelectValue(el.target.value);
  };

  const inputChange = (e) => {
    setfilterInputValue(e.target.value);
  };
  const sortSelectChange = (e) => {
    setAdsShowOrder(e.target.value);
  };

  return (
    <div className="filters">
      <div className={"filter"}>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={inputChange}
            value={filterInputValue}
          />
          <label htmlFor="categories">Categories: </label>
          <select id="categories" onChange={selectChange}>
            <option value="all">all</option>
            {categories.map((cate) => (
              <option key={cate.name} value={cate.name}>
                {cate.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort">Price order: </label>
          <select id="sort" onChange={sortSelectChange}>
            <option value="default" disabled>
              --Choose--
            </option>
            <option value="low">Lower price</option>
            <option value="high">Higher price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;