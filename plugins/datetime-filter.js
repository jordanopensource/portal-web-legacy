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

Vue.filter('monthYear', monthYear)
Vue.filter('dateTime', formatDateTime)
Vue.filter('fullDate', fullDate)