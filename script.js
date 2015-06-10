/* fill out a contact info form for intertional students to have more information sent to them */
firstName==="" && lastName==="" && contact===""
phoneNumber==="" || email===""

/* This is a return function that makes sure the form gets an error if email box is not filled out */
function isEmailEmpty() {
  var field+ document.getElementById ('email');
if (field.value==='') {
  return true,
} else {
  return false;
  }
}
  
  var fieldTest = isEmailEmpty ();
  if (fieldtest===true) {
    alert ('Please provide your email address');
  }

function getYear () {
var year = new Date ().getFullYear();
  return year;
}
var yearToday = getYear();
getYear();