// Invoke functions
selectTopic();

// Detect where the user came from to filter topics
function selectTopic() {
    // If user came from Remote Labs
    if (document.referrer == "https://lab.electromeet.com/support") {
        document.getElementById("topicId").selectedIndex = "2";
    }


    // Refresh the module with the updated content (Taken from an in-built script)
    document.getElementById("topicId").onchange("click", function() {
        var data = $(":input[name]", "#dynamic-form").serialize();
        $.ajax("ajax.php/form/help-topic/" + this.value, {
            data: data,
            dataType: "json",
            success: function(a) {
                $("#dynamic-form").empty().append(a.html),
                $(document.head).append(a.media)
            }
        });
    });
}
