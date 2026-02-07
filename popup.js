const localTimeEl = document.getElementById("localTime");
const otherTimeEl = document.getElementById("otherTime");
const diffEl = document.getElementById("difference");
const select = document.getElementById("zoneSelect");

const zones = [
  { name: "Local Time", zone: Intl.DateTimeFormat().resolvedOptions().timeZone },
  { name: "UTC", zone: "UTC" },
  { name: "GMT", zone: "Etc/GMT" },
  { name: "Nepal", zone: "Asia/Kathmandu" },
  { name: "India", zone: "Asia/Kolkata" },
  { name: "UK", zone: "Europe/London" },
  { name: "USA (New York)", zone: "America/New_York" },
  { name: "Japan", zone: "Asia/Tokyo" },
  { name: "Australia (Sydney)", zone: "Australia/Sydney" }
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
    hour12: true
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


}

