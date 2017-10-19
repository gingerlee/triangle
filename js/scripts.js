$(function() {
  $("form#sides").submit(function(event) {
    event.preventDefault();

  var side1 = parseFloat($("input#side1").val());
  var side2 = parseFloat($("input#side2").val());
  var side3 = parseFloat($("input#side3").val());

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    $("#not").show();
    $("#equilateral, #isosceles, #scalene").hide();
  } else if (side1 === side2 && side1 === side3) {
    $("#equilateral").show();
    $("#not, #isosceles, #scalene").hide();
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    $("#isosceles").show();
    $("#equilateral, #not, #scalene").hide();
  } else {
    $("#scalene").show();
    $("#equilateral, #isosceles, #not").hide();
  }
  });
});



  // var isosceles = (side1 === side2 || side1 === side3 || side2 === side3);
  // var scalene = ()
