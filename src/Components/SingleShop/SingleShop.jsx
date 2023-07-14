import React, { useState } from "react";
import { useParams } from "react-router";
import { ShoppingBagHeader } from "../Header/HeaderComponents";
import cart from "../../assets/cart.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartReducer";
import { Link } from "react-router-dom";
import image1 from "../../assets/nonephoto.png";

const SingleShop = ({ products }) => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const data = products.find((product) => product.id === parsedId);
  const dispatch = useDispatch();

  const { title, price, category, image } = data;
  const oldPrice = price * 3;

  const [mainImage, setMainImage] = useState(image);

  const handleClickImage = (subImage) => {
    setMainImage(subImage);
  };

  console.log(mainImage);
  const test = [
    {
      subImages:
        "https://images.pexels.com/photos/5380089/pexels-photo-5380089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      subImages:
        "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      subImages: image,
    },
    {
      subImages:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      {data && <ShoppingBagHeader data={data} />}
      <div className="singleShop-container">
        <div className="singleShop-inner_container">
          <div className="singleShop-left">
            <div className="singleShop-subImages">
              {test.map((data) => {
                return (
                  <div>
                    <img
                      src={data.subImages}
                      alt={data.subImages}
                      onClick={() => handleClickImage(data.subImages)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="main-image" key={data.id}>
              <img src={mainImage} alt={mainImage} />
              <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            </div>
          </div>
          <div className="singleShop-right">
            <h1>{title}</h1>
            <p>
              Avaliability: <span>48 in stocks</span>
            </p>
            <div className="singleShop-price_check">
              <h3 className="current-price">${price}</h3>
              <h3 className="oldprice">${oldPrice}</h3>
            </div>
            <div className="singleShop">
              <Link to="Cart">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: title,
                        price: price,
                        category: category,
                        image: image,
                      })
                    )
                  }
                >
                  <span>
                    Add to Cart <img src={cart} alt={cart} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
