import React, { Component } from 'react';
import axios from 'axios';

class Detail extends Component {
    state = {  } 
    render() { 
        
        return (
            <>
                <h1>Episodes with {this.props.selection.name}</h1>
                {this.props.episodes.map((episode)=>{
                    return (
                        <h6>{episode}</h6>
                    );
                })}
            </>
        );
    }
}
 
export default Detail;