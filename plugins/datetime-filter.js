import Vue from 'vue';
import moment from 'moment';

function lang2locale(lang) {
  return lang === 'ar'
    ? 'ar-JO'
    : 'en-UK'
}

const fullDate = (dt, lang) => {
  // 25 May 2021
  const options = { 
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const dayDate = (dt, lang) => {
  // Tuesday - 5 May
  const weekday =  moment(dt).locale(lang).format("dddd");
  const dayMonth = new Intl.DateTimeFormat(lang2locale(lang), { day: 'numeric', month: 'long'}).format(new Date(dt))
  return `${weekday} - ${dayMonth}`
}

const dayFullDate = (dt, lang) => {
  // Tuesday, 25 May 2021
  const options = { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const dayFullDateAmman = (dt, lang) => {
  return moment(dt).utcOffset("+03:00").locale(lang).format("dddd, D MMMM Y");
}

const monthYearDate = (dt, lang) => {
  // May 2021
  const options = { 
    month: 'long',
    year: 'numeric',
  }
  return new Intl.DateTimeFormat(lang2locale(lang), options).format(new Date(dt))
}

const monthDate = (dt, lang) => {
  // May
  return new Intl.DateTimeFormat(lang2locale(lang), { month: 'long' }).format(new Date(dt))
}

const time = (dt, lang) => {
  return moment(dt).locale(lang).format("H:mm A");
}

const timeAmman = (dt, lang) => {
  return moment(dt).utcOffset("+03:00").locale(lang).format("H:mm A");
}

const day = (dt, lang) => {
  return moment(dt).locale(lang).format("dddd");
}

const timezone = (dt, lang) => {
  return moment(dt).locale(lang).format("Z");
}

Vue.filter('fullDate', fullDate)
Vue.filter('dayDate', dayDate)
Vue.filter('dayFullDate', dayFullDate)
Vue.filter('dayFullDateAmman', dayFullDateAmman)
Vue.filter('monthYearDate', monthYearDate)
Vue.filter('monthDate', monthDate)
Vue.filter('time', time)
Vue.filter('timeAmman', timeAmman)
Vue.filter('day', day)
Vue.filter('timezone', timezone)
