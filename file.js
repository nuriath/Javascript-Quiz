var optradio = $("input:radio[name=optradio]:checked").val();
function mytest()
{
    var q1=document.forms["myform"]["answer1"].value;
    var q2=document.forms["myform"]["answer2"].value;
    var q3=document.forms["myform"]["answer3"].value;
    var q4=document.forms["myform"]["answer4"].value;
    var marks=0;

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
    $("#display").text("your score is:"+marks);

    event.preventDefault();



}