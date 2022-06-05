setInterval(() => { 
    if (document.getElementById("username").value == "" || 
    document.getElementById("subject").value == "")
     { document.getElementById("submit").setAttribute("disabled", ""); }
      else { document.getElementById("submit").removeAttribute("disabled"); } });

function check(form) {
     if (form.username.value && form.subject.value) 
          { var username = document.getElementById("username").value; } 
          else { alert("Error: Enter valid email"); } }

document.getElementById("submit").onclick = function () {
     var username = document.getElementById("username").value;
    alert(username +", "+ "Thank you for reaching out to me . I'll be sure to contact you back");
};