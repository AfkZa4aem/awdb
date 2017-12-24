import React, { Component } from 'react';
import './Pet.css';

class Pet extends Component { 
  render() {				
    return (
      <div className="card">
        <h2 className="name">Moxie</h2>
        <img src=" https://images.unsplash.com/photo-1482066490729-6f26115b60dc?auto=format&fit=crop&w=1002&q=80 " alt="Moxie " />
        <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>			
        {/* <HobbyList /> */}
      </div>
    );
  }
}

export default Pet;