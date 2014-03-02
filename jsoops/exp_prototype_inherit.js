//prototype inheritance

var parent = {
	get : function(){
		return this.val;
	},
	val : 100
};

var child = Object.create(parent);
child.val = 200;

var grandChild = Object.create(child);
grandChild.val = 300;


parent.get();
child.get();
grandChild.get();