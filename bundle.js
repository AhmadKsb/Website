(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



/*
function login(){

    var userEmail = document.getElementById("email").value;

    var userPass = document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {
        alert("SUCCESS");
    })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);
        });

}
*/


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {


        console.log(user);

//alert("TEST 1 " + user.uid);
        var favoritemovie = user.uid;
//alert("TEST 2 " + favoritemovie);
        var isUserAdmin;
        //alert(window.location.href);
        sessionStorage.setItem("favoriteMovie", favoritemovie);

        if (favoritemovie === "27t8hbCsGBMCBDXWyioPT5bqfkK2") {
            if ((!window.location.href.includes("admin.html")) && (!window.location.href.includes("reports.html"))) {
                isUserAdmin = "2";
                sessionStorage.setItem("isUAdmin", isUserAdmin);
                window.location.href = 'fullaccess.html';
            }
            } else {

        firebase.database().ref('user/' + favoritemovie).on('value', (snapshot) => {
            var data = snapshot.val();

            if (snapshot.exists()) {
                for (let key in data) {
                    if (data["Admin"] === 1) {
                        if ((!window.location.href.includes("admin.html")) && (!window.location.href.includes("reports.html"))) {
                            isUserAdmin = "1";
                            sessionStorage.setItem("isUAdmin", isUserAdmin);
                            window.location.href = 'admin.html';
                        }
                    } else {
                        isUserAdmin = "0";
                        sessionStorage.setItem("isUAdmin", isUserAdmin);
                        logout();
                        //window.location.href = 'index.html';
                    }
                }
            } else {
                isUserAdmin = "0";
                sessionStorage.setItem("isUAdmin", isUserAdmin);
                logout();
                //window.location.href = 'index.html';
            }
        })
    }



    } else {
        // No user is signed in.


    }
});

function logout(){

    firebase.auth().signOut().then(function() {
        window.location.href = 'index.html';
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });

}



},{}]},{},[1]);
