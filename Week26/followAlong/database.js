(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBSZxvhWXREpJAztOz13MFfBJv4o9yuzTM",
        authDomain: "courso-3866c.firebaseapp.com",
        projectId: "courso-3866c",
        storageBucket: "courso-3866c.appspot.com",
        messagingSenderId: "991633700711",
        appId: "1:991633700711:web:d92750233db4ea6f5b21c2"
      };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

	// get elements
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});


}());