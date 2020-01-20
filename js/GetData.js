/*$(document).ready(function () {

  var HttpClient = function () {
      this.get = function (url, para, aCallback) {
          var anHttpRequest = new XMLHttpRequest();
          anHttpRequest.onreadystatechange = function () {
              if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                  aCallback(anHttpRequest.responseText);
          }

          if (para == null) {
              anHttpRequest.open("GET", url, true);
          }
          else {
              anHttpRequest.open("GET", url + "?" + para, true);
          }
          anHttpRequest.send(null);
      }
  }
  var listdata = {};
  const ip = '10.250.9.117';
  const port = '8080';
  const address = 'http://' + ip + ':' + port + '/';
  const list_url = address + 'list';
  var client = new HttpClient();
  client.get(list_url, null, function (res) {
              console.log(typeof(res));
              var a = JSON.parse(res)
              for (i in a)
              {
                console.log(a[i]);
              }
    });



});
*/
