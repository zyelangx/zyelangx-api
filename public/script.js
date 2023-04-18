// battery
navigator.getBattery()
    .then(function (battery) {

        // Get current battery level .
        var batteryLevel = battery.level * 100;

        a = document.getElementById("battery");

        if (batteryLevel === 100) {
            a.innerHTML = `<i class="mdi mdi-battery"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 10) {
            a.innerHTML = `<i class="mdi mdi-battery-alert"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 20) {
            a.innerHTML = `<i class="mdi mdi-battery-10"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 30) {
            a.innerHTML = `<i class="mdi mdi-battery-20"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 40) {
            a.innerHTML = `<i class="mdi mdi-battery-30"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 50) {
            a.innerHTML = `<i class="mdi mdi-battery-40"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 60) {
            a.innerHTML = `<i class="mdi mdi-battery-50"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 70) {
            a.innerHTML = `<i class="mdi mdi-battery-60"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 80) {
            a.innerHTML = `<i class="mdi mdi-battery-70"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 90) {
            a.innerHTML = `<i class="mdi mdi-battery-80"></i> ${batteryLevel}%`;
        } else if (batteryLevel < 99) {
            a.innerHTML = `<i class="mdi mdi-battery-90"></i> ${batteryLevel}%`;
        }
    })
    .catch(function (e) {
        console.error(e);
    });

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('jam').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function getVisitor() {
    var xhr = new XMLHttpRequest()
    var url = `https://api.countapi.xyz/hit/gilangzyehan.com/visits`
    xhr.onloadend = function () {
        data = JSON.parse(this.responseText)
        document.getElementById("visitor").textContent = data.value
    }
    xhr.open("GET", url, true)
    xhr.send()
}
function getRequests() {
    var xhr = new XMLHttpRequest()
    var url = `https://api.countapi.xyz/get/gilangzyehan.com/request`
    xhr.onloadend = function () {
        data = JSON.parse(this.responseText)
        document.getElementById("request").textContent = data.value
    }
    xhr.open("GET", url, true)
    xhr.send()
}
function getipne() {
    var xhr = new XMLHttpRequest();
    var url = 'https://ipapi.co/json/';
    xhr.onloadend = function () {
        data = JSON.parse(this.responseText);
        document.getElementById("ipne").textContent = data.ip
        document.getElementById("ipid").textContent = data.country_name
        document.getElementById("ipid1").textContent = data.city
        document.getElementById("ipid2").textContent = data.region
        document.getElementById("ipid3").textContent = data.org
    };
    xhr.open("GET", url, true);
    xhr.send();
}
getipne()
getRequests()
getVisitor()