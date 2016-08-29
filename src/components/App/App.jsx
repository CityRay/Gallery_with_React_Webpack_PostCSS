import React, { Component } from 'react';
import Gallery from '../Gallery/Gallery';
import s from './App.scss';

class App extends Component {

  render() {
    return (
        <div>
            <h1 className="text-center main-title">CityRay's Gallery</h1>
            <Gallery items={this.props.galleryItems} />;
            <h6 className="text-center main-title">Copyright © 2016 RayLin All Rights Reserved.</h6>
        </div>
    );
  }

}

export default App;
