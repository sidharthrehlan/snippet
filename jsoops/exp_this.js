function fn(){
	return this.val;
}


var object1 = {
	get : fn,
	val : 42
}

var object2 = {
	get : fn,
	val : 3.14
}

object1.get();
object2.get();
fn();

fn().call(object2); // calling function with object2 this

