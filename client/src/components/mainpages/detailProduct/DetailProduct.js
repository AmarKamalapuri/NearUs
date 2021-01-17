import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";

function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  return (
    <>

    

     
      <div className="detail">
      
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h1>{detailProduct.title}</h1>
            
          </div>
          <span className="details-stuff"> Starting from:</span><span className="details-ans"> Rs {detailProduct.price}</span>
          <p><span className="details-stuff">Description: </span><span className="details-ans">{detailProduct.description}</span> </p>
          <p><span className="details-stuff">Address: </span><span className="details-ans"></span> </p>
          <p><span className="details-stuff">Timings: </span><span className="details-ans"></span> </p>
          <p><span className="details-stuff">Sold: </span><span className="details-ans"></span> </p>
         
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            <h6>Add Fav</h6>
            
          </Link>
        </div>
      </div>

      <div >
        <span className="related-shops">Related Shops</span>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
