function isSameType(value1, value2) {
	if(typeof(value1)===typeof(value2)){
		return true;
	}else{
		return false;
	}
}

// do not change the code below.
let value1 = Number(prompt("Enter Start of the Range."));
let value2 = Number(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));
