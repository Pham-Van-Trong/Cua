const firebaseConfig = {
    apiKey: "AIzaSyC_ivkFbhYC_FXvPKQWgBgrBCK-VBHVJ3s",
    authDomain: "wificua.firebaseapp.com",
    databaseURL: "https://wificua-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wificua",
    storageBucket: "wificua.appspot.com",
    messagingSenderId: "1053184482406",
    appId: "1:1053184482406:web:03e6d201eef5dfa91e21a7"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var btnOn = document.getElementById("Len");
var btnOff = document.getElementById("Xuong");

btnOn.onclick = function() {
    database.ref("/ESP8266/LEN").update({
        "LEN": "ON"
    })
    alert("Mở cửa thành công");
}
btnOff.onclick = function() {
    database.ref("/ESP8266/XUONG").update({
        "XUONG": "ON"
    })
    alert("Đóng cửa thành công")
}