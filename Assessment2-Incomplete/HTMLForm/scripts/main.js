$(function(){
    $('#btnSubmit').on('click', submit);


    function submit(){
      var errorList = [];
      var email = $("#emailAddress");
      if (email.value.indexOf('@') == -1) {
          errorList.push('Enter a valid Email');
      }
    }
});
