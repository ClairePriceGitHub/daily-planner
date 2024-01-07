$( document ).ready(function() {

    // FUNCTION to show todays date in header
    function dateToday() {
        var today = dayjs().format('dddd, MMMM D') + ('th');
        $('#currentDay').text(today);
    }
    dateToday();

   
       




    // FUNCTION to add Form tag and contents to container div in index.HTML
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
            var eventInput = $('<textarea id="input" class="present col-10" name="event-text" rows="3">').attr('index', timeSlot.slotNumber);
        } else if (plannerHour < currentHour) {
            eventInput = $('<textarea id="input" class="past col-10" name="event-text" rows="3">').attr('index', timeSlot.slotNumber);
        } else {
            eventInput = $('<textarea id="input" class="future col-10" name="event-text" rows="3">').attr('index', timeSlot.slotNumber);
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

    // FUNCTION to set and get local storage
    function getSetLocalStorage() {
        localStorage.setItem('userInputs', JSON.stringify(timeSlots));
        JSON.parse(localStorage.getItem('userInputs'));
    };
    

     // FUNCTION to check and display local storage
     function checkLocalStorage() {
        var getTimeSlots = JSON.parse(localStorage.getItem('userInputs'));
        // var arrTimeSlots = [];
        // for (var i=0; i < getTimeSlots.length; i++) {
        //     arrTimeSlots.push(getTimeSlots[i].input);
        // }
       
             
        // $('#input').text(getTimeSlots[0].input);

       
        // $('#input').text(arrTimeSlots(index));



        // var findInputs = $('.row #input');
        // console.log($(findInputs).attr('index'));


           
        


        // $('.row #input').each(function(index) {
        //     console.log($(this).text(arrTimeSlots[index]));
        // });   


        $('.row #input').each(function(index) {
            console.log($(this).text(getTimeSlots[index].input));
        });  





        // $('.row #input').each(function(index) {
        //    // console.log(index +  $(this).text());
        //     $(this).text(arrTimeSlots);
        // });
        
        
    }
    checkLocalStorage();
      
   

 
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
        getSetLocalStorage();
    });

  
    
   

    

});