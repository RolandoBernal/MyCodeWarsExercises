// Find if a number is a Prime Number or not. 

var primeNumbs = function(n) {
	var start = 2;
	while(n>2){
		if (n%start==0) {
			return false;
		} else {
			start++;
		}
	}
	return true;
}