$( document ).ready(function() {

    

    // Function to show todays date in header
    function dateToday() {
        var today = dayjs().format('dddd, MMMM D') + ('th');
        $('#currentDay').text(today);
    }
    dateToday();

    // Update current hour every 30 mins to update past/present/future classes
    // function checkTime() {
    //     currentHour = dayjs().format('HH');
    // }
    // setInterval(checkTime, 1000);
    // console.log();
    // // 1800000

    // Function to add time slots to container div in index.HTML
    timeSlots.forEach(function(timeSlot) {
        // Add class to form tag and append to container div 
        var row = $('<form class="row">');
        $('.container').append(row);
        // Add classes and text to div tag
        var hour = $('<div class="hour col-2">').text(timeSlot.name);
        // Check past/present/future and assign class accordingly
        var currentHour = dayjs().format('HH');
        var plannerHour = timeSlot.hour;
        if (plannerHour == currentHour) {
            var eventInput = $('<textarea class="present col-8" name="event-text" rows="3">');
        } else if (plannerHour < currentHour) {
            eventInput = $('<textarea class="past col-8" name="event-text" rows="3">');
        } else {
            eventInput = $('<textarea class="future col-8" name="event-text" rows="3">');
        };
        // Add classes to submit button
        var submitButton = $('<input class="saveBtn col-2" type="submit">');
        // Append to form tag
        row.append(hour, eventInput, submitButton);
    });


    // localStorage.setItem(key, value);

    // $('.saveBtn').on('click', (event) => {
    //     event.preventDefault();
    //     localStorage.setItem(key, value);
    // });


});