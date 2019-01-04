$(document).ready(function() {

    $.get("https://ofhwk42qe9.execute-api.us-east-1.amazonaws.com/prod/question-collection", function(data,status){
        $("p#question1").text(data[0].question);
        $("p#question2").text(data[1].question);
        $("p#question3").text(data[2].question);
});
});