

// Variables 
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
const $form = $('form');
const $input = $('input[type = "text"]');

// Event listeners
$form.on("submit", getMon);

// functions

function getMon(evt) {
    evt.preventDefault();
    let userInput = $input.val().toLowerCase();
    $('form')[0].reset();
    $('div.spriteContainer').replaceWith('<div class="spriteContainer"></div>')

    $.ajax(pokeApi + userInput).then(function (data) {
        render(data);

    }, function (error) {
        alert("Uh oh. Something went wrong.")

    });
};

function render(pokeData) {
    spriteURL = JSON.stringify(pokeData.sprites.front_default);
    spriteShinyURL = JSON.stringify(pokeData.sprites.front_shiny)
    console.log(spriteURL);
    $('div.spriteContainer').replaceWith(`

        <div class = "spriteContainer">
            <div>
                <img src = ${spriteURL}>
            </div>
            <div>
                <img src = ${spriteShinyURL}>
            </div>
        </div>

        `);

};
