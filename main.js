


// escuchar

arrayRespuesta = ["¡Que onda!", "Buenas tardes", "Buenos días", "Buenas noches", "¡Qué tal!", "Hello, bitch!", "Baby one more time...",
"Elemental mi querido Watson", "May the force be with you", "Que el poder te protega", "¡Oye como va!", "The winter is coming", "Good save the Queen",
"I want to ride my bicicle", "The King of the North", "Valar Morghulis", "Valar Dohaeris", "¿Dónde quedo la cadenita?", "Why so sad?", "¿Me estás habland a mi?",
]

$(document).keypress(function(e){

	if(e.which == 13){
	console.log("enter");

		var input=$("#input").val();
		console.log(input);
		$("input").val("");
		$("div.pregunta").replaceWith("<h1>Hey, bitch</h1>");


	}

}); 


// function clearInputs(data){
// $("#addRunner :input").each(function(){
// $(this).val('');
// });