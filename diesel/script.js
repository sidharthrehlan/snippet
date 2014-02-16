
prefv3=clean|treated&prefn1=dgaLook&prefn2=displayOnlyOnSale&prefn3=dgaWashType&prefv2=false&prefv1=bootcut|carrot|straight

var prefn = {
	'1' : 'dglook',
	'2' : 'color'
};


var prefv = {
	'dglook' : ['bootcut','slip','curve'],
	'color' : ['red','green']
}



use case ;
1) create url from array and obj
2) create array and obj from url
3) update array and obj
Example 1
==========

var prefn = {
		data : [ 
				{
					'name' : 'dglook',
					'value' : ['red','green'],
					'key'   : 1
				},
	 	 		{
					'name' : 'dglook',
					'value' : ['red','grgreeneen'],
					'key'   : 2
				}
			  ]
		};


Example 2
============
var prefn = {
		data : 
			"dglook" : {
					'value' : ['red','green'],
					'key'   : 1
				},
		 	"dglook" :	{
					'value' : ['red','grgreeneen'],
					'key'   : 2
				}
			  ]
		};




var prefv = {
	'dglook' : ['bootcut','slip','curve'],
	'color' : ['red','green']
}





