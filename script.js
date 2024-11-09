document.addEventListener('DOMContentLoaded', function() {
    function tcandtc (){
        var tcandtc = `
    Number to String ==> String(23)
    String to Number ==> Number(23)
    Like this we can use the into datatype(variable) to do type conversion.

    For eg. '1' + 1 //11 ==> here concatination is performed
    but '10' - 1 //9 ==> here arithmetci sub operation is performed

    So, except for + other arthm operation like -,*,/ will perform mathematical operation on string `;
    
        document.getElementById("tcandtc").innerHTML = tcandtc;
    }

    function torf(){
        var torf = `
    There are only 6 falsy values in JS. They are: 
        * 0
        * empty string ' '
        * undefined
        * null
        * Nan
        * False
        
    All othe values are true`;

        document.getElementById("torf").innerHTML =  torf;
    }

    tcandtc();
    torf();
})