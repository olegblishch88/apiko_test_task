const getMovies = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cabcfda31baa4aeff4580efa267df575')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.results.map(movie => {
                output += `<li class="item"><a href="#" onClick="showDetails(${movie.id})">${movie.title}</a></li>`;
            })
            document.getElementById('ul').innerHTML = output;
        })
        .catch(err => console.log(err));
}
getMovies();

const showDetails = id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cabcfda31baa4aeff4580efa267df575`)
        .then(res => res.json())
        .then(data => {
            let output = `
            <img src='https://image.tmdb.org/t/p/w500${data.poster_path}'/>
            <h2>${data.title}</h2>
            <p>${data.overview}</p>
            <h3>Recommendations</h3>
            <ul id="recommendations"></ul>`;
            document.getElementById('ul').innerHTML = output;
            showRecommendedMovies();
        })
}

const showRecommendedMovies = id => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cabcfda31baa4aeff4580efa267df575`)
        .then(res => res.json())
        .then(data => {
            let recomendedMovies = data.results.slice(0, 3);
            let output = '';
            recomendedMovies.map(movie => {
                output += `
            <li><a href="">${movie.title}</a></li>`
            })
            document.getElementById('recommendations').innerHTML = output;
        })
}
