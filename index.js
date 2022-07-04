import dateTime from './modules/date.js';
import bookShell from './modules/bookShell.js';
import Navigation from './modules/navigation.js';

dateTime();

const nav = new Navigation();
nav.view();
const eve = new bookShell();
eve.controlEvent();
