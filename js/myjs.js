$("#show_reviews").click(function(){

    $(".modal-title").html("Reviews")

    var review_template =`<div>
                                <div>
                                 <!-- reviewer name -->
                                    <div>
                                        <p id="reviewer_name"><b>Akash Raj</b></p>
                                    </div>
                                    <!-- review title -->
                                    <div>
                                        <p id="review_title"><b>Good toolset</b></p>
                                    </div>


                                    <!-- review content -->
                                    <div>
                                        <p id="review_content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                                        Good quality tool kit, is of sturdy build. Put it to use from day 1.
                                        <br>Highly recommended, if you are able to get it in the price 150 - 200.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <br>
                            <hr class="divider">
                            <br>`
        $(".modal-body").append(review_template)


    


   
})

// $("#show_package").click(function () {
//     document.getElementById("overlay").style.display = "block";
//     $("div#page").addClass("blur")
   
//     var package_div = `<div id="packages_container" ></div>`
//     var package_title = `<div>
//                         <span id="package_heading">packages</span>
//                         </div>`

//     var close_btn = `<button type="button" class="btn btn-danger" onclick="off()" >Close</button>`


   
//     // $(package_div).append(package_title)

//     $("div#overlay").append(package_div)
//     $("div#packages_container").load("package_template.php")
//     // $("div#packages_container").append(package_title)
//     // $("div#packages_container").append(package_template)
//     // $("div#packages_container").append(package_template)

//     $("div#packages_container").append(close_btn)

// }
// )

// function off() {
//     $("div#page").removeClass("blur")
    
//     $("div#overlay").empty()
//     document.getElementById("overlay").style.display = "none";
// }

