import Vue from 'vue';

const stringToArray = s => {
    let splitString = s.split(',')
    let trimmedArray = splitString.map( t => t.trim())
    return trimmedArray
};

const stringToSlug = s => {
  const slug = s.replace(/[^\w\u0621-\u064A\s]/gi, '').replace(/\s/g, '-')
  return slug
};


Vue.filter('stringToArray', stringToArray)
Vue.filter('stringToSlug', stringToSlug)
