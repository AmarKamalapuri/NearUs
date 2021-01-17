import React from 'react';
import {Link} from 'react-router-dom';
import "./about.css";
const Aboutus= () => {
    return(
<div>


<div class="about">
  <div class="container">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="aboutimg">
        <h3>About us</h3>
        <p>NearUs can change the way you move things, how you shop and lets you access your city like never before.
We’re an app that connects you to the nearest delivery partner to make purchases, from the nearest store to you.
With a Global customer reach and broad range of promotion and marketing features available, our app can make any business flourish.</p>
        <a href="/">Read More</a>
        </div>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div class="aboutimg">
        <figure><img src="img/banner.jpg"/></figure>
        </div>
      </div>
    </div>
  </div>
</div>
   
</div>
    )
}

export default Aboutus;