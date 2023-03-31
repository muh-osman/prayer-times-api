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
    const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity?country=SY&city=${city}&method=4`);

    date.innerHTML = `${response.data.data.date.hijri.weekday.ar} ${response.data.data.date.readable}`;

    fajr.innerHTML = response.data.data.timings.Fajr;
    sunrise.innerHTML = response.data.data.timings.Sunrise;
    dhuhr.innerHTML = response.data.data.timings.Dhuhr;
    asr.innerHTML = response.data.data.timings.Asr;
    maghrib.innerHTML = response.data.data.timings.Maghrib;
    isha.innerHTML = response.data.data.timings.Isha;

  } catch (error) {
    console.error(error);
  }
}

getUser();
