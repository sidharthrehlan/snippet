//(function(){
	var url = "http://dev01-shop-diesel.demandware.net/s/DieselUS/mens/denim/#prefv3=clean|treated&prefn1=dgaLook&prefn2=displayOnlyOnSale&prefn3=dgaWashType&prefv2=false&prefv1=bootcut|carrot|straight";
	var hash = url.substr(url.indexOf('#')+1);
	var hashObj = {};


	function hashUrlToHashObj(hash)
	{
		// find prefn	
		var hashArr = hash.split('&');
		for(var i=0;i<hashArr.length;i++){
			if(hashArr[i].indexOf('prefn')==0){
				var equalToPos = hashArr[i].indexOf('=');
				var prefIndex = hashArr[i].substring(5,equalToPos);
				var prefName =  hashArr[i].substr(equalToPos+1);
				
				//var jsonObj = {"key" : prefIndex};
					hashObj[prefName] = {"key" : prefIndex};
				} 
		}

		// find prefv	
		for(var i=0;i<hashArr.length;i++){
			if(hashArr[i].indexOf('prefv')==0){
				var equalToPos = hashArr[i].indexOf('=');
				var prefIndex = hashArr[i].substring(5,equalToPos);
				var prefvString =  hashArr[i].substr(equalToPos+1);
				var prefvArr = prefvString.split("|");
				for(var obj in hashObj){
					
					if(hashObj[obj]["key"] == prefIndex){
						hashObj[obj]["value"] = prefvArr;
				}
			} 
		}
		}
		
	}

	function hashObjToHashUrl(){
		var hashData = "";
		var i = 1;
		for(var obj in hashObj){
			var prefName = obj;
			var prefValues = hashObj[obj]["value"].join("|");
			if(i > 1)
				hashData += "&";

			hashData = hashData+"prefn"+i+"="+prefName+"&prefv"+i+"="+prefValues;
			i++;

		}
		return hashData;
	}


	function addToHashObj(prefn,prefv){
		if(hashObj[prefn])
		{
			hashObj[prefn]["value"].push(prefv);
		}
		else {
			var jsonObj = {
				"value" : new Array(prefv)
			};
			hashObj[prefn] = jsonObj;	
		}
		
		
	}

	function removeFromHashObj(prefn,prefv){
		//if(hashObj.data[prefn][prefv].length )
		hashObj[prefn]["value"].pop(prefv);
		if(hashObj[prefn]["value"].length == 0)
			delete(hashObj[prefn]);

	}

	function resetHashObj(prefn){
		delete(hashObj[prefn]);
	}

	hashUrlToHashObj(hash);
	addToHashObj('sidharth','rehlan');
	addToHashObj('dgaLook','red');


	console.log(hashObj);

//}());
console.log(hashObjToHashUrl());



