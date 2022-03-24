$(document).ready(function () {
  $("form#sides").submit(function (event) {
    event.preventDefault();
    const firstside = parseInt($("input#firstside").val());
    const secondside = parseInt($("input#secondside").val());
    const thirdside = parseInt($("input#thirdside").val());

    if (firstside === secondside && firstside === thirdside) {
      $(".NOT-a-triangle").hide();
      $(".Scalene").hide();
      $(".Isosceles").hide();
      $(".Equilateral").show();
    }
    else if (firstside === secondside || firstside === thirdside || secondside === thirdside) {
      $(".NOT-a-triangle").hide();
      $(".Scalene").hide();
      $(".Equilateral").hide();
      $(".Isosceles").show();
    }
    else if (firstside + secondside < thirdside || secondside + thirdside < firstside || firstside + thirdside < secondside) {
      $(".Equilateral").hide();
      $(".Scalene").hide();
      $(".Isosceles").hide();
      $(".NOT-a-triangle").show();
    }
    else if (firstside != secondside && firstside != thirdside && secondside != thirdside) {
      $(".NOT-a-triangle").hide();
      $(".Equilateral").hide();
      $(".Isosceles").hide();
      $(".Scalene").show();
    }

  });

});