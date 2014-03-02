function MyClass(){
	//base function or class
}

MyClass.prototype.person = function(){
	//method person is method of myclass
}


//Inheritance example

function MySubClass(){
	MyClass.call(this);
}

MySubClass.prototype = Object.create(MyClass.prototype);
MySubClass.prototype.constructor = MySubClass;

MySubClass.prototype.method = function(){
	MySubClass.prototype.method.call(this);
}