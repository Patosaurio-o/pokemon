$('document').ready(function() {
  for(let i=1; i <= 151; i++){
    $('#poke-ball').append('<div class="poke-algo"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+i+'.png"></img><p>'+i+'</p></div>');

  };
});