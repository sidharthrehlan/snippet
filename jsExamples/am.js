var Matrix = function(){
		this.defaultBoxBackground = '#ccc';
		this.defaultGridBackground = '#eee';
		this.highlightElement = 'dash';
		this.record = {};
		this.matrixDiv = document.getElementById('matrix');
	
		
		this.createGridStr = function(row,col){
			var number = 1;
			var matrixHtml = '';
			for (var i = 1; i <= row; i++) {
				for (var j = 1; j <= col; j++) {
					matrixHtml += '<div data-number="'+number+'">'+number+'</div>'; 
					number++;
				};		
			};
			//this.matrixDiv.innerHtml = matrixHtml;
			//this.matrixDiv.innerHtml = 'sidharth';
		};
		this.initEventBinding = function(){
			document.querySelectorAll('.row div').addEventListener('mouseOver',function(){
				this.style.border('1px solid #000');
			},false);
			

			//el.addEventListener('mouseClick')


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