const movies = [
    {id: 1, name: "Fast and Furious", cost: 5.99},
    {id: 2, name: "Fast and Furious 2", cost: 3.99},
    {id: 3, name: "Fast and Furious 4", cost: 4.99},
    {id: 4, name: "Shrek", cost: 12.99},
];

const cart = [];

function addToCart(id) {
    let selectedMovie = movies.find((movie) => movie.id === id);
    if (selectedMovie) {
        cart.push(selectedMovie);
    }
}

function printCheck() {
    cart.forEach((movie, index) => console.log(`№ ${index + 1} -- ${movie.name} -- $${movie.cost}`));
}

addToCart(2);
addToCart(4);
printCheck();