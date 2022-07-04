import { DateTime } from './luxon.js';

const dateTime = () => {
  const time = DateTime.now();
  const date = document.querySelector('.year');
  date.innerHTML = `${time.day}-${time.month}-${time.year}, ${time.hour}:${time.minute}:${time.second}`;
};

export default dateTime;
