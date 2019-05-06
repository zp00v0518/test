var button = document.getElementById('notifications');

button.addEventListener('click', function(e) {
  requestPush()
    .then(result => {
      getServiceWorker().then(sw => {
        showNotification(sw);
        // setTimeout(() => {
        //   showNotification(sw);
        // }, 10000);
      })
    })
    .catch(result => {
      alert(result);
    });
});

function requestPush() {
  return new Promise((resolve, reject) => {
    Notification.requestPermission().then(function(result) {
      if (result === 'granted') {
        return resolve(result);
      } else {
        return reject(result);
      }
    });
  });
}

function showNotification(sw) {
  const options = {
    body: 'Нажми кнопку еще раз',
    icon: 'zmei.png',
    vibrate: [250, 100, 250, 100, 250],
  };
  sw.showNotification('Привет', options);
}

function getServiceWorker() {
  return new Promise((resolve, reject) => {
    navigator.serviceWorker.getRegistration()
      .then(reg => {
        return resolve(reg);
      })
      .catch(err => reject(err));
  });
}
