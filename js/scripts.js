$("document").ready(function(){

  $("#mc-embedded-subscribe1").click(function(){
    $("#approvalDenial").show();
    $("#mc_embed_signup").hide();
  });
  
  $("#approvalButton").click(function(){
    swal("HURRAY!!Your application has been approved. We will contact you on how to get your funds. Thank you for applying.", "success");
  });  

    $("#mc-embedded-subscribe").click(function(event){
      event.preventDefault();
      var names = $("#mce-MMERGE1").val();
      var email = $("#mce-EMAIL").val();
      var phoneNumber = $("#mce-MMERGE2").val();
      var address = $("#mce-MMERGE4-addr1").val();
      var countyStateCity = $("#mce-MMERGE4-city").val();
      var postCode = $("#mce-MMERGE4-zip").val();
      var country = $("#mce-MMERGE4-country").val();
      var amount = $("#mce-MMERGE3").val();
      if((names == "" || email == "" || phoneNumber == "" ||
      address == "" || countyStateCity =="" || postCode =="" 
      || country =="" || amount =="")){
     swal({
            title:"Alert!!",
            text: "Enter the empty fields",
            icon: "warning",
          });
    }
    else if((names.length <=6)){swal({
      title:"Alert!!",
      text: "Name should be more than 6 characters",
      icon: "warning",
    });
    }
    else if((phoneNumber.length <10 || phoneNumber.length >16)){swal({
      title:"Alert!!",
      text: "Enter valid phone number",
      icon: "warning",
    });
    }
    else if((email.length <=14)){swal({
      title:"Alert!!",
      text: "Email address must be more than 14 characters",
      icon: "warning",
    });
    }
    else if((email.indexOf('@') <=0)){swal({
      title:"Alert!!",
      text: "Invalid Email address",
      icon: "warning",
    });
    }
    else if((email.indexOf('.') <=0)){swal({
      title:"Alert!!",
      text: "Invalid Email address",
      icon: "warning",
    });
    }
    else if((email.length >=25)){swal({
      title:"Alert!!",
      text: "Email address must be less than 25 characters",
      icon: "warning",
    });
    }
    
      else{
      swal("Form successfully submitted",  names + ", we have received your donations. Thank you for donating!", "success");
      }
    });

  $("#don").click(function(){

    var donorName = document.getElementById("mce-MMERGE1").value;
    var donorCountry = document.getElementById("mce-MMERGE4-country").value;
    var donorNumber = document.getElementById("mce-MMERGE2").value;
    var donorEmail = document.getElementById("mce-EMAIL").value;
    var donationAmount = document.getElementById("mce-MMERGE3").value;

    if(donationAmount == "" || donorName == "" || donationAmount == ""){
      $(".nodon").slideToggle();
    }
    else{
      $("ol#results").append("<li>Donation of " + donationAmount + " KES made by " + donorName + " from " + donorCountry);
      $(".nodon").hide();
    }
  });

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var mpesa = document.getElementById("mce-MMERGE5-0");
var bank = document.getElementById("mce-MMERGE5-1");
var paypal = document.getElementById("mce-MMERGE5-2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
mpesa.onclick = function() {
  modal2.style.display = "block";
}
bank.onclick = function() {
  modal3.style.display = "block";
}
paypal.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


});