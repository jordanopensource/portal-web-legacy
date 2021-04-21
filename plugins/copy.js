import Vue from 'vue';

const copyString = str => {
  try {
    var temp = document.createElement("input");
    temp.setAttribute('readonly', '');
    temp.style = {
      position: 'absolute',
      left: '-9999px'
    };
    temp.value = str
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    return true
  } catch (e) {
    return false
  }
};

Vue.filter('copyString', copyString)