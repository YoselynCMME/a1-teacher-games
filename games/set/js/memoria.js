// Memory Game
// © 2014 Nate Wiley
// License -- MIT
// best in full screen, works on phones/tablets (min height for game is 500px..) enjoy ;)
// Follow me on Codepen

(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(card, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.binding();
			this.paused = false;
     	this.guess = null;
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
					// CUANDO ES CORRECTO
					// let imgC = document.getElementById('btnFront');
					// imgC.style.width = `${2}%`;
					// // imgC.style.height = `${25}%`;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 800);
					console.log(`_.paused = true;`);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 2000);
		},

		showModal: function(){
            swal("Congratulations!", "Have answered correctly", "success");
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front">\
				<a id="btnA" href="#"><i class="fa fa-eye"></i></a>\
				<img id="btnFront" style="float: center;" src="'+ v.img +'"\
				alt="'+ v.name +'"/></div>\
				<div class="back"><img src="images/majesticcarta.jpg" alt="Majestic"/>\
				</div></div></div>';
			});
			return frag;
		}
	};

	var card = [
		
	]
	var cards = [
		{
			name: "Egipto Flag",
			img: "images/memo/egypt1.jpg",
			id: 1
		},
		{
			name: "Egipto",
			img: "images/memo/egypt.jpg",
			id: 1
		},
		{
			name: "China Flag",
			img: "images/memo/china1.jpg",
			id: 2
		},
		{
			name: "China",
			img: "images/memo/china.jpg",
			id: 2
		}, 
		{
			name: "Mexico Flag",
			img: "images/memo/mexico1.jpg",
			id: 3
		},
		{
			name: "Mexico",
			img: "images/memo/mexico.jpg",
			id: 3
		},
		{
			name: "Turkey 1",
			img: "images/memo/turkey1.jpg",
			id: 4
		},
		{
			name: "Turkey",
			img: "images/memo/turkey.jpg",
			id: 4
		},
		{
			name: "The United kingdom Flag",
			img: "images/memo/kingdom1.jpg",
			id: 5
		},
		{
			name: "The United kingdom",
			img: "images/memo/kingdom.jpg",
			id: 5
		},
		{
			name: "Russia Flag",
			img: "images/memo/russia1.jpg",
			id: 6
		},
		{
			name: "Russia",
			img:"images/memo/russia.jpg",
			id: 6
		},
		{
			name: "Draw / Drew",
			img: "images/memo/france1.jpg",
			id: 7
		},
		{
			name: "Draw / Drew",
			img:"images/memo/france.jpg",
			id: 7
		},
		{
			name: "Drive / Drove",
			img: "images/memo/brazil1.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img:"images/memo/brazil.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img: "images/memo/japan1.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img:"images/memo/japan.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img: "images/memo/canada1.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img:"images/memo/canada.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img: "images/memo/argentina1.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img:"images/memo/argentina.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img: "images/memo/germany1.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img:"images/memo/germany.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img: "images/memo/usa1.jpg",
			id: 13
		},
		{
			name: "Drive / Drove",
			img:"images/memo/usa.jpg",
			id: 13
		},
		{
			name: "Italy flag",
			img: "images/memo/italy1.jpg",
			id: 14
		},
		{
			name: "Italy ",
			img:"images/memo/italy.jpg",
			id: 14
		},
		{
			name: "Spain Flag",
			img: "images/memo/spain1.jpg",
			id: 14
		},
		{
			name: "Spain",
			img:"images/memo/spain.jpg",
			id: 14
		},
	];
    
	Memory.init(cards, card);


})();