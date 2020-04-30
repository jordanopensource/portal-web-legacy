import Vue from 'vue';
import moment from 'moment';

const formatDateTime = dt => {
    return moment(dt).format("dddd, MMMM Do YYYY, h:mm a");
};

Vue.filter('dateTime', formatDateTime)