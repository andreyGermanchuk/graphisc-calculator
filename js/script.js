$(document).ready(function qwe() {
    var firstNumArray = "";
    var secondNumArray = "";
    var temporaryNumArray = "";
    var operation = "";
    var numFromKeyboard = "";
    var result;
 
        // Button1
    var button1 = document.querySelector("#button1");
        button1.addEventListener("click", function() {
            numFromKeyboard = "1";
            temporaryNumArray += numFromKeyboard;  
            showOnLine();    
    });
        // Button2
    var  button2 = document.querySelector("#button2");
         button2.addEventListener("click", function() {
            numFromKeyboard = "2";
            temporaryNumArray += numFromKeyboard;   
            showOnLine();    
    });
        // Button3
    var  button3 = document.querySelector("#button3");
         button3.addEventListener("click", function() {
            numFromKeyboard = "3";
            temporaryNumArray += numFromKeyboard;    
            showOnLine();   
    });
        // Button4
    var  button4 = document.querySelector("#button4");
         button4.addEventListener("click", function() {
            numFromKeyboard = "4";
            temporaryNumArray += numFromKeyboard;   
            showOnLine();    
    });
        // Button5
    var  button5 = document.querySelector("#button5");
         button5.addEventListener("click", function() {
            numFromKeyboard = "5";
            temporaryNumArray += numFromKeyboard;      
            showOnLine(); 
    });
        // Button6
    var  button6 = document.querySelector("#button6");
         button6.addEventListener("click", function() {
            numFromKeyboard = "6";
            temporaryNumArray += numFromKeyboard;      
            showOnLine(); 
    });
        // Button7
    var  button7 = document.querySelector("#button7");
         button7.addEventListener("click", function() {
            numFromKeyboard = "7";
            temporaryNumArray += numFromKeyboard;      
            showOnLine(); 
    });
        // Button8
    var  button8 = document.querySelector("#button8");
         button8.addEventListener("click", function() {
            numFromKeyboard = "8";
            temporaryNumArray += numFromKeyboard;      
            showOnLine(); 
    });
        // Button9
    var  button9 = document.querySelector("#button9");
         button9.addEventListener("click", function() {
            numFromKeyboard = "9";
            temporaryNumArray += numFromKeyboard;      
            showOnLine(); 
    });
        // Button "+"
    var button10 = document.querySelector("#button10");
        button10.addEventListener("click", function() {
            firstNumArray = temporaryNumArray;
            temporaryNumArray = "";
            operation = "+";
            this.style.backgroundColor = "gray";
    });
        // Button "-"
    var button11 = document.querySelector("#button11");
        button11.addEventListener("click", function() {
            firstNumArray = temporaryNumArray;
            temporaryNumArray = "";
            operation = "-";
            this.style.backgroundColor = "gray";
    });
        // Button "*"
    var button12 = document.querySelector("#button12");
        button12.addEventListener("click", function() {
            firstNumArray = temporaryNumArray;
            temporaryNumArray = "";
            operation = "*";
            this.style.backgroundColor = "gray";
    });

        // Button ","
    var button13 = document.querySelector("#button13");
        button13.addEventListener("click", function() {
            numFromKeyboard = ".";
            temporaryNumArray += numFromKeyboard;
            showOnLine(); 
    });
    
        // Button "="
    var button14 = document.querySelector("#button14");
        button14.addEventListener("click", function() {
            button10.style.backgroundColor = "rgb(43, 91, 42)";
            button11.style.backgroundColor = "rgb(43, 91, 42)";
            button12.style.backgroundColor = "rgb(43, 91, 42)";
            button15.style.backgroundColor = "rgb(43, 91, 42)";
            secondNumArray = temporaryNumArray;
            if (operation == "+"){
            result = Number(firstNumArray) + Number(secondNumArray);
            }else if (operation == "-"){
                result = Number(firstNumArray) - Number(secondNumArray);
                }else if (operation == "*"){
                    result = Number(firstNumArray) * Number(secondNumArray);
                    }else if (operation == "/"){
                        result = Number(firstNumArray) / Number(secondNumArray);
                        }
        $("#input").val(Math.round(parseFloat(result) * 100) / 100);
    });
        // Button "/"
    var button15 = document.querySelector("#button15");
        button15.addEventListener("click", function() {
            firstNumArray = temporaryNumArray;
            temporaryNumArray = "";
            operation = "/";
            this.style.backgroundColor = "gray";
    });
    var button16 = document.querySelector("#button16");
    button16.addEventListener("click", function() {
        firstNumArray = "";
        secondNumArray = "";
        temporaryNumArray = "";
        $("#input").val("");

});
        function showOnLine(){
            $("#input").val(temporaryNumArray);
        }


});
    