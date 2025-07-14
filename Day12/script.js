const events = {
    3: [
        { title: "Team Meeting", time: "10:00 AM", type: "work" },
        { title: "Lunch with Sameer", time: "12:30 PM", type: "personal" }
    ],
    7: [
        { title: "Doctor Appointment", time: "2:00 PM", type: "health" }
    ],
    12: [
        { title: "Project Deadline", time: "11:59 PM", type: "work" },
        { title: "Birthday Party", time: "7:00 PM", type: "personal" }
    ],
    15: [
        { title: "Gym Session", time: "6:00 AM", type: "fitness" },
        { title: "Grocery Shopping", time: "4:00 PM", type: "personal" }
    ],
    18: [
        { title: "Movie Night", time: "8:00 PM", type: "entertainment" }
    ],
    22: [
        { title: "Client Call", time: "9:00 AM", type: "work" },
        { title: "Yoga Class", time: "6:30 PM", type: "fitness" }
    ],
    25: [
        { title: "Family Dinner", time: "6:00 PM", type: "family" }
    ],
    28: [
        { title: "Book Club", time: "3:00 PM", type: "personal" },
        { title: "Car Service", time: "10:00 AM", type: "maintenance" }
    ],
    30: [
        { title: "Weekend Trip", time: "All Day", type: "travel" }
    ]
};

// Get event type color
function getEventColor(type) {
    const colors = {
        work: 'bg-blue-100 text-blue-800',
        personal: 'bg-green-100 text-green-800',
        health: 'bg-red-100 text-red-800',
        fitness: 'bg-purple-100 text-purple-800',
        entertainment: 'bg-yellow-100 text-yellow-800',
        family: 'bg-pink-100 text-pink-800',
        maintenance: 'bg-gray-100 text-gray-800',
        travel: 'bg-indigo-100 text-indigo-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
}

// Update selected date highlighting
function updateSelectedDate(selectedCell) {
    const dateCells = document.querySelectorAll('#dates > div');
    dateCells.forEach((cell, index) => {
        if (index < 7) return; 

        cell.classList.remove('bg-orange-500');
    });

    selectedCell.classList.add('bg-orange-500');
}

// Add click functionality to dates
function addClickFunctionality() {
    const dateCells = document.querySelectorAll('#dates > div');
    dateCells.forEach((cell, index) => {
        if (index < 7) return;

        const dateText = cell.textContent.trim();
        const date = parseInt(dateText);

        const isCurrentMonth = cell.classList.contains('text-white');

        // Add data attributes
        cell.setAttribute('data-date', date);
        cell.setAttribute('data-current-month', isCurrentMonth);

        cell.addEventListener('click', () => {
            if (isCurrentMonth) {
                showEvents(date);
            } else {
                const eventsPanel = document.getElementById('events');
                eventsPanel.innerHTML = `
                          <h2 class="text-xl font-bold mb-4">Events for ${date}th</h2>
                          <div class="bg-orange-200 bg-opacity-10 rounded-lg p-4 text-center">
                            <p class="text-black">No events scheduled for this day</p>
                          </div>
                      `;
            }
            updateSelectedDate(cell);
        });
    });
}

// Show events for selected date
function showEvents(date) {
    const eventsPanel = document.getElementById('events');
    const dayEvents = events[date] || [];

    let eventsHTML = `
                <h2 class="text-xl font-bold mb-4">Events for ${date}th</h2>
              `;

    if (dayEvents.length > 0) {
        eventsHTML += `<div class="space-y-3">`;
        dayEvents.forEach(event => {
            eventsHTML += `
                    <div class="bg-orange-200 bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                      <h3 class="font-semibold text-black">${event.title}</h3>
                      <p class="text-black text-sm">${event.time}</p>
                      <span class="inline-block mt-2 px-2 py-1 text-xs rounded-full ${getEventColor(event.type).replace('bg-', 'bg-opacity-20 bg-').replace('text-', 'text-black border border-')}">${event.type}</span>
                    </div>
                  `;
        });
        eventsHTML += `</div>`;
    } else {
        eventsHTML += `
                  <div class="bg-orange-200 bg-opacity-10 rounded-lg p-4 text-center">
                    <p class="text-black">No events scheduled for this day</p>
                  </div>
                `;
    }

    eventsPanel.innerHTML = eventsHTML;
}

// Initialize calendar
document.addEventListener('DOMContentLoaded', function () {
    addClickFunctionality();

    showEvents(15);
    const dateCells = document.querySelectorAll('#dates > div');
    dateCells.forEach((cell, index) => {
        if (index < 7) return; // Skip day headers
        const dateText = cell.textContent.trim();
        const date = parseInt(dateText);
        const isCurrentMonth = cell.classList.contains('text-white');

        if (date === 15 && isCurrentMonth) {
            cell.classList.add('bg-orange-500');
        }
    });
});