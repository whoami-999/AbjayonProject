const maximum =function(a, b, c){
	return Math.max(Math.max(a, b), c);
}

const minimum = function(a, b, c){
	return Math.min(Math.min(a, b), c);
}

const minmumOfTriplet=function(arr1, arr2, arr3){
    let len = arr1.length;
	arr1.sort(function(a, b){
	    return a - b
	    
	});
	arr2.sort(function(a, b){
	    return a - b
	    
	});
	arr3.sort(function(a, b){
	    return a - b
	    
	});

	let min_re = 0, mid_re = 0, max_re = 0;
	let i = 0, j = 0, k = 0;
	let dif = 1000;
	
	while (i < len && j < len && k < len){
		let sum = arr1[i] + arr2[j] + arr3[k];
		let max = maximum(arr1[i], arr2[j], arr3[k]);
		let min = minimum(arr1[i], arr2[j], arr3[k]);
		
		if (min == arr1[i]){
		    i+=1;
		}else if (min == arr2[j]){
		    j+=1;
		}else{
		    k +=1;
		}
		
		if (dif > (max - min)){
			dif = max - min;
			max_re = max;
			mid_re = sum - (max + min);
			min_re = min;
		}
	}
	console.log(max_re + ", " + mid_re + ", " + min_re);
}

let arr1 = [15, 12, 18, 9];
let arr2 = [10, 17, 13, 8];
let arr3 = [14, 16, 11, 5];

let arr4 = [5, 2, 8]
let arr5 = [10, 7, 12]
let arr6 = [9, 14, 6]



minmumOfTriplet(arr1, arr2, arr3);
minmumOfTriplet(arr4,arr5,arr6)
