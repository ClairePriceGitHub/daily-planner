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

        // Add attributes to div tag, add text and styling
        var hour = $('<label for="input" class="hour col-1">').text(timeSlot.name);
        hour.css({
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

        // Add attributes to submit button, add index, remove border
        var submitButton = $('<input class="saveBtn col-1" type="submit" value="Save">').attr('index', timeSlot.slotNumber);
        submitButton.css({
            borderRight: 'none',
            borderTop: 'none',
            borderBottom: 'none',
        })
        
        // Append to form tag
        row.append(hour, eventInput, submitButton);
    });

    

    

  

    
    $('.saveBtn').on('click', (event) => {
        event.preventDefault();
        //var userInputs = [];
        // Update input fields in timeslots.js
        for (var i=0; i < timeSlots.length; i++) {
            var userInput = $(event.currentTarget).prev().val();
            var userInputIndex = $(event.currentTarget).attr('index');
            if (userInput) {
                timeSlots[userInputIndex].input = userInput;
            } else {
                timeSlots[userInputIndex].input = '';
            };
            //userInputs.push(timeSlots[i].input);
        };
        
        //console.log(userInputs);
        localStorage.setItem('userInputs', JSON.stringify(timeSlots));
        //localStorage.getItem(userInputs);
    });

    // $('.saveBtn').on('click', (event) => {
    //     event.preventDefault();
        
    //     // Update input fields in timeslots.js
    //     var textInput = $(this).siblings("input").attr("index");
    //     var textVal = $(this).siblings("input").val();
    //     localStorage.setItem(textInput, textVal);
    //     var lsVal = localStorage.getItem(textInput);
    //     $(this).siblings("input").text(lsVal);
    // });




    $('.saveBtn').on('click', (event) => {
        event.preventDefault();
       
        // Update input fields in timeslots.js
        for (var i=0; i < timeSlots.length; i++) {
            var userInput = $(event.currentTarget).prev().val();
            var userInputIndex = $(event.currentTarget).attr('index');
            if (userInput) {
                timeSlots[userInputIndex].input = userInput;
            } else {
                timeSlots[userInputIndex].input = '';
            };
            
        };
        
        // console.log(timeSlots);

        getSetLocalStorage();
       
        
        

        // for (var i=0; i < localStorage.length; i++) {
        //     var key = localStorage.timeSlots[i];
        //     var item = JSON.parse(localStorage.getItem(key));
        // }

        // var test = [3, 56, 56, 2543];

        // var stringifyTest = JSON.stringify(test);
        // localStorage.setItem('userInputs', stringifyTest);

       
    });

    function getSetLocalStorage() {
        localStorage.setItem('userInputs', JSON.stringify(timeSlots));
        JSON.parse(localStorage.getItem('userInputs'));
    }
    
    

   

    

});