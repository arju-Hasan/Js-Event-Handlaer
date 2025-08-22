// document
//   .getElementById("btn-mouse")
//   .addEventListener("mouseenter", function () {
//     console.log("mouse tiger");
//   });
// 
// 
//   document
//     .getElementById("btn-mouse")
//     .addEventListener("mousemove", function () {
//       console.log("mouse tiger");
//     });

    document
      .getElementById("btn-mouse")
      .addEventListener("mouseout", function () {
        console.log("mouse tiger");
      });



      document
        .getElementById("your-name")
        .addEventListener("focus", function () {
          console.log("User write the name ");
        });

      document
        .getElementById("your-email")
        .addEventListener("focus", function () {
          console.log("User write the email ");
        });

      document
        .getElementById("your-name")
        .addEventListener("blur", function () {
          console.log("User done the name ");
        });

      document
        .getElementById("your-email")
        .addEventListener("blur", function (e) {
          console.log("User done the email");
          if (e.target.value.trim() !== "") {
            e.target.setAttribute("readonly", true);  // akber liklea r kiltea parbea na
          }
        });