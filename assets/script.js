$( document ).ready(function() {
    // Add p tag to existing container div, confirming save to local storage // Set to hide
    var $confirm = $('<p class="time-block">').text('event added to local storage');
    $('.container').append($confirm);
    $confirm.hide();

    // FUNCTION to show todays date in header
    function dateToday() {
        var $today = dayjs().format('dddd, MMMM D') + ('th');
        $('#currentDay').text($today);
    };
    dateToday();

    // METHOD to add Form tag and other contents tags to existing container div 
    timeSlots.forEach(function(timeSlot) {
        var $row = $('<form class="row">');
        var $hour = $('<label for="input" class="hour col-1">').text(timeSlot.name);
        $hour.css({
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center'
        });
        var $currentHour = dayjs().format('HH');
        var plannerHour = timeSlot.hour;
        var $eventInput = $('<textarea id="input" name="event-text" rows="3">').attr('index', timeSlot.slotNumber);
        $eventInput.css('color', 'black');
        var $submitButton = $('<button class="saveBtn col-1" >').attr('index', timeSlot.slotNumber);
        $submitButton.css({
            borderRight: 'none',
            borderTop: 'none',
            borderBottom: 'none'
        });
        var $submitBtnImg = $('<img src="images/1_floppy-disk.png" width="20px" height="20px">');

        // Append form tag to container div 
        $('.container').append($row);
        // Check past/present/future and assign class accordingly
        if (plannerHour < $currentHour) {
            $eventInput.addClass('past col-10');
        } else if (plannerHour == $currentHour) {
            $eventInput.addClass('present col-10');
        } else {
            $eventInput.addClass('future col-10');
        };
        // Append hour, input area and submit button to form tag
        $row.append($hour, $eventInput, $submitButton);
        // Append image to submit button
        $submitButton.append($submitBtnImg);
    });

    // FUNCTION to save to local storage
    function setLocalStorage() {
        localStorage.setItem('userInputs', JSON.stringify(timeSlots));
    };

    // FUNCTION to check if there is local storage saved data and get to add textarea tag values
    function updateDisplay() {
        var $getTimeSlots = JSON.parse(localStorage.getItem('userInputs'));
        if ($getTimeSlots) {
            $('.row #input').each(function(index) {
                $(this).text($getTimeSlots[index].input);
            });  
        }
    };
    updateDisplay();

    // FUNCTION to confirm save to local storage 
    function saveConfirm() {
        $confirm.show();
        setInterval(function() {
            $confirm.hide();
            }, 2000);
    };
    
    // FUNCTION to update timeSlots.input fields and save user input to local storage
    $('.saveBtn').on('click', (event) => {
        event.preventDefault();
        $('.row #input').each(function(index) {
            timeSlots[index].input = $(this).val();
        }); 
        setLocalStorage();
        saveConfirm();
    });
});