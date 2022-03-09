// https://ghibliapi.herokuapp.com/people
let app = document.querySelector('#all')

// let logo = document.createElement('img')
// logo.src = 'logo.png'
// app.appendChild(logo)

let container = document.createElement('div');
container.setAttribute('class', 'container')
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/people')
    .then((res) => {
        return res.json()
    }).then((data) => {
        data.forEach(people => {
            let card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)

            let title = document.createElement('h1')
            title.textContent = people.name
            card.appendChild(title)

            let description = document.createElement('h2')
            description.textContent = people.gender
            card.appendChild(description)

            let url = document.createElement('h3')
            url.textContent = 'movie to watch';
            card.appendChild(url)

            let films_for = document.createElement('h4')
            films_for.textContent = people.films
            card.appendChild(films_for)


            let gender = document.createElement('h5')
            gender.textContent = people.gender
            card.appendChild(gender)



        });
    }).catch(error => console.log(error))





// {
//     id: "267649ac-fb1b-11eb-9a03-0242ac130003",
//     name: "Haku",
//     gender: "Male",
//     age: "12",
//     eye_color: "Green",
//     hair_color: "Green",
//     films: [
//     "https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c"
//     ],
//     species: "https://ghibliapi.herokuapp.com/species/e2cfaa78-fb19-11eb-9a03-0242ac130003",
//     url: "https://ghibliapi.herokuapp.com/people/267649ac-fb1b-11eb-9a03-0242ac130003"
//     },