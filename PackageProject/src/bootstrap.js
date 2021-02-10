import moment from 'moment';

const birthday = moment('1995-04-21', 'YYYY-MM-DD');

console.log(birthday.fromNow());
console.log(birthday.format('dddd'));