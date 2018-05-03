var RESTAPI = "http://127.0.0.1:5000/api/v1.0";

function load_task_list(father_div) {

    father_div.html("<ul class='list-group'></ul>");
    let ul = father_div.find("ul");

    $.getJSON(RESTAPI + "/tasks", function (data) {
        let tasks = data["tasks"]; // the dictionary from JSON

        for (let index in tasks) {
            if (tasks[index].urgent == 1)
                ul.append($("<li class='list-group-item list-group-item-danger'>" + tasks[index].description + "</li>"));
            else
                ul.append($("<li class='list-group-item list-group-item-info' >" + tasks[index].description + "</li>"));

        }
    });
}

$(document).ready(function () {

    $("#addForm").submit(function() {
        let description = $("#taskdescription").val() ;
        let urgent = $("#taskurgent").is(":checked") ;
        let task = { "description": description, "urgent": urgent ? 1 : 0 } ;
        let json =  JSON.stringify(task) ;

        $.post({
            "url": RESTAPI+'/tasks',
            "data": json,
            "contentType": "application/json",
            "success": function(){load_task_list($("#theList"))}
        }) ;

        return false ; // prevent FORM submission
    }) ;

    $("#theList").html("hello");
    load_task_list($("#theList"));



});