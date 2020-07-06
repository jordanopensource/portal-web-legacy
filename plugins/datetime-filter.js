import Vue from 'vue';
import moment from 'moment';

const formatDateTime = dt => {
    return moment(dt).format("dddd, MMMM Do YYYY, h:mm a");
};

const monthYear = dt => {
    return moment(dt).format("MMM YYYY");
}

const fullDate = dt => {
    return moment(dt).format("MMM D, YYYY");
}

const dayDate = dt => {
  return moment(dt).format("dddd - D MMMM");
}

const dayFullDate = dt => {
  return moment(dt).format("dddd, MMM D YYYY");
}

const time = dt => {
  return moment(dt).format("H:mm A");
}

Vue.filter('monthYear', monthYear)
Vue.filter('dateTime', formatDateTime)
Vue.filter('fullDate', fullDate)
Vue.filter('dayDate', dayDate)
Vue.filter('dayFullDate', dayFullDate)
Vue.filter('time', time)
