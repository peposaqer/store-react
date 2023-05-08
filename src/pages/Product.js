import React from "react";
import { getById } from "../Api/products";
import { addToCart } from "../store/actions/action";
import { connect } from "react-redux";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Tags from "../tags";
import ProductItem from "../components/ProductItem";

class Product extends React.Component {

    state={
        loading: true,
        product: {},
        quantity: 1,
        // counter:1,
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        getById(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false,
                })
            })
    }

    handleQuantity = (event) => {
        const value = event.target.value;
        if(value < 0)
            return ;
        this.setState({
            quantity: value
        })
    }

    addToCart = (product) => {
        this.props.addToCart(product, this.state.quantity)
    }

    increment(){
        this.setState({
            quantity: this.state.quantity + 1
        });
    }

    decrement(){
        if(this.state.quantity > 1){
            this.setState(prevState => ({quantity: prevState.quantity-1}))
        }
    }

    render() {
        if(this.state.loading)
            return 'Loading ..';
        const product = this.state.product;
        return (
            <div className="container">
                <div className='row pt-5'>
                    <div className='col-md-6'>
                        <img src={product.image} className="brand" />
                    </div>
                    <div className='col-md-6'>
                        <div className='details'>
                            <p>{product.description}</p>
                            <div className='card-price'>
                                <span className='price'>{product.price} EGP<span></span></span>
                                <span className='offer'>{product.discount} EGP</span>
                                <span className='dic'>{product.offer}</span>
                            </div>
                        </div>
                        <div className='quantity'>
                            <h1>Quantity</h1>
                            <div className='increment'>
                                <button className="" id="minus" onClick={this.decrement.bind(this)}>-</button> 
                                <input type="text" disabled value={this.state.quantity} onChange={this.handleQuantity}/>
                                <button className="" id="plus" onClick={this.increment.bind(this)}>+</button>
                            </div>
                        </div>
                        <div className='buttons mt-5 mb-3'>
                            <button className="buy" onClick={() => this.addToCart(product)} > Add to Cart </button>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <ProductItem /> */}
                    {/* {product.map((product) => (
                        <div className={"col-4"} key={product.id}>
                            {product.id}
                        </div>
                    ))} */}
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productsInfo, quantity) => dispatch(addToCart(productsInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(Product);