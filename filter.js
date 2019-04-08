let btn = document.getElementById('btn');
btn.addEventListener('click', filterMovies);

function filterMovies() {
    let filterInput = document.getElementById('filterInput');
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('ul');
    let li = ul.querySelectorAll('li.item');
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

