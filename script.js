function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

  document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

// Timetable Data
const schedule = [
  { time: "7:00 AM", place: "Main Campus" },
  { time: "7:15 AM", place: "North Hall" },
  { time: "7:30 AM", place: "Student Center" },
  { time: "8:00 AM", place: "Main Campus" },
  { time: "9:00 AM", place: "Main Campus" }
];

// Load timetable
const list = document.getElementById("scheduleList");

schedule.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `⏰ ${item.time} - 📍 ${item.place}`;
  li.style.animationDelay = `${index * 0.1}s`;
  list.appendChild(li);
});

// Route button active toggle
document.querySelectorAll(".route-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".route-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});