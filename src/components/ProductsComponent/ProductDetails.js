import React, { useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from 'react-redux';
// import data from "../../data";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProductPage(props) {

  // const getData = useSelector((state)=>state.cartReducer)
  // console.log(getData);
  const prods = useSelector((state)=>state.cartReducer.products)

  let productIndex=props.match.params.id ? props.match.params.id-1 : 0;
  const [cart, setCart] = useState({
    productId:productIndex,
    color: "",
    size: ""
  });
  const {productId, color, size } = cart;
  const handleSelection = (e) => {
    setCart({ ...cart,[e.target.name]: e.target.value });
    console.log(cart);
  };
  const imageRef=useRef();
const changeImage=(e)=>{
const currentImgSrc=imageRef.current.src;
imageRef.current.src=e.target.src;
e.target.src=currentImgSrc;
// e.target.style.background="red";
}
  // const selectColor = useRef([]);
  // selectColor.current = prods.products[productId].colors.map((ref, index) => {
  //   return (selectColor.current[index] = React.createRef());
  // });

  // const selectSize = useRef([]);
  // selectSize.current = prods[productId].sizes.map((ref, index) => {
  //   return (selectSize.current[index] = React.createRef());
  // });
  const handleCartSubmit = (e) => {
    e.preventDefault();
    console.log(cart);
    selectColor.current.map(
      (ele, index) => (selectColor.current[index].current.checked = false)
    );
    selectSize.current.map(
      (ele, index) => (selectSize.current[index].current.checked = false)
    );
    setCart({productId:productId,color: "", size: "" });
    console.log(cart)
  };

  const canCheckout = [color, size].every(Boolean);
  return (
    <div className="ProductPage">
      <div className="products-hero-design">
        <div className="ripple-design">
          <div className="ripple-circle very-small shade0"></div>
          <div className="ripple-circle small shade1"></div>
          <div className="ripple-circle medium shade2"></div>
          <div className="ripple-circle large shade3"></div>
        </div>
        <div className="products-nav">
          <p className="breadCrump">
            <span className="home-link">Home</span> / Product Details
          </p>
          <h3 className="title">Product Details</h3>
          <div className="previous-next-buttons">
          {productId>=1?<div  onClick={()=>setCart({...cart,productId:productId-1})}  className="left-arrow">
              <FontAwesomeIcon icon={['fas','chevron-left']} size="2x" aria-hidden="true"/>
            </div>:null}
            {productId<3?
            <div onClick={()=>setCart({...cart,productId:productId+1})}  className="right-arrow">
  <FontAwesomeIcon icon={['fas','chevron-right']} size="2x" aria-hidden="true"/>
            </div>:null
            }
          </div>
        </div>
      </div>
      <div className="product-details-container">
        <div className="product-details-card">
          <div className="product-detail-left-container">
            <div className="product-details-name">
              <p>{prods[productId].title}</p>
            </div>
            <div className="product-details-description">
              <p>{prods[productId].description}</p>
            </div>
            {/* <div className="product-image-thumbnails">
              {prods.products[productId].thumbnails.map((thumbnail, index) => {
                return (
                  <div className="product-image-thumbnail">
                    <img
                      src={thumbnail}
                      // width="50"
                      // height="21"
                      width="95"
                      height="40"
                      alt="thumbnails"
                      onClick={changeImage}
                    />
                  </div>
                );
              })}
            </div> */}
          </div>
          <div className="product-detail-middle-container">
            <div className="product-image-gallery">
              <img 
              ref={imageRef}
                src={prods[productId].image}
                // width="150"
                // height="63"
                width="200"
                height="270"
                alt="product-gallery"
              />
            </div>
            <div className="product-detail-price">
              <span>${prods[productId].price}</span>
            </div>
          </div>
          <div className="product-detail-right-container">
            <span className="review-heading">Ratings:</span>
            <Rating rating={prods[productId].rating.rate} reviews={prods[productId].rating.count} />
            {/* <Rating rating={prods[productId].rating.rate}  /> */}
            {/* <div className="product-detail-color">
              <span>Select Color:</span>
              <div className="shoe-colors">
                {prods.products[productId].colors.map((color, index) => {
                  return (
                    <label key={color} htmlFor={"color" + index}>
                      <input
                        onChange={handleSelection}
                        type="radio"
                        id={"color" + index}
                        value={color}
                        name="color"
                        ref={selectColor.current[index]}
                      />
                      <div
                        style={{ background: color }}
                        className="colors"
                      ></div>
                    </label>
                  );
                })}
              </div>
            </div> */}
            {/* <div className="product-detail-size">
              <span>Select Size:</span>
              <div className="sizes">
                {prods.products[productId].sizes.map((size, index) => {
                  return (
                    <label key={size} htmlFor={"size" + index}>
                      <input
                        onChange={handleSelection}
                        type="radio"
                        id={"size" + index}
                        value={size}
                        name="size"
                        ref={selectSize.current[index]}
                      />
                      <div className="size-box">{size}</div>
                    </label>
                  );
                })}
              </div>
            </div> */}
            <div className="product-detail-add-to-cart-btn">
              <button onClick={handleCartSubmit} disabled={!canCheckout}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <div className="related-products">
          <div className="related-products-header">
            <h1>Related Products</h1>
          </div>
          <div className="related-products-card">
          {prods.map((product) => (
            <ProductCard product={product} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
