/* eslint-disable import/extensions */

import dateTime from './modules/date.js';
import controlEvent from './modules/bookShell.js';
import Navigation from './modules/navigation.js';

dateTime();

const nav = new Navigation();
nav.view();
controlEvent();
