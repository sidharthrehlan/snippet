var add = function(a,b){
	return a+b;
}

var myObj = {
	value : 0,
	increment : function(inc){
		this.value += typeof inc === 'number'? inc : 1;
		return this.value;
	}
}

double = function(){
	var that = this;
	var helper = function(){
		that.value = add(that.value,that.value);
		return that.value;
	};
	helper();
}

myObj.increment();
myObj.increment(2);
double();