function idCard() {
    
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var age = parseInt(document.getElementById('age').value);
    var phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    
    
    
    var numberArray = [];
    numberArray.push(age)
    numberArray.push(phoneNumber)
    console.log(numberArray);

    for (var i=0; i <= numberArray.length; i++) {
        if (numberArray[i] < 100) {
            console.log("Age:" + numberArray[i] + "age");
        }
        else if (numberArray[i] > 100) {
            console.log("Phone Number:" + numberArray[i] + "phoneNumber");
        }
    }

    document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
    document.getElementById('postAddress').innerHTML = address;
    document.getElementById('postAge').innerHTML = "Age:" + age;
    document.getElementById('postPhoneNumber').innerHTML = "Phone Number:" + phoneNumber;
}