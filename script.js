
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
$form = $('form');
$input = $('input[type = "text"]');

$form.on("submit", getMon);

function getMon(evt) {
    evt.preventDefault();
    let userInput = $input.val().toLowerCase();

    $('div.spriteContainer').replaceWith('<div class="spriteContainer"></div>')

    $.ajax(pokeApi + userInput).then(function (data) {
        console.log(data);

        spriteURL = JSON.stringify(data.sprites.front_default);

        console.log(spriteURL);
        $('div.spriteContainer').replaceWith(`

        <div class = "spriteContainer">
            <div>
                <img src = ${spriteURL}>
            </div>
        </div>

        `);
        $('form')[0].reset();
    });


};

