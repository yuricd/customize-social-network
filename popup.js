function click() {
  var selector = document.getElementById('options');
  var value = selector[selector.selectedIndex].value;

  switch(value) {

    case 'dark':
      var styles = {
        topBG: '#666',
        bodyBG: '#DDD'
      }
      break;

    case 'red':
      var styles = {
        topBG: '#FF0000',
        bodyBG: '#f9e4e0'
      }
      break;

    case 'pink':
      var styles = {
        topBG: '#F28CB0',
        bodyBG: '#fcf2f5'
      }
      break;

    case 'yellow':
      var styles = {
        topBG: '#edc731',
        bodyBG: '#fff9e2'
      }
      break;

    default: 
      var styles = {
        topBG: '#4267b2',
        bodyBG: '#e9ebee'
      }
  }
  
  chrome.tabs.executeScript(null, {
    code: "\
      document.body.style.backgroundColor = '" + styles.bodyBG + "';\
      var topBar = document.getElementsByClassName('_2t-a _26aw _5rmj _50ti _2s1y')[0]; \
      topBar.style.backgroundColor = '" + styles.topBG + "'; \
      topBar.style.border = 'none'; \
      \
      var searchBar = document.getElementsByClassName('_585-')[0]; \
      searchBar.style.border = 'none'; \
      \
      var searchBtn = document.getElementsByClassName('_42ft _4jy0 _4w98 _4jy3 _517h _51sy _4w97')[0]; \
      searchBtn.style.background = '" + styles.topBG + "'; \
      "
  });
  window.close();
}

document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('selection');
  form.addEventListener('submit', click)
})