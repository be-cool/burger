document.addEventListener("DOMContentLoaded", function() {
  let devourBtn = document.querySelectorAll(".devour-btn");
  devourBtn
    ? devourBtn.forEach(btn =>
        btn.addEventListener("click", function(event) {
          event.preventDefault();
          this.blur();
          const id = this.getAttribute("data-id") * 1;
          let newDevoured = this.getAttribute("data-newdevoured");
          let newStatus = { devoured: newDevoured };
          let url = `/${id}`;
          fetch(url, {
            method: "PUT",
            body: JSON.stringify(newStatus),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function() {
            location.reload();
          });
        })
      )
    : null;
  document.querySelector("#submit-btn").addEventListener("click", e => {
    e.preventDefault();

    const burger_name = document.querySelector("#burger-input").value.trim();
    if (!burger_name) return alert("Enter Burger Name!!");
    let newBurger = { burger_name };
    let url = `/api/burgers`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newBurger),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function() {
      location.reload();
    });
  });
});