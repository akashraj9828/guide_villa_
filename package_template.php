<div class="pricing-table2-1">
    <div class="row">
        <div id="package_holder">

        </div>

    </div>
    <!-- /.row -->

</div>
<!-- /.container -->

<script>
function makePackage(destination,price) {
    var temp=`<div class="col-md-6 col-sm-6 pricing-table-3">
            <div class="ribbon popular"></div>
            <div class="plan">

                <header style="background: url(./images/destination/`+destination+`.jpg) no-repeat center 0px / cover;">
                    <div class="editContent">
                        <h2>`+ destination +`</h2>
                    </div>
                    <div class="price">
                        <span class="currency editContent">₹</span>
                        <span class="amount editContent">`+price+`k</span>
                        <span class="period editContent">Day</span>
                    </div>
                    <!-- /.price -->
                    <a href="#" class="btn btn-success">Book Now</a>
                </header>
                <ul class="features">
                    <li>
                        <i class="fa fa-cutlery"></i>
                        <span class="editContent">Knows best food outlets</span>
                    </li>
                    <li>
                        <i class="fa fa-book "></i>
                        <span class="editContent">Facts about places</span>
                    </li>
                    <li>
                        <i class="fa fa-volume-up"></i>
                        <span class="editContent">Multi-lingual</span>
                    </li>
                    <li>
                        <i class="fa fa-money"></i>
                        <span class="editContent">Can get cheap deals</span>
                    </li>
                    <li>
                        <i class="fa fa-clock-o"></i>
                        <span class="editContent">Always with you</span>
                    </li>
                </ul>
                <!-- /.features -->
            </div>
            <!-- /.plan -->
        </div>
        <!-- /.col -->`

        return temp;

}

        $("#package_holder").append(makePackage("rajasthan",3))
        $("#package_holder").append(makePackage("kashmir",7))
        $("#package_holder").append(makePackage("kerela",4))

</script>