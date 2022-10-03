//changes the amount of time for break session
$("#break-increment").on("click", () => {
  $("#break-length").text(+$("#break-length").text() + 1);
});

$("#break-decrement").on("click", () => {
  if ($("#break-length").text() === "0") {
    $("break-length").text() === 0;
  } else {
    $("#break-length").text(+$("#break-length").text() - 1);
  }
});

//changes the amount of time for study session
$("#session-increment").on("click", () => {
  $("#session-length").text(+$("#session-length").text() + 1);
});

$("#session-decrement").on("click", () => {
  if ($("#session-length").text() === "0") {
    $("session-length").text() === 0;
  } else {
    $("#session-length").text(+$("#session-length").text() - 1);
  }
});

$("#session-length").on("change", () => {
  $("#minutes-left").text($("#session-length".text()));
});

// function updateInterfaceTime() {
//   const minutes = Math.floor(remainingSeconds / 60);
// }

if ($("#minutes-left") <= 0) {
  $("#minutes-left").style("color", "red");
}
