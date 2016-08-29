import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

let options = {
  galleryItems: [
    { id: 1, title: "Camera", subtitle: "5th Jan - 12th Jan",
        image: "http://pic.pimg.tw/slimkamera/1411836619-868632423.jpg", liked: true },
    { id: 2, title: "MacBook", subtitle: "13th Feb - 5th Aug",
        image: "http://goo.gl/Yqi3lV" },
    { id: 3, title: "Thinking", subtitle: "13th Dec - 14th Dec",
        image: "https://cloud.githubusercontent.com/assets/4352286/11920433/f0ab6a28-a76f-11e5-8ee9-525dc22ca8a8.jpg" },
    { id: 4, title: "Animals", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/animals" },
    { id: 5, title: "Nature", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/nature", liked: true },
    { id: 6, title: "Tech", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/tech" },
    { id: 7, title: "Architecture", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/arch" },
    { id: 8, title: "TechII", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/tech/sepia" },
    { id: 9, title: "People", subtitle: "13th Dec - 14th Dec",
        image: "https://placeimg.com/320/240/people" },

  ]
};

let element = React.createElement(App, options);
render(element, document.querySelector('.container'));
