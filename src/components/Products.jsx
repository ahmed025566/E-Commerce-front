import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Products() {
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/categories')
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err.message));
  }, []);

  const selectFilter = (e, className) => {
    if (!e.target.classList.contains('filterHead')) {
      if (e.target.childNodes.length < e.target.parentElement.childNodes.length) { e.target.classList.add(className); }
      e.target.parentElement.childNodes.forEach((item) => {
        if (item.textContent !== e.target.textContent) {
          item.classList.remove(className);
        }
      });
    }
  };

  const filterProducts = (Id) => {
    axios.get('http://localhost:3000/products')
      .then((res) => {
        res.data.products.forEach((item) => {
          if (item[0].id === Id) {
            setProducts();
            console.log(products);
          }
        });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="filters">
        <div className="catogries" onClick={(e) => selectFilter(e, 'filter-class-1')}>
          <p className="category">Show all</p>
          {categories.map((category) => (
            <p key={category.id} className="category" onClick={() => filterProducts(category.id)}>
              <span>/</span>
              {category.name}
            </p>
          ))}
        </div>
        <p className="" onClick={() => setFilter(!filter)}>
          {filter ? 'Hide Filter' : (
            <span>
              Filter
              <span className="arrow" />
            </span>
          ) }
        </p>
      </div>

      {filter && (
      <div className="filters_1">
        <div className="filter" onClick={(e) => selectFilter(e, 'filter-class-1')}>
          <p className="filterHead">Sort By</p>
          <p className="choice">Newest</p>
          <p className="choice">Popularity</p>
          <p className="choice">Price: Hight to Low</p>
          <p className="choice">Price Low to High</p>
        </div>
        <div className="filter" onClick={(e) => selectFilter(e, 'filter-class-2')}>
          <p className="filterHead">Choose Color</p>
          <p className="choice">
            <span className="color Black" />
            Black
          </p>
          <p className="choice">
            <span className="color Blue" />
            Blue
          </p>
          <p className="choice">
            <span className="color Brown" />
            Brown
          </p>
          <p className="choice">
            <span className="color Gray" />
            Gray
          </p>
          <p className="choice">
            <span className="color White" />
            White
          </p>
          <p className="choice">
            <span className="color Oragne" />
            Oragne
          </p>
        </div>
        <div className="filter" onClick={(e) => selectFilter(e, 'filter-class-2')}>
          <p className="filterHead">Brands</p>
          <p className="choice">Delce & Gabbana</p>
          <p className="choice">Hermes</p>
          <p className="choice">Huge Boss</p>
          <p className="choice">Louis Vuitton</p>
          <p className="choice">Versace</p>
          <p className="choice">Zara</p>
        </div>
        <div className="filter" />
      </div>
      )}
    </>
  );
}
