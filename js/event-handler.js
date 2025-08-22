// const heading = document.querySelector("h1");
// heading.style.textAlign = "center";  //kaj korea

// document.h1.style.textAlign = "center";  (kaj korea na )


const MakeCenter = document.getElementById("text-center");
MakeCenter.onclick = function () {
  const heading = document.getElementById("heding-title");
  heading.style.textAlign = "center";
};

 document.getElementById("btn-update").addEventListener("click", function () {
   // console.log('button click');
   const PageTitleElements = document.getElementById("page-title");
   console.log(PageTitleElements);
   PageTitleElements.innerText = "Update the hading taxt";
 });

   document.getElementById("btn-login").addEventListener("click", function () {
     const loginElement = document.getElementById("user-info");
     // console.log(loginElement);
     loginElement.innerText = "login Succcesfully";
   });