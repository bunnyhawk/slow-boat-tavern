const imageFeed = () => {
  const apiUrl = 'https://api.instagram.com/v1/users/slowboattavern/media/recent/';
  const toReadyStateDescription = function (state) {
      switch (state) {
      case 0:
          return 'UNSENT';
      case 1:
          return 'OPENED';
      case 2:
          return 'HEADERS_RECEIVED';
      case 3:
          return 'LOADING';
      case 4:
          return 'DONE';
      default:
          return '';
      }
  };

  let oReq = new XMLHttpRequest();
  let results = document.getElementById('imageFeed');

  oReq.onload = function (e) {
      var xhr = e.target;
      console.log('Inside the onload event');
      if (xhr.responseType === 'json') {
          results.innerHTML = xhr.response.message;
      } else {
          results.innerHTML = JSON.parse(xhr.responseText).message;
      }
  };
  oReq.onreadystatechange = function () {
      console.log('Inside the onreadystatechange event with readyState: ' + toReadyStateDescription(oReq.readyState));
  };
  oReq.open('GET', apiUrl, true);
  oReq.responseType = 'json';
  oReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  oReq.setRequestHeader('x-vanillaAjaxWithoutjQuery-version', '1.0');
  oReq.send();
};

export { imageFeed };