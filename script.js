
const pokeApi = "https://pokeapi.co/api/v2/pokemon/";
$form = $('form');
$input = $('input[type = "text"]');

$form.on("submit", getMon);

function getMon(evt) {
    evt.preventDefault();
    let userInput = $input.val().toLowerCase();

    $.ajax(pokeApi + userInput).then(function (data){
        console.log(data);
    });
    

};

