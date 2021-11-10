import React from "react";
import { getById } from "../Api/products";
import { addToCart } from "../store/actions/action";
import { connect } from "react-redux";

class Product extends React.Component {

    state={
        loading: true,
        product: {},
        quantity: 0,
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

    render() {
        if(this.state.loading)
            return 'Loading ..';
        const product = this.state.product;
        return (
            <div>
                <div className={'row'}>
                    <div className="col-6">
                        <img src={product.image} width={'100%'}/>
                    </div>
                    <div className="col-6">
                        <h1>{product.name}</h1>
                        <p>Price: {product.price}$</p>
                        <p>{product.description}</p>
                        <br/><br/>
                        <input type="number" value={this.state.quantity} onChange={this.handleQuantity} />
                        <br /><br />
                        <p>Totle: {this.state.quantity * product.price}</p>
                        <button className="btn btn-primary" onClick={() => this.addToCart(product)}> Add to Cart </button>
                    </div>
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