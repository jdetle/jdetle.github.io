var current = 0;
var examples = [
    'lazy-jquery.html',
    'virtual-tables.html',
    'nteract.html',
    'notificiation-buttons.html',
    'chat-app.html',
    'web-workers.html',
    'service-workers.html',
    'spotify-cardio.html',
];
function replaceCurrent() {
    var el = document.createElement('div');
    el.className = 'slide-contents'
    el.innerHTML = document.createElement('div').innerHTML = current;
    document.getElementsByClassName("carousel-slide")[0].replaceChild(el,
        document.getElementsByClassName("carousel-slide")[0].children[0]
    );
}
document.getElementById('carousel-btn-right').addEventListener("click", () => {
    current++;
    current = current % examples.length;
    replaceCurrent();
})
document.getElementById('carousel-btn-left').addEventListener("click", () => {
    current--;
    current = current % examples.length;
    if (current < 0) {
        current += examples.length;
    }
    replaceCurrent();
})

setInterval(() => { 
    current++;
    current = current % examples.length;
    replaceCurrent()
}, 1000)
