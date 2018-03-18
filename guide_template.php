<div id="all_guides">

</div>
<script>

function makeGuides(image,name,rating,location,about){
    
    
    var rating_div ="<div>"

    for(i=0;i<5;i++){
        if(i<rating)
        rating_div+='<span class="fa fa-star checked"></span>'
        else
        rating_div+='<span class="fa fa-star"></span>'
    }
    rating_div+="</div>"

    var temp=`<div class="col-md-3 col-sm-6 col-xs-12 text-center">
    <div class="box">

        <!-- image -->
        <div>
            <img src="images/`+image+`.png" alt="Guide Image">
        </div>
        <!-- name -->
        <h3 id="guide_name">`+name+`</h3>
        
        <!-- rating -->
       `    + rating_div  +  `
        <!-- locations -->
        <div>
            <strong id="guide_location"><i class="fa fa-map-marker"  aria-hidden="true"></i> `+location+`</strong>
        </div>
        <!-- about -->
        <div>
        <p class="description" id="guide_about">`+about+`</p>            
        </div>

        <!-- reviews -->
        <div   >
            <h5 id="show_reviews" data-toggle="modal" data-target="#myModal" onclick="showReviews()"  >
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Reviews</h5>
               
        </div>
        <!-- package offered -->
        <div >
            <h5  id="show_package" data-toggle="modal" data-target="#myModal" onclick="showPackages()">
                <i class="fa fa-get-pocket" aria-hidden="true"></i> Package Offered</h5>
               
        </div>

       


    </div>
    <!-- //box -->
</div>`
return temp
}

var default_about="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor."

$("#all_guides").append(makeGuides("member","akash",4,"delhi",default_about))
$("#all_guides").append(makeGuides("member1","john",4,"kerela",default_about))
$("#all_guides").append(makeGuides("member2","keiran",4,"rajasthan",default_about))
$("#all_guides").append(makeGuides("member3","kurtis",4,"mumbai",default_about))
</script>