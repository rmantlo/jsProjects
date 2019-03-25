// API URLs = 
const peopleURL = 'https://swapi.co/api/people/';
const planetsURL = 'https://swapi.co/api/planets/';
const shipsURL = 'https://swapi.co/api/starships/';
const speciesURL = 'https://swapi.co/api/species/';
const movieURL = 'https://swapi.co/api/films/'
const baseURL = 'https://swapi.co/api/';

// fetch(baseURL)
//     .then(results => {
//         return results.json();
//     })
//     .then(json => {
//         console.log(json);
//     })

//******PEOPLE POP UP****** */
const peopleModal = document.querySelector('.peopleModal');
const pbtn = document.querySelector('.peoplebtn');
const pspan = document.getElementsByClassName("close")[0];

pbtn.addEventListener('click', function () {
    peopleModal.style.display = "block";

    fetch(peopleURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            //console.log(json);
            swpeople(json);
        })

})
pspan.addEventListener('click', function () {
    peopleModal.style.display = "none";
})

function swpeople(people) {
    console.log(people.results);
    let peeps = people.results;
    let inner = document.querySelector('.peopleContent');
    while (inner.firstChild) {
        inner.removeChild(inner.firstChild);
    }
    let h1 = document.createElement('h1');
    h1.innerText = 'Star Wars character names:';
    inner.appendChild(h1);
    for (x of peeps) {

        let p = document.createElement('p');
        p.innerText = x.name;
        inner.appendChild(p);
    }
}



/************PLANETS POP UP*********** */
let planetsModal = document.querySelector('.planetsModal');
let plbtn = document.querySelector('.planetsbtn');
let plspan = document.getElementsByClassName("close")[1];

plbtn.addEventListener('click', function () {
    planetsModal.style.display = "block";
    fetch(planetsURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            //console.log(json);
            swplanets(json);
        })
})

plspan.addEventListener('click', function () {
    planetsModal.style.display = "none";
})

function swplanets(planets) {

    console.log(planets.results);
    let plant = planets.results;
    let inner = document.querySelector('.planetsContent');
    while (inner.firstChild) {
        inner.removeChild(inner.firstChild);
    }
    let h1 = document.createElement('h1');
    h1.innerText = 'Star Wars Planet names:';
    inner.appendChild(h1);

    for (x of plant) {

        let p = document.createElement('p');
        p.innerText = x.name;
        inner.appendChild(p);
    }

}


/************STARSHIPS POP UP*********** */
let ssModal = document.querySelector('.starshipsModal');
let ssbtn = document.querySelector('.starshipsbtn');
let ssspan = document.getElementsByClassName("close")[2];

ssbtn.addEventListener('click', function () {
    ssModal.style.display = "block";
    fetch(shipsURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            //console.log(json);
            starships(json);
        })
})

ssspan.addEventListener('click', function () {
    ssModal.style.display = "none";
})

function starships(sships) {
    console.log(sships.results);
    let ships = sships.results;
    let inner = document.querySelector('.starshipContent');
    while (inner.firstChild) {
        inner.removeChild(inner.firstChild);
    }
    let h1 = document.createElement('h1');
    h1.innerText = 'Star Wars Starship names:';
    inner.appendChild(h1);
    for (x of ships) {
        let p = document.createElement('p');
        p.innerText = x.name;
        inner.appendChild(p);
    }

}

/************SPECIES POP UP*********** */
let speciesModal = document.querySelector('.speciesModal');
let spbtn = document.querySelector('.speciesbtn');
let spspan = document.getElementsByClassName("close")[3];

spbtn.addEventListener('click', function () {
    speciesModal.style.display = "block";
    fetch(speciesURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            //console.log(json);
            swspecies(json);
        })
})

spspan.addEventListener('click', function () {
    speciesModal.style.display = "none";
})
function swspecies(species) {
    let specie = species.results;
    let inner = document.querySelector('.speciesContent');
    while (inner.firstChild) {
        inner.removeChild(inner.firstChild);
    }
    let h1 = document.createElement('h1');
    h1.innerText = 'Star Wars Species names:';
    inner.appendChild(h1);
    for (x of specie) {
        let p = document.createElement('p');
        p.innerText = x.name;
        inner.appendChild(p);
    }

}


/**********drop down movie list********* */
function ddmovielist() {
    document.getElementById("myDropdown1").classList.toggle("show");
    fetch(movieURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            
            swmovies(json);
        })
}
let ddcontent = document.querySelector('.dropdown-content');
function swmovies(movies) {
    let movie = movies.results;
    while (ddcontent.firstChild) {
        ddcontent.removeChild(ddcontent.firstChild);
    }
    for (x of movie) {

        let a = document.createElement('a');
        a.innerText = x.title;
        ddcontent.appendChild(a);
    }
}


function ddcharlist() {
    document.getElementById("myDropdown2").classList.toggle("show");
    fetch(peopleURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            
            swcharlist(json);
        })
}


let ddcontent2 = document.querySelector('.dropdown-content2');
function swcharlist(char) {
    let chars = char.results;
    while (ddcontent2.firstChild) {
        ddcontent2.removeChild(ddcontent2.firstChild);
    }
    for (x of chars) {
        let a = document.createElement('a');
        a.innerText = x.name;
        ddcontent2.appendChild(a);
    }
}