var message = require('./message.js')
var content = document.getElementById('content');
var timeout = function() {
    var el = document.createElement('p');
    el.innerHTML = message();
    content.appendChild(el);
    setTimeout(timeout, 2000);
};
timeout();
 
if (module.hot) {
    module.hot.accept('./message.js', function() {
        message = require('./message.js');
    })
}
