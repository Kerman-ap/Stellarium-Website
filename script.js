const element = document.getElementById('time');
      
setInterval(function () {
  const currentDate = new Date();
  element.innerText = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}, 16);