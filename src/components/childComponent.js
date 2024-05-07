import React, { Component } from 'react';

class Child extends Component {
    state = {  } 
    render() { 
        const {color} = this.props.product;

        if (this.props.product)
        {
            return (
                <div>
                    <h3>
                        {this.props.product.title}
                    </h3>
                    <h4>
                        Value: {this.props.product.value}
                    </h4>
                    <h4 style={{color: color}}>
                        Color: {this.props.product.color}
                    </h4>
                    <h4>
                        Price: {this.props.product.price}
                    </h4>
                </div>
            );
        }
        else
        {
            <>
            </>
        }

    }
}
 
export default Child;