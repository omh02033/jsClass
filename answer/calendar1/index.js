const cal = document.getElementById('calendar');
const date = document.getElementById('date');

let year = new Date().getFullYear();
let month = new Date().getMonth() + 1;
const today = new Date(year, month - 1, new Date().getDate()).getTime();

date.innerText = `${year}. ${month}`;

const setCalendar = () => {
  while (cal.firstChild) {
    cal.removeChild(cal.lastChild);
  }
  const firstDay = new Date(year, month - 1, 1).getDay();
  let lastDate = 31;
  if (month === 2) {
    if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) lastDate = 29;
    else lastDate = 28;
  }
  else if (month <= 7 && month % 2 === 0 || month > 8 && month % 2 === 1) lastDate = 30;
  for (let i = 0; i < (firstDay + lastDate > 7 * 5 ? 6 : 5); i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const idx = i * 7 + j + 1;
      const td = document.createElement('td');
      if (idx > firstDay && idx - firstDay <= lastDate) {
        if (new Date(year, month - 1, idx - firstDay).getTime() === today) {
          const span = document.createElement('div');
          span.className = 'today';
          span.innerText = idx - firstDay;
          td.appendChild(span);
        } else {
          td.innerText = idx - firstDay;
        }
      }
      tr.appendChild(td);
    }
    cal.appendChild(tr);
  }
}

setCalendar();


const nextMonth = () => {
  month += 1;
  if (month > 12) {
    year += 1;
    month = 1;
  }
  date.innerText = `${year}. ${month}`;
  setCalendar();
};
const prevMonth = () => {
  month -= 1;
  if (month < 1) {
    year -= 1;
    month = 12;
  }
  date.innerText = `${year}. ${month}`
  setCalendar()
}
