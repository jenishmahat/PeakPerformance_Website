document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const monthYear = document.getElementById("calendar-month");
    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");
    const eventDetails = document.getElementById("eventDetails");

    const events = {
      "2025-04-20": "5K Club Run",
      "2025-04-25": "Yoga Day",
      "2025-05-02": "Strength Challenge",
      "2025-05-10": "Nutrition Workshop",
      "2025-05-17": "Zumba Fiesta"
    };

    let currentDate = new Date(2025, 3); 

    function generateCalendar(date) {
      calendar.innerHTML = ""; 
      eventDetails.innerHTML = ""; 

      const year = date.getFullYear();
      const month = date.getMonth();

      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      monthYear.textContent = `${monthNames[month]} ${year}`;

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      days.forEach(day => {
        const div = document.createElement("div");
        div.classList.add("day-name");
        div.textContent = day;
        calendar.appendChild(div);
      });

      const firstDay = new Date(year, month, 1).getDay();
      for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(document.createElement("div"));
      }

      const totalDays = new Date(year, month + 1, 0).getDate();
      const today = new Date();

      for (let day = 1; day <= totalDays; day++) {
        const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const div = document.createElement("div");
        div.textContent = day;

        const isToday =
          today.getDate() === day &&
          today.getMonth() === month &&
          today.getFullYear() === year;

        if (isToday) {
          div.classList.add("today");
        }

        
        if (events[fullDate]) {
          div.classList.add("event-day");
          div.title = events[fullDate];
          div.addEventListener("click", () => {
            eventDetails.innerHTML = `
              <strong>${events[fullDate]}</strong> on ${monthNames[month]} ${day}, ${year}
            `;
          });
        }

        calendar.appendChild(div);
      }
    }

    // Event Listeners
    prevBtn.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar(currentDate);
    });

    nextBtn.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar(currentDate);
    });

    
    generateCalendar(currentDate);
});




document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});