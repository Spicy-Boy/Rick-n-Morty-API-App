import React, { Component } from 'react';
import Child from './childComponent';

class Parent extends Component {

    constructor()
    {
        super();

        this.state = { 
            items: [
                { id: 1, value: 4, title: "Product One", color:"red", price:100,imageUrl: "https://picsum.photos/200" },
                { id: 2, value: 5, title: "Product Two" , color:"yellow", price:200,imageUrl: "https://picsum.photos/200"  },
                { id: 3, value: 0, title: "Product Three" , color:"green", price:300,imageUrl: "https://picsum.photos/200" },
                { id: 4, value: 0, title: "Product Four" , color:"blue", price:400,imageUrl: "https://picsum.photos/200"  },
            ],
            product: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(itemID)
    {
        // console.log(itemID);
        const selectedProduct = this.state.items.find((item) => item.id === itemID);
        this.setState({product: selectedProduct});
    }

    render() { 
    return (
        <div className="container">
        <div className='row'>
        <div className="col-lg-8 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {this.state.items.map((item) =>(
          <div key={item.id} className="col">
            <div className="card shadow-sm">
            <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src={item.imageUrl}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button onClick={()=>{this.handleClick(item.id)}} type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                   
                  </div>
                  <small className="text-body-secondary">${item.price}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    <div className="col-lg-4 order-lg-last">
        <h1>DETAILS</h1>
        <Child product={this.state.product}/>
    </div>
    </div>
</div>
);
    }
}

export default Parent;