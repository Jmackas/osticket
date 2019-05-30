// Invoke functions
selectTopic();

// Detect where the user came from to filter topics
function selectTopic() {
  // If user came from the EIT SharePoint site
  if (document.referrer == "https://eittraining.sharepoint.com/sites/staff-eit") {
    document.getElementById("topicId").selectedIndex = "1";
  }

  // If user came from Remote Labs
  else if (document.referrer == "https://lab.electromeet.com/support") {
    document.getElementById("topicId").selectedIndex = "2";
  }

  
 document.querySelector("body").insertAdjacentHTML('afterend', '<link href="https://jmackas.github.io/osticket/style.css" rel="stylesheet">');

  // Refresh the module with the updated content (Taken from an in-built script)
  document.getElementById("topicId").onchange("click", function () {
    var data = $(":input[name]", "#dynamic-form").serialize();
    $.ajax("ajax.php/form/help-topic/" + this.value, {
      data: data,
      dataType: "json",
      success: function (a) {
        $("#dynamic-form").empty().append(a.html),
          $(document.head).append(a.media)
      }
    });
  });
}
