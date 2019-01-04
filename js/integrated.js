$(document).ready(function() {

    $.get("https://ofhwk42qe9.execute-api.us-east-1.amazonaws.com/prod/question-collection", function(data,status){
        $("p#question1").text(data[0].question);
        $("p#question2").text(data[1].question);
        $("p#question3").text(data[2].question);
});
});

var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");
editor.session.setMode("ace/mode/java");

var editor1 = ace.edit("editor1");
editor1.setTheme("ace/theme/twilight");
editor1.session.setMode("ace/mode/javascript");
editor1.session.setMode("ace/mode/java");

var editor2 = ace.edit("editor2");
editor2.setTheme("ace/theme/twilight");
editor2.session.setMode("ace/mode/javascript");
editor2.session.setMode("ace/mode/java");




(function() {
                document.getElementById("message_form").onsubmit = function() {
                  myFunction11();
                   return false;
                }
            })
            ();

           
    function myFunction11() {

       
       debugger;
    var aa=document.getElementById("fname").value;
    var aa1=document.getElementById("lname").value;
    var ans1 = $('#editor').val();
    var aa2=document.getElementById("adrs").value;
    var aa3=document.getElementById("phn").value;
    var ans1 = document.getElementsByTagName('pre') [0].innerText;
    var ans2 = document.getElementsByTagName('pre') [1].innerText;
    var ans3 = document.getElementsByTagName('pre') [2].innerText;

      var f = document.createElement("form");
      f.setAttribute('method',"POST");
      f.setAttribute('action',"");
      f.setAttribute('id',"dmessage_form");
    
      var df = document.createElement("input");
      df.setAttribute('type',"hidden");
      df.setAttribute('id',"dfname");
      df.setAttribute('value',aa);
    
      var df1 = document.createElement("input"); 
      df1.setAttribute('type',"hidden");
      df1.setAttribute('value',aa1);
      df1.setAttribute('id',"dlname");
    
    
      var df2 = document.createElement("input");
      df2.setAttribute('type',"hidden");
      df2.setAttribute('value',aa2);
      df2.setAttribute('id',"dadrs");
    
    
      var df3 = document.createElement("input"); 
      df3.setAttribute('type',"hidden");
      df3.setAttribute('value',aa3);
      df3.setAttribute('id',"dphn");

      var df4 = document.createElement("input");
      df4.setAttribute('type',"hidden");
      df4.setAttribute('value',ans1);
      df4.setAttribute('id','dans1');

      var df5 = document.createElement("input");
      df5.setAttribute('type',"hidden");
      df5.setAttribute('value',ans2);
      df5.setAttribute('id','dans2');

      var df6 = document.createElement("input");
      df6.setAttribute('type',"hidden");
      df6.setAttribute('value',ans3);
      df6.setAttribute('id','dans3');
      
        f.appendChild(df);
        f.appendChild(df1);
        f.appendChild(df2);
        f.appendChild(df3);
        f.appendChild(df4);
        f.appendChild(df5);
        f.appendChild(df6);
     
       document.getElementsByTagName('body')[0].appendChild(f);
       var dfname=document.getElementById('dfname').value;
       var dlname=document.getElementById('dlname').value;
       var dadrs=document.getElementById('dadrs').value;
       var dphn=document.getElementById('dphn').value;
       var dans1 = document.getElementById('dans1').value;
       var dans2 = document.getElementById('dans2').value;
       var dans3 = document.getElementById('dans3').value;
       var selectedFile = document.getElementById("inputFile").files;
                if (selectedFile.length > 0) {
                var fileToLoad = selectedFile[0];
                var fileReader = new FileReader();
                var base64;
                
                fileReader.onload = function(fileLoadedEvent) {
                    base64 = fileLoadedEvent.target.result;
                   
                    
                   
                   console.log(base64);
                   var xhr = new XMLHttpRequest();
                    var params = JSON.stringify({
                    Records:{
                        Firstname: dfname,
                        Lastname: dlname,
                        Address: dadrs,
                        Phonenumber:dphn,
                        answer1 : dans1,
                        answer2: dans2,
                        answer3: dans3,
                        file: base64
                        }          
             });
                    // xhr.open("POST", "https://ofhwk42qe9.execute-api.us-east-1.amazonaws.com/prod/carer_genese_personal_info_uploadtos3", true);

                    xhr.open("POST", " https://9imnp726u7.execute-api.us-east-1.amazonaws.com/prod/carer-genese-question-answer", true);  

                   
                    xhr.setRequestHeader("Content-type", "application/json");
                    xhr.send(params);
                    xhr.onreadystatechange = function(){
                    // console.log("readystate value "+ xhr.readyState);
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            a = xhr.responseText;
                            b = JSON.parse(a);
                            console.log(b);
                            alert(b);
                           }
                        else{
                            alert("unable to send your data. Please check errors.");
                        }
                    }
                };
               return false;
            }
                fileReader.readAsDataURL(fileToLoad); 
                }
            }
                