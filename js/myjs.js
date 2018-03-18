$("#show_reviews").click(function(){
    document.getElementById("overlay").style.display = "block";
    $("div#page").addClass("blur-all")
    var review_div=`<div id="reviews_container" ></div>`
    var review_title = `<div>
                        <span id="review_heading">Reviews</span>
                        </div>`
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
                            </div>`

    var close_btn =`<button type="button" class="btn btn-danger" onclick="off()" >Close</button>`

    

    // $(review_div).append(review_title)
    
    $("div#overlay").append(review_div)
    $("div#reviews_container").append(review_title)
    $("div#reviews_container").append(review_template)
    $("div#reviews_container").append(review_template)

    $("div#reviews_container").append(close_btn)
   
}
)

function off() {
    $("div#page").removeClass("blur-all")
    
    $("div#overlay").empty()
    document.getElementById("overlay").style.display = "none";
}

