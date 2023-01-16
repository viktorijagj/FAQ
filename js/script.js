$(document).ready(function () {
  $(".question").click(function () {
    if ($(this).parent().is(".open")) {
      $(this)
        .closest(".faqContent")
        .find(".answerContainer")
        .animate({ height: "0" }, 800);
      $(this).closest(".faqContent").removeClass("open");
    } else {
      var theNewHeight =
        $(this).closest(".faqContent").find(".answer").height() + "px";
      $(this)
        .closest(".faqContent")
        .find(".answerContainer")
        .animate({ height: theNewHeight }, 800);
      $(this).closest(".faqContent").addClass("open");
    }
  });
  addImage();
});

function addImage() {
  $(".question").each(function () {
    $(this).append('<img class = "questionMark" src="images/question.png">');
  });
  $(".answer").each(function () {
    $(this).append('<img class = "answerMark" src="images/answer.png">');
  });
}
