const extract = (object, requiredKey) => {
	let urls = [];
	return(extractions(object, requiredKey, urls));
};

const extractions = (object, requiredKey, urls)  => {
    for(let key in object){ 
       if(key == requiredKey && typeof object[key] != "object"){
           urls.push(object[key]);
	   } else if (typeof object[key] == "object"){
		   extractions(object[key], requiredKey, urls);
	   }
	}
	return urls;
} 


module.exports = {extract};