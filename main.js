$('document').ready(function() {
  for(let i=1; i <= 151; i++){
    $.get('https://pokeapi.co/api/v2/pokemon/'+i+'/', function(pokemon){
      let nombre = pokemon.name;
      let list = '<h6>Type:</6> <ul>';
      for(let t=0;t<pokemon.types.length;t++){
        list += '<li>'+ pokemon.types[t].type.name +'</li>';
      }
      list += '</ul>'
      $('#poke-ball').append(
        `<div class="poke-algo">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i}.png"></img>
        <p>${nombre}</p>
        <p>${list}</p>
        </div>`
        );
    })
  };
});