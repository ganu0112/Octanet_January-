

document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('toggleNav').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('showNav');
    });


    var currentDate = new Date().toLocaleDateString();
    document.getElementById('currentDate').innerText += ' ' + currentDate;


    document.getElementById('loadMore').addEventListener('click', function() {

        var firstArticle = document.querySelector('article');
        var newArticle = firstArticle.cloneNode(true);
        document.querySelector('main').appendChild(newArticle);
    });
});
