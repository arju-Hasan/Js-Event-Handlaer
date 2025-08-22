document
  .getElementById("input-delete")
  .addEventListener("keyup", function (event) {
    const text = event.target.value.trim().toLowerCase();
    // console.log('user is typing', text);
    const btnDelete = document.getElementById("btn-delete");
    if (text === "delete") {
      // console.log("delete type");
      btnDelete.removeAttribute("disabled");
      btnDelete.style.background = "red"; // alert type
      btnDelete.style.color = "white";
    } else {
      // console.log("somthing else");
      btnDelete.setAttribute("disabled", true);
      btnDelete.style.background = ""; // default
      btnDelete.style.color = "";
    }
  });
