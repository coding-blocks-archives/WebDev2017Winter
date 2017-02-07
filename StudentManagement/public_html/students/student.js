/**
 * Created by championswimmer on 30/01/17.
 */

function refreshData (data) {
    console.log(data);
    let stuTable = $('#students');
    stuTable.html(
        "<thead>" +
        "<tr>" +
        "<th>NAME</th>" +
        "<th>AGE</th>" +
        "</tr>" +
        "</thead>"
    );
    let stuData = "";
    data.forEach(function (student) {
        stuData +=
            "<tr>" +
            "<td>"+student.name+"</td>" +
            "<td>"+student.age+"</td>" +
            "</tr>";

    });
    stuTable.append(stuData)
}

$(function () {

    $('#add').click(function (ev) {
        ev.preventDefault();
        $.post('/addstudent', {
            name: $('#name').val(),
            age: $('#age').val()
        }, refreshData)
    });

    $.get('/getstudents', refreshData)

});
