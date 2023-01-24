import React from "react";
import { getById } from "../Api/products";
import { addToCart } from "../store/actions/action";
import { connect } from "react-redux";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tags from "../tags";
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
            <div>
            <Tags />
                <div className='row pt-5'>
                    <div className='col-md-6'>
                    {/* <Item /> */}
                        <Carousel autoPlay transitionTime="1000" infiniteLoop showArrows={true} dots={false}>
                            <div>
                                <img alt="" src={product.image} />
                            </div>
                            <div>
                                <img alt="" src={product.Slide1} />
                            </div>
                            <div>
                                <img alt="" src={product.Slide2} />
                            </div>
                            <div>
                                <img alt="" src={product.Slide3} />
                            </div>
                        </Carousel>
                    </div>
                    <div className='col-md-6'>
                        <div className='details'>
                            <div className='ll'>
                                <img src={product.brandLogo} className="brand" />
                            </div>
                            <p>{product.description}</p>
                            <h6>{product.gender}</h6>
                            <div className='stars'>
                                <img className='star' src={product.star} />
                                <img className='star' src={product.star} />
                                <img className='star' src={product.star} />
                                <img className='star' src={product.star} />
                                <img className='star' src={product.starActive} />
                                <span className='num'>{product.numOfStars} of 5</span>
                                <span className='rate'>{product.numOfRate} Rates</span>
                            </div>
                            <div className='prices'>
                                <span className='price'>{product.price} <span>LE</span></span>
                                <span className='dis'>{product.discount}</span>
                                <span className='offer'>{product.offer}</span>
                            </div>
                        </div>
                        <div className='size'>
                            <h1>Size</h1>
                            <div className='sizes'>
                                <div className='small'  >
                                    <h6>{product.small}</h6>
                                </div>
                                <div className='small active' >
                                    <h6>{product.Medium}</h6>
                                </div>
                                <div className='small' >
                                    <h6>{product.Large}</h6>
                                </div>
                                <div className='small' >
                                    <h6>{product.XLarge}</h6>
                                </div>
                                <div className='small' >
                                    <h6>{product.XXLarge}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='color'>
                            <h1>Color</h1>
                            <img src={product.color1} className="active" />
                            <img src={product.color2} />
                        </div>
                        <div className='quantity'>
                            <h1>Quantity</h1>
                            <div className='increment'>
                                <button className="" id="minus" onClick={this.decrement.bind(this)}>-</button> 
                                <input type="text" disabled value={this.state.quantity} onChange={this.handleQuantity}/>
                                <button className="" id="plus" onClick={this.increment.bind(this)}>+</button>
                            </div>
                        </div>
                        <div className='buttons'>
                            <button className="add" onClick={() => this.addToCart(product)} > Add to Cart </button>
                            <button className='pickup'>Pickup From Store</button>
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