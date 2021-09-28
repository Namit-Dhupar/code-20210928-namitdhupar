import React from 'react'
import '../../../styles/footer.scss';
import { Grid, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
      backgroundColor: "black",
      width: "350px"
    },
    linkStyle: {
      marginBottom: "5px"
    },
    anchorStyle: {
      color: "black", 
      textDecoration: "none", 
      cursor: "default"
    }
  }));

const Footer = () =>{
    let d = new Date();
    let year = d.getFullYear();
    const classes = useStyles();
    return (
        <div className="footerTop">
        <Grid container>
        <Grid item sm={2}>
        <img width="50%" src="/download.jpg" alt="dealer logo" />
        </Grid>
        <Grid item lg={10} md={12}>
         <h3>Any Car. Anytime. Anywhere.</h3>   
        <br />
        </Grid>
        <Grid item lg={4} md={12}>
        POPULAR BRANDS
        <Divider className={classes.divider} />
        <ul style={{listStyleType: "none"}}>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/catalogue'>Maruti</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/catalogue'>Honda</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/catalogue'>Hyundai</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/catalogue'>Ford</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='/catalogue'>Kia & More</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OUR SERVICES INCLUDES
        <Divider className={classes.divider} />
        <ul style={{listStyleType: "none"}}>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='#'>Charger</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='#'>Woofers/Speakers</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='#'>AC Service</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='#'>Stereo</a></li>
           <li className={classes.linkStyle}><a className={classes.anchorStyle} href='#'>Leather Seats</a></li>
       </ul>
        </Grid>
        <Grid item lg={4} md={12}>
        OUR ADDRESS
        <Divider className={classes.divider} />
          <ul style={{listStyleType: "none"}}>
          <li className={classes.linkStyle}><HomeIcon />&nbsp;&nbsp; Car Dealer, Car Dealer Road, New Delhi- 110001</li>
          <li className={classes.linkStyle}><PhoneIcon />&nbsp;&nbsp;011-2525 2525, +91-99999999</li>
          <li className={classes.linkStyle}><EmailIcon />&nbsp;&nbsp;info@cardeal.xyz</li>
          </ul>
        </Grid>
        </Grid>
        <div className="footerBottom">
           © {year}- Car Deal Pvt Ltd All Right Reserved. 
        </div>   
        </div>
    )
}

export default Footer