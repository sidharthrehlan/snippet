//Normal handlebar template
var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

var context = {title: "My New Post", body: "This is my first <b>post!</b>"}
var html    = template(context);
$('#dyndata').html(html);


// Listing with register helper

var people = [
    {firstName: "Yehuda", lastName: "Katz"},
    {firstName: "Carl", lastName: "Lerche"},
    {firstName: "Alan", lastName: "Johnson"}
  ];


var source   = $("#listTemp").html();
var template = Handlebars.compile(source);

var html    = template(people);
$('#dynList').html(html);



  Handlebars.registerHelper('list', function(items, options) {
  var out = "<ul>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});