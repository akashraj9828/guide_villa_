var content;


$(document).ready(function () {
    //when page loaded load guides dynamically
    $("#guide_holder").load("guide_template.html")
});




//load reviews dynamically
function showReviews() {
    $(".modal-body").empty()

    $(".modal-title").html("Reviews")

    $(".modal-body").load("review_template.html")
    
}


//load pacakges dynamically
function showPackages() {
    $(".modal-body").empty()

    $(".modal-title").html("Packages")

    $(".modal-body").load("package_template.html")
}

