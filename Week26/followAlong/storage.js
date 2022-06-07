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

	// Create a root reference
	var storage = firebase.storage();
	var storageRef = storage.ref();

	// get elements
	const file     = document.getElementById('file');
	const upload   = document.getElementById('upload');	
	const download = document.getElementById('download');		
	const status   = document.getElementById('status');	
	const image    = document.getElementById('image');

	// upload file
	upload.addEventListener('click', e => {
		// Create a file reference
		var ref = storageRef.child('globe');
		let photo = document.getElementById("file").files[0];

		// upload
		ref.put(photo).then(function(snapshot) {
			console.log('Uploaded a blob or file!');
			status.innerHTML = 'Uploaded blob or file!'
		});
	});

	// download file
	download.addEventListener('click', e => {
		// file reference
		var ref = storage.ref('globe');

		ref.getDownloadURL().then(function(url) {
			// insert url into an <img> tag to "download"
			image.src = url;
			status.innerHTML = 'Downloaded blob or file!'			

		}).catch(function(error){console.log(error)});


	});


}());