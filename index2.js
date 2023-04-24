var objPeople = [
	{ // Object @ 0 index
		username: "ricardob",
		password: "123456"
	},
	{ // Object @ 1 index
		username: "codecadet",
		password: "codecadet"
	},
	{ // Object @ 2 index
		username: "codecadet1",
		password: "codecadet1"
	}
]



function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
                alert(username + " is logged in!!!")
                // stop the function if this is found to be true
			return location.href='index.html'
		}
	}
	alert("incorrect username or password")
}