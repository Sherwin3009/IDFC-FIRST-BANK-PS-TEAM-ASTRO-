  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAuth ,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyC18a0rsCPJ0K9H1LBex_I3qQSFRu5bnXI",
    authDomain: "database-for-project-869cb.firebaseapp.com",
    projectId: "database-for-project-869cb",
    storageBucket: "database-for-project-869cb.firebasestorage.app",
    messagingSenderId: "984444755176",
    appId: "1:984444755176:web:6565aee033dec34413fd5d",
    measurementId: "G-8D1VQ2XR47"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth  = getAuth(app);
  auth.langugeCode = 'en'
  const provider = new GoogleAuthProvider();

  const google-login = document.getElementById("Login");
  googleLogin.addEventListener("click",function(){

    signInWithPopup(auth, provider)
    .then((result) => {
      
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = " ";
      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });
  


  })
  function updateUserProfile(user)
  {
      const userName = user.displayName;
      const userEmail = user.email;
      const userProfilePicture = user.photoURL;

      document.getElementById("userName").textContent = userName;
      document.getElementById("userEmail").textContent = userEmail;
      document.getElementById("userProfilePicture").src = userProfilePicture;

    }
    updateUserProfile()
  
