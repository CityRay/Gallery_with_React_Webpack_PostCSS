import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

let options = {
  galleryItems: [
    { id: 1, title: "Camera", subtitle: "5th Jan - 12th Jan", image: "http://pic.pimg.tw/slimkamera/1411836619-868632423.jpg", liked: true },
    { id: 2, title: "MacBook", subtitle: "13th Feb - 5th Aug", image: "http://goo.gl/Yqi3lV" },
    { id: 3, title: "Thinking", subtitle: "13th Dec - 14th Dec", image: "https://cloud.githubusercontent.com/assets/4352286/11920433/f0ab6a28-a76f-11e5-8ee9-525dc22ca8a8.jpg" },
    { id: 4, title: "Apple Wacth", subtitle: "13th Dec - 14th Dec", image: "http://www.thehoopsnews.com/wp-content/uploads/2015/10/apple-watch-1.jpg" }
  ]
};

let element = React.createElement(App, options);
render(element, document.querySelector('.container'));