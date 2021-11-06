
var view_more = document.getElementById("view_more");
var row = document.getElementById("row");
      view_more.onclick = function () {
       row.setAttribute("style", "height: auto; visibility: visible; transition: 0.3s");
      } 
 document.forms.trip;
   trip.from.onfocus= function () {
    trip.from.style.border="5px solid pink";
   }
   trip.from.onblur= function () {
    trip.from.style.border="1px solid black";
   }
   trip.to.onfocus= function () {
    trip.to.style.border="5px solid pink";
   }
   trip.to.onblur= function () {
    trip.to.style.border="1px solid black";
   }
   trip.Departure.onfocus= function () {
    trip.Departure.style.border="5px solid pink";
   }
   trip.Departure.onblur= function () {
    trip.Departure.style.border="1px solid black";
   }
   trip.Return.onfocus= function () {
    trip.Return.style.border="5px solid pink";
   }
   trip.Return.onblur= function () {
    trip.Return.style.border="1px solid black";
   }
   trip.Passenger.onfocus= function () {
    trip.Passenger.style.border="5px solid pink";
   }
   trip.Passenger.onblur= function () {
    trip.Passenger.style.border="1px solid black";
   }
  var Error1 = document.getElementById("Error1");
  trip.to.onclick=function () {
    if (trip.to.value =="") {
      Error1.innerHTML=" Please Enter Your Origin!";
    }else{
      Error1.innerHTML="";
    }
  }


