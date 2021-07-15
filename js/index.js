
$(".agregar").click( function(e){
    e.preventDefault();
    
    var productText = $("#newText").val(); 
    var list = $(".Lista"); 
    // , {class: "Product"}
    //var div = $("<div />");
    var li = $("<li />");
    var p = $("<p />")

    $('<label />', {  text: productText}).appendTo(li);
    $('<button class="btn-check" type="button" >Check</button>').appendTo(p);
    $('<button class="btn-delete" type="button">Delete</button>').appendTo(p);
    
    li.append(p);
    //div.append(li);
    list.append(li);

});

$(".Lista").on("click", ".btn-delete", function(e) {
    $(this).parent().parent().remove();
  });

$(".Lista").on("click", ".btn-check", function(e) {
  $(this).parent().siblings().toggleClass("line");
});