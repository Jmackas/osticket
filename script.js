document.getElementById("topicId").selectedIndex = "3";


document.getElementById("topicId").onchange("click", function(){
  var data=$(":input[name]","#dynamic-form").serialize();$.ajax("ajax.php/form/help-topic/"+this.value,{data:data,dataType:"json",success:function(a){$("#dynamic-form").empty().append(a.html),$(document.head).append(a.media)}});
});
