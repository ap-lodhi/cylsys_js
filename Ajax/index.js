






function api(){


    var req = new XMLHttpRequest();
 
    
    req.open("GET", "data.txt", true);
 
  
    req.onreadystatechange = function () {
        if (this.readyState ==4  && this.status == 200) {
            var responseText = req.responseText;
            document.getElementById("output").textContent = responseText;
        } else {
        
            document.getElementById("output").textContent = "Error: " + req.status;
        }
    };
 
  
    req.send();
}
function api1(){


    var req = new XMLHttpRequest();
 
    
    req.open("GET", "obj.json", true);
 
  
    req.onreadystatechange = function () {
        if (req.status >= 200 && req.status < 300) {
            var responseText = req.responseText;
            document.getElementById("output").textContent = responseText;
        } else {
        
            document.getElementById("output").textContent = "Error: " + req.status;
        }
    };
 
  
    req.send();
}

