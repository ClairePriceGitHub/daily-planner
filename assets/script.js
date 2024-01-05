// Function to show todays date in header
function dateToday() {
    var today = dayjs().format('dddd, MMMM D') + ('th');
    $('#currentDay').text(today);
}
dateToday();




// function addTimeBlockRows() {
//     // Add row
//     $('.time-block').append('<form class="row">');
//     // Hour
//     $('.row').append('<div class="hour col-2">');
//     $('.hour').text(timeSlots[0].name);
//     // Text area
//     $('.row').append('<textarea class="present col-8" name="event-text" rows="3">');
//     // Submit button
//     $('.row').append('<input class="saveBtn col-2" type="submit">');
// }

// Add time block div within container div
//$('.container').append('<div class="time-block">');
// Add correct number of time block rows
//addTimeBlockRows();




// $.each(timeSlots, function(index, value) {
//     // Add row
//     $('.time-block').append('<form class="row">');
//     // Hour
//     $('.row').append('<div class="hour col-2">');
//     $('.hour').text(timeSlots[index].name);
//     // Text area
//     $('.row').append('<textarea class="present col-8" name="event-text" rows="3">');
//     // Submit button
//     $('.row').append('<input class="saveBtn col-2" type="submit">');
// });

// timeSlots.forEach(function(timeSlot, i) {
//     // Add row
//     $('.container').append('<form class="row">');
//     // Hour
//     $('.row').append('<div class="hour col-2">');
//     $('.hour').text(timeSlots[i].name);
//     // Text area
//     $('.row').append('<textarea class="present col-8" name="event-text" rows="3">');
//     // Submit button
//     $('.row').append('<input class="saveBtn col-2" type="submit">');
// });


// numbers.forEach(function(number) {
//     console.log(number);
// })

// // timeSlots.forEach(function(timeSlot) {
// //     console.log(timeSlot.name);
// // });

// function timeSlots(slot, index, arr) {

// }


timeSlots.forEach(function(timeSlot) {
    var timeRow = $('<form class="row">');
    $('.container').append(timeRow);
    var hour = $('<div class="hour col-2">').text(timeSlot.name);
    var eventInput = $('<textarea class="present col-8" name="event-text" rows="3">');
    var button = $('<input class="saveBtn col-2" type="submit">');
    timeRow.append(hour, eventInput, button);
});


