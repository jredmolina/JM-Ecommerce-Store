import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import Home1 from "../../../public/img/home1.webp";
import Home2 from "../../../public/img/home2.webp";
import Home3 from "../../../public/img/home3.webp";
import Home4 from "../../../public/img/home4.webp";
import Home5 from "../../../public/img/home5.jpg";
import Home6 from "../../../public/img/home6.jpg";
export const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src={Home1} alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src={Home2} alt="" />
          <button>
            <Link className="link" to="/products/1">
              Apparel
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src={Home3} alt="" />
          <button>
            <Link className="link" to="/products/2">
              Sneakers
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              {" "}
              <img src={Home4} alt="" />
              <button>
                <Link className="link" to="/products/2">
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src={Home5} alt="" />
              <button>
                <Link className="link" to="/products/3">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img src={Home6} alt="" />
          <button>
            <Link className="link" to="/products/1">
              Featured
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
