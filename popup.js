const localTimeEl = document.getElementById("localTime");
const otherTimeEl = document.getElementById("otherTime");
const diffEl = document.getElementById("difference");
const select = document.getElementById("zoneSelect");
const formatToggle = document.getElementById("formatToggle");
const viewZonesBtn = document.getElementById("viewZonesBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");

let is12Hour = true;
let modalUpdateInterval;

const zones = [
  { name: "Local Time", zone: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { name: "UTC", zone: "UTC" },
  { name: "GMT", zone: "Etc/GMT" },
  { name: "Nepal", zone: "Asia/Kathmandu" },
  { name: "India", zone: "Asia/Kolkata" },
  { name: "China", zone: "Asia/Shanghai" },
  { name: "UK", zone: "Europe/London" },
  { name: "France", zone: "Europe/Paris" },
  { name: "Germany", zone: "Europe/Berlin" },
  { name: "Russia (Moscow)", zone: "Europe/Moscow" },
  { name: "UAE (Dubai)", zone: "Asia/Dubai" },
  { name: "Singapore", zone: "Asia/Singapore" },
  { name: "Japan", zone: "Asia/Tokyo" },
  { name: "South Korea", zone: "Asia/Seoul" },
  { name: "Australia (Sydney)", zone: "Australia/Sydney" },
  { name: "New Zealand", zone: "Pacific/Auckland" },
  { name: "USA (New York)", zone: "America/New_York" },
  { name: "USA (Los Angeles)", zone: "America/Los_Angeles" },
  { name: "USA (Chicago)", zone: "America/Chicago" },
  { name: "Canada (Toronto)", zone: "America/Toronto" },
  { name: "Brazil (São Paulo)", zone: "America/Sao_Paulo" },
  { name: "Argentina", zone: "America/Argentina/Buenos_Aires" },
  { name: "Mexico", zone: "America/Mexico_City" },
  { name: "South Africa", zone: "Africa/Johannesburg" },
  { name: "Egypt", zone: "Africa/Cairo" }
];

zones.forEach(z => {
  const option = document.createElement("option");
  option.value = z.zone;
  option.textContent = z.name;
  select.appendChild(option);
});

function formatTime(zone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: is12Hour
  }).format(new Date());
}

function getHourDifference(zone) {
  const now = new Date();
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const local = new Date(now.toLocaleString("en-US", { timeZone: localZone }));
  const target = new Date(now.toLocaleString("en-US", { timeZone: zone }));

  return (target - local) / (1000 * 60 * 60);
}

function update() {
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  localTimeEl.textContent = formatTime(localZone);

  const selectedZone = select.value;
  otherTimeEl.textContent = formatTime(selectedZone);

  const diff = getHourDifference(selectedZone);
  const sign = diff >= 0 ? "+" : "";
  diffEl.textContent = `Difference: ${sign}${diff.toFixed(1)} hrs`;
}

function populateModal() {
  modalBody.innerHTML = '';
  
  zones.forEach(zone => {
    const zoneItem = document.createElement('div');
    zoneItem.className = 'zone-item';
    
    const zoneName = document.createElement('div');
    zoneName.className = 'zone-name';
    zoneName.textContent = zone.name;
    
    const zoneTime = document.createElement('div');
    zoneTime.className = 'zone-time';
    zoneTime.textContent = formatTime(zone.zone);
    
    const zoneDiff = document.createElement('div');
    zoneDiff.className = 'zone-diff';
    const diff = getHourDifference(zone.zone);
    const sign = diff >= 0 ? "+" : "";
    zoneDiff.textContent = diff === 0 ? "Your time zone" : `${sign}${diff.toFixed(1)} hrs`;
    
    zoneItem.appendChild(zoneName);
    zoneItem.appendChild(zoneTime);
    zoneItem.appendChild(zoneDiff);
    
    modalBody.appendChild(zoneItem);
  });
}

function updateModalTimes() {
  const zoneItems = modalBody.querySelectorAll('.zone-item');
  zones.forEach((zone, index) => {
    if (zoneItems[index]) {
      const timeEl = zoneItems[index].querySelector('.zone-time');
      timeEl.textContent = formatTime(zone.zone);
    }
  });
}

function openModal() {
  populateModal();
  modalOverlay.classList.add('active');
  modalUpdateInterval = setInterval(updateModalTimes, 1000);
}

function closeModalHandler() {
  modalOverlay.classList.remove('active');
  clearInterval(modalUpdateInterval);
}

viewZonesBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModalHandler();
  }
});

formatToggle.addEventListener("click", () => {
  is12Hour = !is12Hour;
  formatToggle.textContent = is12Hour 
    ? "Switch to 24-Hour Format" 
    : "Switch to 12-Hour Format";
  update();
  if (modalOverlay.classList.contains('active')) {
    populateModal();
  }
});

select.addEventListener("change", update);
setInterval(update, 1000);
update(); 