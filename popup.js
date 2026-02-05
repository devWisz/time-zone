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

