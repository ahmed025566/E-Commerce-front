import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Banner = () => {
  const textDiv = useRef();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products', { withCredentials: true })
      .then((res) => {
        setProduct(res.data.products[1][0]);
        setImage(res.data.products[1][1]);
        setProducts(res.data.products);
      })
      .catch((err) => err.message);
  }, []);

  const selectBanner = (e) => {
    if (e.target.childNodes.length === 0) {
      e.target.classList.add('selected');
      e.target.parentElement.childNodes.forEach((item) => {
        if (item != e.target) {
          item.classList.remove('selected');
        }
      });
    }
  };

  return (
    <div>
      <img src={image} alt="banner" className="banner" />
      <div className="text" ref={textDiv} data-aos="slide-left">
        <p>{product.name}</p>
        <p>
          {product.shortDescription}
          {' '}
          - $
          {product.price}
        </p>
      </div>
      <div className="buttons" onClick={selectBanner}>
        <span onClick={() => {
          setProduct(products[1][0]);
          setImage(products[1][1]);
          textDiv.current.classList.add('dark');
          textDiv.current.classList.remove('white', 'black');
        }}
        />
        <span onClick={() => {
          setProduct(products[2][0]);
          setImage(products[2][1]);
          textDiv.current.classList.add('white');
          textDiv.current.classList.remove('dark', 'black');
        }}
        />
        <span onClick={() => {
          setProduct(products[3][0]);
          setImage(products[3][1]);
          textDiv.current.classList.add('black');
          textDiv.current.classList.remove('white', 'black');
        }}
        />
      </div>
    </div>
  );
};

export default Banner;
