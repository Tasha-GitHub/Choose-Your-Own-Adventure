
function showDiv1() {
   document.getElementById('Fighttxt').style.display = "block";
   document.getElementById('Intro').style.display = "none";
   document.getElementById('Introtrollimg1').style.display = "none";
    document.getElementById('Fighttrollimg1').style.display = "block";


var x = document.getElementsByName("Answer");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

var x = document.getElementsByName("Fightpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
        x[i].style.display="block";
    }
}

}


function showDiv2() {
   document.getElementById('Paytxt').style.display = "block";
   document.getElementById('Intro').style.display = "none";
document.getElementById('Introtrollimg1').style.display = "none";
    document.getElementById('Paytrollimg1').style.display = "block";


var x = document.getElementsByName("Answer");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

var x = document.getElementsByName("Paypart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
        x[i].style.display="block";
    }
}

}





function showDiv3() {
   document.getElementById('Runtxt').style.display = "block";
   document.getElementById('Intro').style.display = "none";
document.getElementById('Introtrollimg1').style.display = "none";
    document.getElementById('runtrollimg1').style.display = "block";


var x = document.getElementsByName("Answer");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

var x = document.getElementsByName("Runpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
        x[i].style.display="block";
    }
}

}


function showDiv4() {
   document.getElementById('Fight-Yestxt').style.display = "block";
   document.getElementById('Fighttxt').style.display = "none";
document.getElementById('Fighttrollimg1').style.display = "none";
    document.getElementById('wintrollimg1').style.display = "block";

var x = document.getElementsByName("Fightpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}


function showDiv5() {
   document.getElementById('Fight-Notxt').style.display = "block";
   document.getElementById('Fighttxt').style.display = "none";
document.getElementById('Fighttrollimg1').style.display = "none";
    document.getElementById('failtrollimg1').style.display = "block";

var x = document.getElementsByName("Fightpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}


function showDiv6() {
   document.getElementById('Pay-Yestxt').style.display = "block";
   document.getElementById('Paytxt').style.display = "none";
document.getElementById('Paytrollimg1').style.display = "none";
    document.getElementById('wintrollimg1').style.display = "block";

var x = document.getElementsByName("Paypart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}

function showDiv7() {
   document.getElementById('Pay-Notxt').style.display = "block";
   document.getElementById('Paytxt').style.display = "none";
document.getElementById('Paytrollimg1').style.display = "none";
    document.getElementById('failtrollimg1').style.display = "block";

var x = document.getElementsByName("Paypart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}

function showDiv8() {
   document.getElementById('Run-Yestxt').style.display = "block";
   document.getElementById('Runtxt').style.display = "none";
document.getElementById('runtrollimg1').style.display = "none";
    document.getElementById('wintrollimg1').style.display = "block";

var x = document.getElementsByName("Runpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}

function showDiv9() {
   document.getElementById('Run-Notxt').style.display = "block";
   document.getElementById('Runtxt').style.display = "none";
document.getElementById('runtrollimg1').style.display = "none";
    document.getElementById('failtrollimg1').style.display = "block";

var x = document.getElementsByName("Runpart2");
var i;
for (i = 0; i < x.length; i++) {
    if (x[i].style.display === "block") {
        x[i].style.display="none";
    }
}

}