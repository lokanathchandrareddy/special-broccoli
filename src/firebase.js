import * as firebase from 'firebase'

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBWWWTiwVz0FC2RI64Fw66T6GXrcjqDA6Y",
            authDomain: "dairy-6c216.firebaseapp.com",
            databaseURL: "https://dairy-6c216.firebaseio.com",
            projectId: "dairy-6c216",
            storageBucket: "dairy-6c216.appspot.com",
            messagingSenderId: "39877062072"
        };
        firebase.initializeApp(config);

        export const database = firebase.database().ref('/notes');