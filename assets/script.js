// Function to show todays date in header
function dateToday() {
    var today = dayjs().format('dddd, MMMM D') + ('th');
    $('#currentDay').text(today);
}
dateToday();

// Function to add time block to .container using ordered list
// function addTimeBlock() {
//     $('.container').append('<ol>');
//     $('ol').addClass('time-block');
//     for (var i=0; i < timeSlots.length; i++) {
//         $('ol').append('<li>');
//         $('li').addClass('row');
//     }
// }
// addTimeBlock();

function numTimeBlocks() {
    num = timeSlots.length;
    return num;
}

function addTimeBlockRows() {
    // Add row
    $('.time-block').append('<form class="row">');
    // Hour
    $('.row').append('<div class="hour col-2">');
    $('.hour').text(timeSlots[0].name);
    // Text area
    $('.row').append('<textarea class="present col-8" name="event-text" rows="3">');
    // Submit button
    $('.row').append('<input class="saveBtn col-2" type="submit">');
}

// Add time block div within container div
$('.container').append('<div class="time-block">');
// Add correct number of time block rows
addTimeBlockRows();





