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
			this.$cards = $(this.shuffle(cardsArray));
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
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 800);
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
				<a id="btnA" style="position: absolute; left: 75%; width:25%;\
				height: 25%; font-size: 150%; background-color: transparent;">\
				<i class="fa fa-eye" style="color: #D01D36";></i></a>\
				<img id="btnFront" style="float: center;" src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="images/majesticcarta.jpg"\
				alt="Majestic" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var card = [
		
	]
	var cards = [
		{
			name: "Egipto Flag",
			img: "images/memo2/aleman.jpg",
			id: 1
		},
		{
			name: "Egipto",
			img: "images/memo2/aleman2.jpg",
			id: 1
		},
		{
			name: "China Flag",
			img: "images/memo2/argentina.jpg",
			id: 2
		},
		{
			name: "China",
			img: "images/memo2/argentina2.jpg",
			id: 2
		}, 
		{
			name: "Brazil Flag",
			img: "images/memo2/brazil.jpg",
			id: 3
		},
		{
			name: "Brazil",
			img: "images/memo2/brazil2.jpg",
			id: 3
		},
		{
			name: "Turkey 1",
			img: "images/memo2/british.jpg",
			id: 4
		},
		{
			name: "Turkey",
			img: "images/memo2/british2.jpg",
			id: 4
		},
		{
			name: "The United kingdom Flag",
			img: "images/memo2/canada.jpg",
			id: 5
		},
		{
			name: "The United kingdom",
			img: "images/memo2/canada2.jpg",
			id: 5
		},
		{
			name: "Russia Flag",
			img: "images/memo2/china.jpg",
			id: 6
		},
		{
			name: "Russia",
			img:"images/memo2/china2.jpg",
			id: 6
		},
		{
			name: "Draw / Drew",
			img: "images/memo2/egypto.jpg",
			id: 7
		},
		{
			name: "Draw / Drew",
			img:"images/memo2/egypto2.jpg",
			id: 7
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/francia.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/francia2.jpg",
			id: 8
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/italia.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/italia2.jpg",
			id: 9
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/japon.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/japon2.jpg",
			id: 10
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/mexican.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/mexican2.jpg",
			id: 11
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/rusia.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/rusia2.jpg",
			id: 12
		},
		{
			name: "Drive / Drove",
			img: "images/memo2/spain.jpg",
			id: 13
		},
		{
			name: "Drive / Drove",
			img:"images/memo2/spain2.jpg",
			id: 13
		},
		{
			name: "Italy flag",
			img: "images/memo2/turquia.jpg",
			id: 14
		},
		{
			name: "Italy ",
			img:"images/memo2/turquia2.jpg",
			id: 14
		},
		{
			name: "Spain Flag",
			img: "images/memo2/usa.jpg",
			id: 14
		},
		{
			name: "Spain",
			img:"images/memo2/usa2.jpg",
			id: 14
		},
	];
    
	Memory.init(cards, card);


})();