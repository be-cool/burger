$(function() {
  console.log("ben");
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    console.log("button pressed");
    event.preventDefault();

    var name = $("[name=burger-name]")
      .val()
      .trim();
    console.log(name);
    if (name !== "") {
      var newBurger = {
        name: name
      };
      console.log(newBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        location.reload();
      });
    } else {
      $("[name=burger-name]").val("");
    }
  });
});
