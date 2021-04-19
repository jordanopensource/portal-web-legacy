import Vue from 'vue';
import moment from 'moment';

moment.updateLocale('ar', {
  months : [
      "كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز  ","آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
  ]
});
const dateTime = (dt, lang) => {
    return moment(dt).locale(lang).format("dddd, D MMMM YYYY, h:mm a");
};

const monthYear = (dt, lang) => {
    return moment(dt).locale(lang).format("MMM YYYY");
}

const fullDate = (dt, lang) => {
    return moment(dt).locale(lang).format("D MMMM YYYY");
}

const dayDate = (dt, lang) => {
  return moment(dt).locale(lang).format("dddd - D MMMM");
}

const dayFullDate = (dt, lang) => {
  return moment(dt).locale(lang).format("dddd, D MMM YYYY");
}

const time = (dt, lang) => {
  return moment(dt).locale(lang).format("H:mm A");
}

const day = (dt, lang) => {
  return moment(dt).locale(lang).format("dddd");
}

Vue.filter('monthYear', monthYear)
Vue.filter('dateTime', dateTime)
Vue.filter('fullDate', fullDate)
Vue.filter('dayDate', dayDate)
Vue.filter('dayFullDate', dayFullDate)
Vue.filter('time', time)
Vue.filter('day', day)
