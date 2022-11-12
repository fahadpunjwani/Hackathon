// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore,collection,addDoc,doc,setDoc,getDocs,query,where,getDoc,onSnapshot,orderBy,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage,ref,uploadBytes,getDownloadURL,} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2gxYL9qBF78HApSmN6OF10PIi106uzVI",
    authDomain: "attendence-e3af5.firebaseapp.com",
    databaseURL: "https://attendence-e3af5-default-rtdb.firebaseio.com",
    projectId: "attendence-e3af5",
    storageBucket: "attendence-e3af5.appspot.com",
    messagingSenderId: "384082023356",
    appId: "1:384082023356:web:66b01a8c568860828891b9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getdatabase(app);
  const auth = getAuth();

// // sign-in method:
// function signInFirebase(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// async function uploadImage(image) {
//   const storageREf = ref(storage, `images/${image.name}`); // storage --> images --> image jo upload kri hai
//   const snapshot = await uploadBytes(storageREf, image);
//   const url = await getDownloadURL(snapshot.ref);
//   return url;
// }

// function postStudentDetailsToDB(
//   s_name,
//   f_name,
//   r_num,
//   contact_num,
//   cnic_num,
//   imageURl,
//   st_course_name
// ) {
//   const userId = auth.currentUser.uid;
//   const userEmail = auth.currentUser.email;
//   return addDoc(collection(db, "students_log"), {
//     s_name,
//     f_name,
//     r_num,
//     contact_num,
//     cnic_num,
//     imageURl,
//     st_course_name,
//   });
// }

// function postClassDetailsToDB(c_time, c_schedule, t_name, s_name, course_name, b_number) {
//   return addDoc(collection(db, "class_log"), {
//     c_time,
//     c_schedule,
//     t_name,
//     s_name,
//     course_name,
//     b_number,
//   });
// }

// async function options() {
//   const querySnapshot = await getDocs(collection(db, "class_log"))
//   const ads = []
//   querySnapshot.forEach((doc) => {
//       ads.push({ id: doc.id, ...doc.data() });
//   })
//   return ads
// }

// function getRealtimeCard(roll_number) {
  
//   console.log(`chat firebase.`);
//     const q = query(collection(db,"student_log"),where(`${r_num}`, "==", roll_number))
//     onSnapshot(q, (querySnapshot) => {
//         const student_details = []
//         querySnapshot.forEach((doc) => {
//             student_details.push({ id: doc.id, ...doc.data() })
//         })
//         console.log(student_details);
//         // callback(student_details)
//     })
  
//   }

//   function getRealtimeAds(callback) {
//     //2
//     onSnapshot(collection(db, "ads"), (querySnapshot) => {
//         const ads = []
  
//         querySnapshot.forEach((doc) => {
//             ads.push({ id: doc.id, ...doc.data() })
//         });
//         //3
//         callback(ads)
//     })
//   }
signUp.addeventListner('click',(e) => {


    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;

Set(ref(database, 'user/' * user.uid),{
       email: email,
})
alert('user created')
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;

alert('errorMessage')
// ..
});

});
login.addeventListner('click', (e)=>{
var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;

const dt = new Date();
update(ref(database, 'user/' * user.uid),{
    last_login: dt,
})

 alert('User Log In!')
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert('errorMessage')

});

});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/firebase.User
const uid = user.uid;
// ...
} else {
// User is signed out
// ...
}
});

logout.addEventListner('click',(e)=>{

signOut(auth).then(() => {
// Sign-out successful.
alert('user logout');
}).catch((error) => {
// An error happened.
const errorCode = error.code;
const errorMessage = error.message;
alert('errorMessage');
});
});

export { signInFirebase, uploadImage, postClassDetailsToDB, postStudentDetailsToDB, options,getRealtimeCard};