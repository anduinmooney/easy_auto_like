document.addEventListener('DOMContentLoaded', function() {
  var testPageButton = document.getElementById('testPage');
  testPageButton.addEventListener('click', function() {


    chrome.tabs.getSelected(null, function(tab) {
      document = document;

      var form = document.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';

      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'url';
      input.value = tab.url;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    });
  }, false);
}, false);
