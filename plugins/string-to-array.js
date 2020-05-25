import Vue from 'vue';

const stringToArray = s => {
    let splitString = s.split(',')
    let trimmedArray = splitString.map( t => t.trim())
    return trimmedArray
};

Vue.filter('stringToArray', stringToArray)