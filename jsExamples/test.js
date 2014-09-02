var Mammal = function(){
	var legs = 'four';
	var getLegs = function(){
		return legs;
	}

	var getMammalProperties = function(){
		return 'mammal has'+getLegs()+'.';
	}

}

Mammal.prototype.running = function(){
	console.log('mammal also run');
	console.log(legs);
}

var cat = new Mammal();
