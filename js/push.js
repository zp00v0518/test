const button = document.getElementById('notifications');
const button_2 = document.getElementById('notifications_two')
let count = 1;

button_2.addEventListener('click', function(e) {
  requestPush()
    .then(result => {
      getServiceWorker().then(sw => {
        setTimeout(() => {
          showNotification(sw);
        }, count * 1000);
      });
    })
    .catch(result => {
      alert(result);
    });
});

button.addEventListener('click', function(e) {
  requestPush()
    .then(result => {
      getServiceWorker().then(sw => {
        setTimeout(() => {
          showNotification(sw);
        }, count * 1000);
      });
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
  count += 10;
  const options = {
    body: 'Нажми кнопку еще раз',
    icon: 'zmei.png',
    vibrate: [250, 100, 250, 100, 250],
  };
  sw.showNotification('Привет', options);
}

function getServiceWorker() {
  return new Promise((resolve, reject) => {
    navigator.serviceWorker
      .getRegistration()
      .then(reg => {
        return resolve(reg);
      })
      .catch(err => reject(err));
  });
}
