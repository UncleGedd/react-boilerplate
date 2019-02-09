import * as React from "react";
import { render } from 'react-dom';
import './index.css';
import App from './App';

const mountingPoint = document.createElement('div');
mountingPoint.id = 'react-app';
document.body.appendChild(mountingPoint);
render(<App />, document.getElementById('react-app'));
