var button = document.getElementById('notifications');

button.addEventListener('click', function(e) {
  requestPush()
    .then(result => {
      getServiceWorker().then(sw => {
        showNotification(sw);
        setTimeout(() => {
          showNotification(sw);
        }, 10000);
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
    body: 'world',
    icon: 'zmei.png',
    vibrate: [100, 50, 100],
  };
  sw.showNotification('hello', options);
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
