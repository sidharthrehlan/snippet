var Matrix = function(){
		var defaultBoxBackground = '#ccc';
		var defaultGridBackground = '#eee';
		var highlightElement = 'dash';
		var record = {};
		var matrixDiv = document.getElementById('matrix');
		var activeColor = "";
	
		var that = this;

		this.createGridStr = function(row,col){
			var number = 1;
			var matrixHtml = '';
			for (var i = 1; i <= row; i++) {
				for (var j = 1; j <= col; j++) {
					matrixHtml += '<div data-number="'+number+'">'+number+'</div>'; 
					number++;
				};		
			};
		//	matrixDiv.innerHTML = matrixHtml;
			//this.matrixDiv.innerHtml = 'sidharth';
		};
		
		this.initEventBinding = function(){
			//bind element for grid
			var elementList = document.querySelectorAll('.row div');
			for(var i=0;i < elementList.length; i++){
				//mouseover
				elementList[i].addEventListener('mouseover',function(){
					this.style.border = "1px dotted #000";
					this.addClass('dotted');
				},false);

				elementList[i].addEventListener('mouseout',function(){
					this.style.border = " ";
					this.removeClass('dotted');
				},false);

				elementList[i].addEventListener('click',function(){
					if(!activeColor) alert('please select one color');
					else {
							this.style.backgroundColor = activeColor;
							
					}
				},false);

			}

			//bind element for radio button
			var radioList = document.querySelectorAll("input[type='radio'][name='color']");
			for(var i=0;i < radioList.length; i++){
				radioList[i].addEventListener('click',function(){
					//if(!activeColor) alert('please select one color');
					activeColor = this.value;
				},false);

			}


		};

		this.saveGridRecord = function(element,color){
			this.record.element = color;
		};

		this.resetGridRecord = function(){
			this.record = null;
		};

		this.randomizeGrid = function(){

		};


}


var matrix = new Matrix();


matrix.createGridStr(3,3);
matrix.initEventBinding();