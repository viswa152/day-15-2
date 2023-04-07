// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    // This function display values
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    // This function evaluates the expression and returns result
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    }

    // Function to check for only number keys press
    function checkKeys(event)
    {
        var footer = document.getElementById('footer')
        console.log(event.keyCode)
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) { 
            footer.innerHTML = (
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong> Warning!</strong> Only Numbers are allowed
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`)
        }
        else{
            footer.innerHTML = ""
        }
    }