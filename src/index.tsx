import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';

import './assets/css/style.css';
import './assets/css/custom.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/aos/aos.css';
import 'leaflet/dist/leaflet.css';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);