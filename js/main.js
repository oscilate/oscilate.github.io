$(function () {
  var loading = $("#processing");
  var go = $("#go");
  var result = $("#result");
  var baseurl = $("#baseurl");
  var username = $("#username");
  var pass = $("#pass");

  loading.hide();
  go.on("click", function (event) {
    loading.show();
    var apiurl = baseurl.val();
    var user=username.val();
    var password=pass.val();
    var fullUrl =`https://${apiurl}/api/app/packagemanager/packages`;
    $.ajax({
      type: "GET",
      dataType: 'json',
      url: fullUrl,
      username: user,
      password: password
    })
      .done(function (json) {
        result.text(json.title).appendTo("body");
      })
      // Code to run if the request fails; the raw request and
      // status codes are passed to the function
      .fail(function (xhr, status, errorThrown) {
        alert("Sorry, there was a problem!");
        console.log("Error: " + errorThrown);
        console.log("Status: " + status);
        console.dir(xhr);
      })
      // Code to run regardless of success or failure;
      .always(function (xhr, status) {
        loading.hide();
      });
  });
});
