
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-9R4Q3DF83'; // Reemplaza con tu ID de seguimiento

export const initializeAnalytics = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
