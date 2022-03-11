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
            container.appendChild(card);

            let title = document.createElement('h1')
            title.textContent = people.name
            card.appendChild(title);

            let description = document.createElement('h2')
            description.textContent = people.gender
            card.appendChild(description);

            let url = document.createElement('h3')
            url.textContent = 'movie to watch';
            card.appendChild(url);

            let gender = document.createElement('h5')
            gender.textContent = people.age
            card.appendChild(gender);

            let films_for = document.createElement('a')
            films_for.setAttribute('href', 'people.films')
            films_for.textContent = 'click here'
            card.appendChild(films_for);





        });
    }).catch(error => console.log(error))