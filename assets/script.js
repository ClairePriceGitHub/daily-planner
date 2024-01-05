// Function to show todays date in header
function dateToday() {
    var today = dayjs().format('dddd, MMMM D') + ('th');
    $('#currentDay').text(today);
}
dateToday();

// Function to add time block to .container using ordered list
function addTimeBlock() {
    $('.container').append('<ol>');
    $('ol').addClass('time-block');
    for (var i=0; i < timeSlots.length; i++) {
        $('ol').append('<li>');
        $('li').addClass('row');
    }
}
addTimeBlock();
