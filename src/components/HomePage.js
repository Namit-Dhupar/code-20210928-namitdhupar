import React, {Fragment} from 'react';
import Carousel from './UI/Carousel/Carousel';
import ClientCarousel from './UI/Carousel/CarouselClient'
import {Grid} from '@material-ui/core';
import '../styles/homepage.scss';

const HomePage = () => {
    return (
          <Fragment >
            <Carousel/>
            <Grid container>
            <Grid item lg={6} xs={12}>      
            <h1>About Us</h1>
            <h3>Car Dealership</h3>
            <p><strong>Car Dealership</strong>, is 
            India's leading car search venture that helps users buy cars that are right for them. Its website and app carry rich automotive
            content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India.
            The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of
            vehicles.</p>
              <p></p>
                </Grid>
                <Grid item lg={6} xs={12}>   
                <img className="AboutImage" src="/Images/home.jpg" alt="Pump Sample" />
                </Grid>
                </Grid>
                <br />
                <div className="heading">
                <h1>POPULAR BRANDS</h1>
                <p className="title">We have an extensive catalogue of popular brands such as:</p>
                <Grid container>
                  <Grid item xs={12}>
                <ClientCarousel />
                </Grid>
                </Grid>
               </div>
               <br />
            </Fragment>   
    )
}

export default HomePage