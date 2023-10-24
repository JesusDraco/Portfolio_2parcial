document.addEventListener('DOMContentLoaded', function () {
    const appointmentForm = document.getElementById('appointmentForm');
    const scheduleTable = document.getElementById('scheduleTable');

    appointmentForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const date = document.getElementById('date').value;
        const timeStart = document.getElementById('time_start').value;
        const timeEnd = document.getElementById('time_end').value;
        const activity = document.getElementById('activity').value;
        const place = document.getElementById('place').value;
        const type = document.getElementById('type').value;
        const notes = document.getElementById('notes').value;
        const flag = document.getElementById('flag').value;
        const freeBusy = document.querySelector('input[name="free_busy"]:checked').value;

        const newRow = scheduleTable.insertRow(1); 
        newRow.innerHTML = `
          <td>${date}</td>
          <td>${timeStart}</td>
          <td>${timeEnd}</td>
          <td>${activity}</td>
          <td>${place}</td>
          <td>${type}</td>
          <td>${notes}</td>
          <td><img src="/01-Personal Website (HTML)/images/${freeBusy.toLowerCase()}.png" alt="${freeBusy}-icon" width="50vw" height="50vh" /></td>
        `;

        appointmentForm.reset();
    });
});