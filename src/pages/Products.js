import React from "react";
import ProductItem from "../components/ProductItem";
import ProductsApi from "../Api/products";
import pet from "../img/Union.png"

export default class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    ProductsApi.getAll().then((data) => {
      this.setState({
        products: data,
      });
    });
  }
  render() {
    return (
      <div className="product">
        <div className="container">
          <div className="row">
            <div className='col-md-12 text-center mb-5'>
                <h1><img alt='pet' src={pet} /> Products</h1>
                <span>Pets Nutrients & Food , 25% of all products</span>
            </div>

            {this.state.products.map((product) => (
              <div className={"col-4"} key={product.id}>
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}