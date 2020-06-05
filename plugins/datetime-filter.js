import Vue from 'vue';
import moment from 'moment';

const formatDateTime = dt => {
    return moment(dt).format("dddd, MMMM Do YYYY, h:mm a");
};

const date = dt => {
    return moment(dt).format("MMMM D, YYYY");
};

Vue.filter('dateTime', formatDateTime)
Vue.filter('date', date)