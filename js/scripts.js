$(document).ready(function() {
  var descriptions = ["Header", "Paragraph", "Image"];

  descriptions.forEach(function(description){
    $("." + description).click(function(){
    alert("This is a " + description + ".");
  });
  });
});
  //  $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
//   });
// });
