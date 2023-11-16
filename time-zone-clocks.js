

const losAngelesTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'America/Los_Angeles' };
const losAngelesDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' };

const ottawaTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'America/Toronto' };
const ottawaDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'America/Toronto' };

const nuukTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'America/Godthab' };
const nuukDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'America/Godthab' };

const billundTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Copenhagen' };
const billundDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'Europe/Copenhagen' };
const billundLunchOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Copenhagen' };

const utcTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'UTC' };
const utcDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'UTC' };

const dubaiTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Asia/Dubai'};
const dubaiDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'Asia/Dubai' };

const singaporeTimeOptions = { hour: '2-digit',minute: '2-digit', hourCycle: 'h23', timeZone: 'Asia/Singapore'};
const singaporeDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'Asia/Singapore' };

const sydneyTimeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Australia/Sydney' };
const sydneyDateOptions = { weekday: 'short', month: 'long', day: 'numeric', timeZone: 'Australia/Sydney'};
  

function updateClock() {
    document.getElementById('los-angeles-time').textContent = new Date().toLocaleString('en-US', losAngelesTimeOptions);
    document.getElementById("los-angeles-date").textContent = new Date().toLocaleString('en-US', losAngelesDateOptions);

    document.getElementById('ottawa-time').textContent = new Date().toLocaleString('en-US', ottawaTimeOptions);
    document.getElementById('ottawa-date').textContent = new Date().toLocaleString('en-US', ottawaDateOptions);

    document.getElementById('nuuk-time').textContent = new Date().toLocaleString('en-US', nuukTimeOptions);
    document.getElementById('nuuk-date').textContent = new Date().toLocaleString('en-US', nuukDateOptions);

    document.getElementById('billund-time').textContent = new Date().toLocaleString('en-US', billundTimeOptions);
    document.getElementById('billund-date').textContent = new Date().toLocaleString('en-US', billundDateOptions);

    document.getElementById('utc-time').textContent = new Date().toLocaleString('en-US', utcTimeOptions);
    document.getElementById('utc-date').textContent = new Date().toLocaleString('en-US', utcDateOptions);

    document.getElementById('dubai-time').textContent = new Date().toLocaleString('en-US', dubaiTimeOptions);
    document.getElementById('dubai-date').textContent = new Date().toLocaleString('en-US', dubaiDateOptions);

    document.getElementById('singapore-time').textContent = new Date().toLocaleString('en-US', singaporeTimeOptions);
    document.getElementById('singapore-date').textContent = new Date().toLocaleString('en-US', singaporeDateOptions);

    document.getElementById('sydney-time').textContent = new Date().toLocaleString('en-US', sydneyTimeOptions);
    document.getElementById('sydney-date').textContent = new Date().toLocaleString('en-US', sydneyDateOptions);

    if (new Date().toLocaleString('en-US', billundLunchOptions).localeCompare('12:00:00') == 0){
        triggerAlert(true);
    }
    if (new Date().toLocaleString('en-US', billundLunchOptions).localeCompare('12:05:00') == 0){
        triggerAlert(false);
    }
}

updateClock();
setInterval(updateClock, 1000);

function triggerAlert(bool) {
    if (bool) {
        document.getElementById('lunch-alert').classList.remove('hidden');
    } else {
        document.getElementById('lunch-alert').classList.add('hidden');
    }
}