var button = document.getElementById("notifications");

button.addEventListener('click', function(e) {
  requestPush().then(result =>{
    showNotification();
  }).catch(result =>{
    alert(result)
  })
});

function requestPush(){
  return new Promise((resolve, reject) => {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            resolve(result);
        } else {
          reject(result)
        }
    });
  })

}

function showNotification() {
  const options = {
    body:  "world", 
    icon: "zmei.png",
    vibrate: [100, 50, 100]
  }
  var notif = new Notification("Hello", options);
}