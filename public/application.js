console.log("hello");


$(document).ready(function() {
  $('#ajax_button').click(function() {

    prependResponse = function(response) {
      $('#content').prepend(response);
    }

    console.log("YOLO");
    $.ajax({
      url: "/example_ajax",
      type: "GET"
    }).done(prependResponse).fail(function() {
      console.log("BIG FAIL")
    });

    $.ajax({
      url: "/example_ajax",
      type: "POST"
    }).done(prependResponse);

    $.ajax({
      url: "/article",
      type: "GET",
      data: {ajax: true},
      dataType: "json"
    }).done(function(response) {
      console.log(response);
      $('#content').append("<h2>" + response.title + "</h2><p>" + response.content + "</p>");
    })

    $('#content').append("<p>OMGOMGOMGOMGOMG</p>");
  })
});