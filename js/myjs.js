$("#show_reviews").click(function(){
    $(".modal-body").empty()

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

$("#show_package").click(function () {
    $(".modal-body").empty()    
    $(".modal-title").html("Packages")
    $(".modal-body").load("package_template.php")
      
})



