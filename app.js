const select = document.getElementById("select");
const date = document.getElementById("date");

const fajr = document.getElementById("Fajr");
const sunrise = document.getElementById("Sunrise");
const dhuhr = document.getElementById("Dhuhr");
const asr = document.getElementById("Asr");
const maghrib = document.getElementById("Maghrib");
const isha = document.getElementById("Isha");

let city;
select.addEventListener("change", (e) => {
  city = e.target.value;
  getUser(city);
});

async function getUser(city = "Damascus") {
  try {
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=SY&city=${city}&method=4`);

    date.innerHTML = `${response.data.data.date.hijri.weekday.ar} ${response.data.data.date.readable}`;

    fajr.innerHTML = response.data.data.timings.Fajr;
    sunrise.innerHTML = response.data.data.timings.Sunrise;
    dhuhr.innerHTML = response.data.data.timings.Dhuhr;
    asr.innerHTML = response.data.data.timings.Asr;
    maghrib.innerHTML = response.data.data.timings.Maghrib;
    isha.innerHTML = response.data.data.timings.Isha;

    // let d = new Date(); // for now
    // let hour = d.getHours()
    // let minute = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
    // let currentTime = +`${hour}${minute}`

    // fajrTime = +response.data.data.timings.Fajr.replace(':','')
    // sunriseTime = +response.data.data.timings.Sunrise.replace(':','')
    // dhuhrTime = +response.data.data.timings.Dhuhr.replace(':','')
    // asrTime = +response.data.data.timings.Asr.replace(':','')
    // maghribTime = +response.data.data.timings.Maghrib.replace(':','')
    // ishaTime = +response.data.data.timings.Isha.replace(':','')


    // if (currentTime > fajrTime && currentTime < sunriseTime) {
    //   sunrise.style.backgroundColor = "#eee"
    // }
    // if (currentTime > sunriseTime && currentTime < dhuhrTime) {
    //   dhuhr.style.backgroundColor = "#eee"
    // }
    // if (currentTime > dhuhrTime && currentTime < asrTime) {
    //   asr.style.backgroundColor = "#eee"
    // }
    // if (currentTime > asrTime && currentTime < maghribTime) {
    //   maghrib.style.backgroundColor = "#eee"
    // }
    // if (currentTime > maghribTime && currentTime < ishaTime) {
    //   isha.style.backgroundColor = "#eee"
    // }
    // if (currentTime > ishaTime && currentTime < fajrTime) {
    //   fajr.style.backgroundColor = "#eee"
    // }


  } catch (error) {
    console.error(error);
  }
}

getUser();
