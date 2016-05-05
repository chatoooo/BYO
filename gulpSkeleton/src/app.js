var message = require('message');
var content = document.getElementById('content');
var timeout = function() {
    var el = document.createElement('p');
    el.innerHTML = message();
    content.appendChild(el);
    setTimeout(timeout, 2000);
};
timeout();
 
if (module.hot) {
    module.hot.accept('message', function() {
        message = require('message');
    })
}
