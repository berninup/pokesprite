
const pokeApi = "https://pokeapi.co/api/v2/pokemon/bulbasaur";


function getMon(evt) {


    $.ajax(pokeApi).then(function(data){
        console.log(data)
    });


};