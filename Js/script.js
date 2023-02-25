$(document).ready(function() {
  $("#image1").addClass("border-color");
  var left = document.querySelector("#left-sec img");
  var collection = document.getElementsByClassName("option");
  for(var i = 0; i < collection.length; i++){
    collection[i].addEventListener("click", function() {
      for(var j = 0; j < collection.length; j++){
        collection[j].classList.remove("border-color");
      }
      this.classList.add("border-color");
      left.src = this.src;
      
    });
  }
    
});


// $(document).ready(function () {
//   $("#image1").addClass("border-color");
//   $("#image1").click(function () {
//     $("#left-sec img").css({
//       visibility: "visible",
//     });
//     $("#left-sec img").attr(
//       "src",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
//     );
//     $("#image1").addClass("border-color");
//     $("#image2").removeClass("border-color");
//     $("#image3").removeClass("border-color");
//     $("#image4").removeClass("border-color");
//     $("#image5").removeClass("border-color");
//     $("#image6").removeClass("border-color");
//   });
//   $("#image2").click(function () {
//     $("#left-sec img").css({
//       visibility: "visible",
//     });
//     $("#left-sec img").attr(
//       "src",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"
//     );
//     $("#image2").addClass("border-color");
//     $("#image1").removeClass("border-color");
//     $("#image3").removeClass("border-color");
//     $("#image4").removeClass("border-color");
//     $("#image5").removeClass("border-color");
//     $("#image6").removeClass("border-color");
//   });
//   $("#image3").click(function () {
//     $("#left-sec img").css({
//       visibility: "visible",
//     });
//     $("#left-sec img").attr(
//       "src",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"
//     );
//     $("#image3").addClass("border-color");
//     $("#image2").removeClass("border-color");
//     $("#image1").removeClass("border-color");
//     $("#image4").removeClass("border-color");
//     $("#image5").removeClass("border-color");
//     $("#image6").removeClass("border-color");
//   });
//   $("#image4").click(function () {
//     $("#left-sec img").css({
//       visibility: "visible",
//     });
//     $("#left-sec img").attr(
//       "src",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"
//     );
//     $("#image4").addClass("border-color");
//     $("#image2").removeClass("border-color");
//     $("#image3").removeClass("border-color");
//     $("#image1").removeClass("border-color");
//     $("#image5").removeClass("border-color");
//     $("#image6").removeClass("border-color");
//   });
//   $("#image5").click(function () {
//     $("#left-sec img").css({
//       visibility: "visible",
//     });
//     $("#left-sec img").attr(
//       "src",
//       "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
//     );
//     $("#image5").addClass("border-color");
//     $("#image2").removeClass("border-color");
//     $("#image3").removeClass("border-color");
//     $("#image4").removeClass("border-color");
//     $("#image1").removeClass("border-color");
//     $("#image6").removeClass("border-color");
//   });
//   $("#image6").click(function () {
//     $("#left-sec img").css({
//       visibility: "hidden",
//     });
//     $("#image6").addClass("border-color");
//     $("#image2").removeClass("border-color");
//     $("#image3").removeClass("border-color");
//     $("#image4").removeClass("border-color");
//     $("#image5").removeClass("border-color");
//     $("#image1").removeClass("border-color");
//   });
// });
