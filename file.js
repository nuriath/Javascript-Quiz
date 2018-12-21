/*$(document).ready(function(){

    $("blanks form").submit(function(event){
        var q1 = $("input:radio[name=answer1]:checked").val();
        var q2 = $("input:radio[name=answer2]:checked").val();
        var q3 = $("input:radio[name=answer3]:checked").val();
        var q4 = $("input:radio[name=answer4]:checked").val();
        var q5 = $("input:radio[name=answer5]:checked").val();

        var marks=0;
    
}

    if(q1=="language"){
        marks +=2;
    }
    if(q2=="Interaction"){
        marks +=2;
    }
    if(q3=="console.log"){
        marks +=3;
    }
    if(q4=="Instances inherit from classes"){
        marks +=3;
    }
    $(".Output").show();
    $("#display").text("Your score is: " + marks);

event.preventDefault();


})
})*/

$(document).ready(function (){
    $('#blanks form').submit(function(event){
    var marks=0;
    var blanks=["answer1", "answer2", "answer3","answer4"]
        blanks.forEach(function(blank) {
            var userInput = $("input:radio[name=" + blank + "]:checked" ).val();
                    if(userInput=="a"){
                    marks = marks+10;
                    }
                })
          alert(marks)
    event.preventDefault();
  });
  });