/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

const reactRouterDom = jest.genMockFromModule('react-router-dom');

reactRouterDom.useParams = () => ({});
reactRouterDom.useLocation = () => ({});
reactRouterDom.BrowserRouter = ({ children }) => (<div>{children}</div>);
reactRouterDom.Switch = ({ children }) => (<div>{children}</div>);
reactRouterDom.Route = ({ children }) => (<div>{children}</div>);

// eslint-disable-next-line no-undef
module.exports = reactRouterDom;
