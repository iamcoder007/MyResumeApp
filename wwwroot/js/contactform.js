//jQuery(document).ready(function ($)
$(function(){
    var flag = false;
    var SetupInput = {
        Name:"",
        Email:"",
        Subject:"",
        Message:""
    }
    $("#btn_SendMessage").click(function () {
        validateInput();
        assignFormData();
    })
    function assignFormData() {
        SetupInput.Name = $("#name").val();
        SetupInput.Email = $("#email").val();
        SetupInput.Subject = $("#subject").val();
        SetupInput.Message = $("#message").val();
    };
    function validateInput() {
        flag = true;
        if ($("#name").val().trim() === "") {
            flag = false;
            $("#name_Helper").text("Please Enter Full Name");
        }
        if ($("#email").val().trim() === "") {
            flag = false;
            $("#email_Helper").text("Please Enter Your Email ID");
        }
        if ($("#subject").val().trim() === "") {
            flag = false;
            $("#subject_Helper").text("Please Enter Subject");
        }
        if ($("#message").val().trim() === "") {
            flag = false;
            $("#message_Helper").text("Please Enter Full Message");
        }
    };
    if (flag) {
        assignFormData();
        invokeAjaxCall();
    }
    function invokeAjaxCall() {
        $.ajax({  
                type: "POST",  
                url: "/Home/SetupInputData",  
                data: JSON.stringify(SetupInput),  
                contentType: "application/json; charset=utf-8",  
                dataType: "json",  
                success: function(response) {  
                    if (response != null) {
                        alert("success");  
                    } else {  
                        alert("failed");  
                    }  
                },  
                failure: function(response) {  
                    alert(response.responseText);  
                },  
                error: function(response) {  
                    alert(response.responseText);  
                }  
            });  
    };
  //Contact
  //$('form.contactForm').submit(function() {
  //  var f = $(this).find('.form-group'),
  //    ferror = false,
  //    emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

  //  f.children('input').each(function() { // run all inputs

  //    var i = $(this); // current input
  //    var rule = i.attr('data-rule');

  //    if (rule !== undefined) {
  //      var ierror = false; // error flag for current input
  //      var pos = rule.indexOf(':', 0); 
  //      if (pos >= 0) {
  //        var exp = rule.substr(pos + 1, rule.length);
  //        rule = rule.substr(0, pos);
  //      } else {
  //        rule = rule.substr(pos + 1, rule.length);
  //      }

  //      switch (rule) {
  //        case 'required':
  //          if (i.val() === '') {
  //            ferror = ierror = true;
  //          }
  //          break;

  //        case 'minlen':
  //          if (i.val().length < parseInt(exp)) {
  //            ferror = ierror = true;
  //          }
  //          break;

  //        case 'email':
  //          if (!emailExp.test(i.val())) {
  //            ferror = ierror = true;
  //          }
  //          break;

  //        case 'checked':
  //          if (! i.is(':checked')) {
  //            ferror = ierror = true;
  //          }
  //          break;

  //        case 'regexp':
  //          exp = new RegExp(exp);
  //          if (!exp.test(i.val())) {
  //            ferror = ierror = true;
  //          }
  //          break;
  //      }
  //      i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //    }
  //  });
  //  f.children('textarea').each(function() { // run all inputs

  //    var i = $(this); // current input
  //    var rule = i.attr('data-rule');

  //    if (rule !== undefined) {
  //      var ierror = false; // error flag for current input
  //      var pos = rule.indexOf(':', 0);
  //      if (pos >= 0) {
  //        var exp = rule.substr(pos + 1, rule.length);
  //        rule = rule.substr(0, pos);
  //      } else {
  //        rule = rule.substr(pos + 1, rule.length);
  //      }

  //      switch (rule) {
  //        case 'required':
  //          if (i.val() === '') {
  //            ferror = ierror = true;
  //          }
  //          break;

  //        case 'minlen':
  //          if (i.val().length < parseInt(exp)) {
  //            ferror = ierror = true;
  //          }
  //          break;
  //      }
  //      i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
  //    }
  //  });
  //  if (ferror) return false;
  //  else var str = $(this).serialize();
  //  var action = $(this).attr('action');
  //  if( ! action ) {
  //      action = 'Home/SetupInputData';
  //  }
  //  $.ajax({
  //    type: "POST",
  //      url: action,
  //    data: str,
  //    success: function(msg) {
  //      // alert(msg);
  //      if (msg == 'OK') {
  //        $("#sendmessage").addClass("show");
  //        $("#errormessage").removeClass("show");
  //        $('.contactForm').find("input, textarea").val("");
  //      } else {
  //        $("#sendmessage").removeClass("show");
  //        $("#errormessage").addClass("show");
  //        $('#errormessage').html(msg);
  //      }

  //    }
  //  });
  //  return false;
  //});

});
