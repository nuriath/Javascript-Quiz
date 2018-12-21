$(document).ready(function()){
    $("blanks form").submit(function(event)){
        var q1 = $("input:radio[name=answer1]:checked").val();
        var q2 = $("input:radio[name=answer2]:checked").val();
        var q3 = $("input:radio[name=answer3]:checked").val();
        var q4 = $("input:radio[name=answer4]:checked").val();
        var q5 = $("input:radio[name=answer5]:checked").val();

        var marks=0;
    }
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
    $(.Output").show();
    $(#display")



}