const firebaseConfig = {
    apiKey: "AIzaSyDdMN9u1EyFP4IAAnJcE9x2_NrrSAIfWbE",
    authDomain: "red-cross-b5aee.firebaseapp.com",
    databaseURL: "https://red-cross-b5aee.firebaseio.com",
    projectId: "red-cross-b5aee",
    storageBucket: "red-cross-b5aee.appspot.com",
    messagingSenderId: "696619930164",
    appId: "1:696619930164:web:92a9abe28a27ab4d5ab061",
    measurementId: "G-HC3YY31Y2G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    //
    //     var favoritemovie = user.uid;
    //     var isUserAdmin;
    //     sessionStorage.setItem("favoriteMovie", favoritemovie);
    //
    //     if (favoritemovie === "27t8hbCsGBMCBDXWyioPT5bqfkK2") {
    //         if ((!window.location.href.includes("fullaccess.html"))) {
    //             isUserAdmin = "2";
    //             sessionStorage.setItem("isUAdmin", isUserAdmin);
    //             window.location.href = 'fullaccess.html';
    //         }
    //         } else {
    //
    //     firebase.database().ref('user/' + favoritemovie).on('value', (snapshot) => {
    //         var data = snapshot.val();
    //
    //         if (snapshot.exists()) {
    //             for (let key in data) {
    //                 if (data["Admin"] === 1) {
    //                     if ((!window.location.href.includes("admin.html")) && (!window.location.href.includes("reports.html"))) {
    //                         isUserAdmin = "1";
    //                         sessionStorage.setItem("isUAdmin", isUserAdmin);
    //                         window.location.href = 'admin.html';
    //                     }
    //                 } else {
    //                     isUserAdmin = "0";
    //                     sessionStorage.setItem("isUAdmin", isUserAdmin);
    //                     logout();
    //                 }
    //             }
    //         } else {
    //             isUserAdmin = "0";
    //             sessionStorage.setItem("isUAdmin", isUserAdmin);
    //             logout();
    //         }
    //     })
    // }
    //
    //
    //
    // } else {
    //     // No user is signed in.
    //
    //
    // }
//});

function logout(){
    
    
    
    firebase.auth().signOut().then(function() {
        localStorage.clear();
        window.location.href = 'index.html';
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

}


