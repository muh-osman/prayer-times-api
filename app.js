const select = document.getElementById("select");
const date = document.getElementById("date");

const fajr = document.getElementById("Fajr");
const sunrise = document.getElementById("Sunrise");
const dhuhr = document.getElementById("Dhuhr");
const asr = document.getElementById("Asr");
const maghrib = document.getElementById("Maghrib");
const isha = document.getElementById("Isha");

// Refetch the date when change the city.
let city;
select.addEventListener("change", (e) => {
  city = e.target.value;
  fetchBasedCity(city);
});

async function fetchBasedCity(city = "Damascus") {
  try {
    // Fetch
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=SY&city=${city}&method=4`);
    // Show Date under city name
    let baseDateData = response.data.data.date
    date.innerHTML = `${baseDateData.hijri.weekday.ar} ${baseDateData.readable}`;

    // push data time to HTML page
    let baseTimeData = response.data.data.timings
    fajr.innerHTML = baseTimeData.Fajr;
    sunrise.innerHTML = baseTimeData.Sunrise;
    dhuhr.innerHTML = baseTimeData.Dhuhr;
    asr.innerHTML = baseTimeData.Asr;
    maghrib.innerHTML = baseTimeData.Maghrib;
    isha.innerHTML = baseTimeData.Isha;

    // for now
    let d = new Date();
    let minute = d.getMinutes()
    let hour = minute.toString().length < 2 ? d.getHours() *= 10 : d.getHours()


    let currentTime = +`${hour}${minute}`
    
    fajrTime = +baseTimeData.Fajr.replace(':','')
    sunriseTime = +baseTimeData.Sunrise.replace(':','')
    dhuhrTime = +baseTimeData.Dhuhr.replace(':','')
    asrTime = +baseTimeData.Asr.replace(':','')
    maghribTime = +baseTimeData.Maghrib.replace(':','')
    ishaTime = +baseTimeData.Isha.replace(':','')


    if (currentTime > fajrTime && currentTime < sunriseTime) {
      sunrise.classList.add("blink")
    }
    if (currentTime > sunriseTime && currentTime < dhuhrTime) {
      dhuhr.classList.add("blink")
    }
    if (currentTime > dhuhrTime && currentTime < asrTime) {
      asr.classList.add("blink")
    }
    if (currentTime > asrTime && currentTime < maghribTime) {
      maghrib.classList.add("blink")
    }
    if (currentTime > maghribTime && currentTime < ishaTime) {
      isha.classList.add("blink")
    }
    if (currentTime > ishaTime || currentTime < fajrTime) {
      fajr.classList.add("blink")
    }


  } catch (error) {
    console.error(error);
  }
}

fetchBasedCity();
