import React, { Component } from 'react';
import axios from 'axios';
import Detail from './detailComponent';

class Main extends Component {

    constructor()
    {
        super();

        this.state = { 
            items: [],
            episodes: [],
            selection: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount()
    {
        axios.get("https://rickandmortyapi.com/api/character")
        .then((res) => this.setState({items: res.data.results}))
    }
    
    handleClick(arr, selected)
    {
        const dataEpisodes = [];

        const promises = arr.map((api)=>
            axios.get(api).then((res) => res.data.name)
        );

        Promise.all(promises).then((dataEpisode) => {
            this.setState({episodes : dataEpisode})
        })

        // const selected = this.state.items.find((item) => item.id === itemID);
        this.setState({selection: selected});
        console.log(selected);
    }

    render() {
        //TESTER vvv
        console.log(this.state.episodes); 
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
                src={item.image}
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            />
              <div className="card-body">
                <p className="card-text">{item.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button onClick={()=>{this.handleClick(item.episode, item)}} type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                   
                  </div>
                  <small className="text-body-secondary">{item.species}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    <div className="col-lg-4 order-lg-last">
        <Detail selection={this.state.selection} episodes={this.state.episodes}/>
    </div>
    </div>
</div>
);
    }
}

export default Main;