
function popUp() {
    let button = document.getElementById("submit");
let obj = document.getElementById("date");
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (button.innerText == "Hide") {
        obj.innerText = "";
        button.innerText = "Show"
    }else{
        if (hourNow > 18) {
            greeting = 'Good evening!';
        } else if (hourNow > 12) {
            greeting = ' Good afternoon!';
        } else if (hourNow > 0) {
            greeting = 'Good morni ng!';
        } else {
            greeting = 'Welcome! ';
        }
    
        obj.innerText = greeting;
        button.innerText = "Hide"
    }

    
}