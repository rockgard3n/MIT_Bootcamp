

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

	// get elements
	const email    = document.getElementById('email');
	const password = document.getElementById('password');
	const login    = document.getElementById('login');
	const signup   = document.getElementById('signup');
    const googlelogin   = document.getElementById('googlelogin');
    const loggedInStatus = document.getElementById("loggedInStatus");
	const logout   = document.getElementById('logout');

	// login
	login.addEventListener('click', e => {
		const auth  = firebase.auth();		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => console.log(e.message));
	});

	// signup
	signup.addEventListener('click', e => {
		// TODO: check for real email
		const auth  = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
		promise.catch(e => console.log(e.message));
	});

    // Google Login
    googlelogin.addEventListener("click", (e) => {
        console.log("google clicked");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
            login.style.display = "none";
            signup.style.display = "none";
            email.style.display = "none";
            password.style.display = "none";
            googlelogin.style.display = "none";
            logout.style.display = "none";
          })
          .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
          });
      });

    // logout
	logout.addEventListener('click', e => {
		firebase.auth().signOut();
	});

    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			logout.style.display = 'inline';
			login.style.display  = 'none';
			signup.style.display = 'none';
		}
		else{
			console.log('User is not logged in');
			logout.style.display = 'none';			
			login.style.display  = 'inline';
			signup.style.display = 'inline';
		}
	});

}());