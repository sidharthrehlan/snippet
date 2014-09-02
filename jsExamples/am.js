var Matrix = function(){
		var record = {};
		var matrixDiv = document.getElementById('matrix');
		var activeColor = "";
		var elementList = '';
		var rows,cols;
		var randomflag = false;
		var matrixObj = this;

		//Public function
		this.createGridStr = function(row,col){
			rows = row;
			cols = col;
			var number = 1;
			var matrixHtml = '';
			for (var i = 1; i <= row; i++) {
				matrixHtml += '<div class="row">'; 
				for (var j = 1; j <= col; j++) {
					matrixHtml += '<div data-number="'+number+'">'+number+'</div>'; 
					number++;
				};
				matrixHtml += '</div>'; 		
			};
			matrixDiv.innerHTML = matrixHtml;
			//this.matrixDiv.innerHtml = 'sidharth';
			elementList = document.querySelectorAll('.row div');
		};

		//private function
		var createRandomGrid = function(){
			var totalBlocks = rows*cols;
			var colorClass='';
			var blockNumberArr = [];
			var number = 0;
			for(var i = 1; i <= totalBlocks; i++){
				blockNumberArr.push(i);
			} 
			var randomArray = shuffle(blockNumberArr);

			
			var matrixHtml = '';
			for (var i = 1; i <= rows; i++) {
				matrixHtml += '<div class="row">'; 
				for (var j = 1; j <= cols; j++) {
					if(typeof record[randomArray[number]] != 'undefined'){
						colorClass = 'class="'+record[randomArray[number]]+'"';
					}  
					matrixHtml += '<div '+colorClass+' data-number="'+randomArray[number]+'">'+randomArray[number]+'</div>'; 
					number++;
					colorClass = '';
				}
				matrixHtml += '</div>'; 		
			}
			matrixDiv.innerHTML = matrixHtml;
			//this.matrixDiv.innerHtml = 'sidharth';
			elementList = document.querySelectorAll('.row div');	
		};

		//private function
		var shuffle = function(array){
			  var copy = [], n = array.length, i;

			  // While there remain elements to shuffle…
			  while (n) {

			    // Pick a remaining element…
			    i = Math.floor(Math.random() * array.length);

			    // If not already shuffled, move it to the new array.
			    if (i in array) {
			      copy.push(array[i]);
			      delete array[i];
			      n--;
			    }
			  }

			  return copy;
		};

		//private fn
		var initGridBlockEvent = function(){
			//bind element for grid
			

			for(var i=0;i < elementList.length; i++){
				//mouseover
				elementList[i].addEventListener('mouseover',function(event){
				//	this.style.border = "1px dotted #000";
					this.classList.add("dotted");
				},false);

				elementList[i].addEventListener('mouseout',function(event){
				//	this.style.border = " ";
					this.classList.remove('dotted');
				},false);

				elementList[i].addEventListener('click',function(event){
					if(!activeColor) alert('please select one color');
					else {
							if(typeof record[this.dataset.number] === 'undefined'){
								record[this.dataset.number] = activeColor; 
								this.classList.add(activeColor);		
							}
							else {
								alert('you have alread selected this block');
							}
							
					}
				},false);

			}
		};

		//private fn
		var initRadioEvent = function(){
			//bind element for radio button
			var radioList = document.querySelectorAll("input[type='radio'][name='color']");
			for(var i=0;i < radioList.length; i++){
				radioList[i].addEventListener('click',function(event){
					//if(!activeColor) alert('please select one color');
					activeColor = this.value;
				},false);

			}
		};

		//private
		var initButtonEventBinds = function(){
			//bind reset button
			document.getElementById('reset').addEventListener('click',function(){
				for(var i=0;i < elementList.length; i++){
					var className = record[elementList[i].dataset.number];
					elementList[i].classList.remove(className);
				}
				record = {};
				if(randomflag === true)
					matrixObj.createGridStr(rows,cols);
					initGridBlockEvent();
			},false);

			//bind randomize button
			document.getElementById('random').addEventListener('click',function(){
				createRandomGrid();
				initGridBlockEvent();
				randomflag = true;

			},false);
		};

		//public
		this.initEventBinding = function(){
			initGridBlockEvent();
			initRadioEvent();
			initButtonEventBinds();

		};


}


var matrix = new Matrix();
//create 3 by 3 grid
matrix.createGridStr(3,3);
matrix.initEventBinding();