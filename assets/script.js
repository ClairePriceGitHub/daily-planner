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
        var hour = $('<label for="input" class="hour col-1">').text(timeSlot.name);
        $(hour).css({
            textAlign: 'center'
        })
        // Check past/present/future and assign class accordingly
        var currentHour = dayjs().format('HH');
        var plannerHour = timeSlot.hour;
        if (plannerHour == currentHour) {
            var eventInput = $('<textarea id="input" class="present col-10" name="event-text" rows="3">');
        } else if (plannerHour < currentHour) {
            eventInput = $('<textarea id="input" class="past col-10" name="event-text" rows="3">');
        } else {
            eventInput = $('<textarea id="input" class="future col-10" name="event-text" rows="3">');
        };
        // Add classes to submit button and remove border
        var submitButton = $('<input class="saveBtn col-1" type="submit" value="Save">')
        $(submitButton).css({
            borderRight: 'none',
            borderTop: 'none',
            borderBottom: 'none',
        })
        // Append to form tag
        row.append(hour, eventInput, submitButton);


        
    });

    
    // Add input to array
    
    // timeSlots.forEach(function(timeSlot) {
        
    // })



    

    // localStorage.setItem(key, value);

    // $('.saveBtn').on('click', (event) => {
    //     event.preventDefault();

    //     // for (var i=0; i < timeSlots.length; i++) {
    //         timeSlots.input
    //         var inputArr = [];
    //         var formInput = $('#input').val();
    //         inputArr.push(formInput);
    //         console.log(inputArr);
    //     // };
        
        
    // });


    $('.saveBtn').on('click', (event) => {
        event.preventDefault();
        
        // for (var i=0; i < timeSlots.length; i++) {
            var saveInput = timeSlots.input;
            var userInput = $('#input').val();
            saveInput = userInput;
            console.log(saveInput);
        // };
        
        
    });


});