/* because of the basicness of my website's design, I had very little room to
implement JS so I eneded up only doing it for forms and some really 
basic text replacement*/


/*Most basic validation function I could do. Similar to last project*/

function validateForm() {
  let x = document.forms["fillme"]["email"].value;
  if (x == "") {
    alert("Put in your email or else I can't respond.");
    return false;
  }
}

/*This is the most basic js script I could do but
I was crunching so hard on this one I had to be lazy*/

function updateMessage() {
  var msg = "Zach's Site";
  var el = document.getElementById('myname');
  el.textContent = msg;
}

updateMessage();