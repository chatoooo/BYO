import message from 'message';

let content = document.getElementById('content');
let timeout = () => {
    let el = document.createElement('p');
    el.innerHTML = message();
    content.appendChild(el);
    setTimeout(timeout, 2000);
};
timeout();

