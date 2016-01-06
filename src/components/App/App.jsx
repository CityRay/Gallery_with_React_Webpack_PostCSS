import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import s from './App.scss';

class App extends Component {

  render() {
    return (
        <div>
            <h1 className="text-center">Gallery!</h1>
            <Gallery items={this.props.galleryItems} />;
        </div>
    );
  }

}

export default App;