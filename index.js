/* eslint-disable import/extensions */

import dateTime from './modules/date.js';
import BookShell from './modules/bookShell.js';
import Navigation from './modules/navigation.js';

dateTime();

const nav = new Navigation();
nav.view();
const eve = new BookShell();
eve.controlEvent();
