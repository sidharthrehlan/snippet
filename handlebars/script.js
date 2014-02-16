var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first <b>post!</b>"}
var html    = template(context);
$('#dyndata').html(html);