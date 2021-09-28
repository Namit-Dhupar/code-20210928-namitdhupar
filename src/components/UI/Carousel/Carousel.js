import React from 'react';
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import {Link} from 'react-router-dom';
import '../../../styles/example.scss';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Zoom,
    Slide,
    Button
} from '@material-ui/core';

function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;
    let items = [];
    const content = (
        <Grid item xs={12} lg={12 / totalItems} key="content">
            <CardContent className="Content">
            <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
                <Typography className="Title">
                    {props.item.Name}
                </Typography>
            </Zoom>
            <Slide direction="up" in={true}>
                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>
            </Slide>
            <Link to="/catalogue" style={{textDecoration:"none"}}>
            <Button variant="outlined" className="ViewButton">
                    View Now
                </Button>
            </Link>        
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={false} lg={12 / totalItems} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    {/* <Typography className="MediaCaption">
                        {item.Name}
                    </Typography> */}
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items = [
    {
        Name: "HYUNDAI",
        Type: "CATALOGUE",
        Caption: "Hyundai is the second highest-selling carmaker in India with a wide range of products in various segments.",
        contentPosition: "left",
        Items: [
            {
                Name: "Hyundai Creta",
                Image: "/Images/hyundai-creta.webp"
            },
            {
                Name: "Hyundai Verna",
                Image: "/Images/Hyundai-Verna.webp"
            }
        ]
    },
    {
        Name: "RENAULT",
        Type: "CATALOGUE",
        Caption: "Renault car prices start(GST Included) at Rs 4.06 Lakh for the most inexpensive model in its lineup, the KWID. ",
        contentPosition: "middle",
        Items: [
            {
                Name: "Renault KWID",
                Image: "/Images/Renault-KWID.webp"
            },
            {
                Name: "Renault Duster",
                Image: "/Images/Renault-Duster.webp"
            }
        ]
    },
    {
        Name: "SKODA",
        Type: "CATALOGUE",
        Caption: "The price of Skoda cars in India starts from 7.79 Lakh for the Rapid while the most expensive Skoda car in India one is the Superb with a price of 34.99 Lakh.",
        contentPosition: "right",
        Items: [
            {
                Name: "Skoda Kushaq",
                Image: "/Images/Skoda-Kushaq.webp"
            },
            {
                Name: "Skoda Octavia",
                Image: "/Images/Skoda-Octavia.webp"
            }
        ]
    },
    {
        Name: "TATA",
        Type: "CATALOGUE",
        Caption: "Tata car prices start(GST Included) at Rs 4.99 Lakh for the most inexpensive model in its lineup, the Tiago.",
        contentPosition: "left",
        Items: [
            {
                Name: "Tata Nexon",
                Image: "/Images/Tata-Nexon.webp"
            },
            {
                Name: "Tata Altroz",
                Image: "/Images/Tata-Altroz.webp"
            }
        ]
    }
]

class BannerExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoPlay: true,
            timer: 500,
            animation: "slide",
            indicators: true,
            timeout: 500,
            navButtonsAlwaysVisible: true
        }

        autoBind(this);
    }

   render() {
        return (
            <div style={{marginTop: "50px", color: "#494949"}}>
                <Carousel
                    autoPlay={this.state.autoPlay}
                    timer={this.state.timer}
                    animation={this.state.animation}
                    indicators={this.state.indicators}
                    timeout={this.state.timeout}
                    navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                >
                    {
                        items.map((item, index) => {
                            return <Banner item={item} key={index} contentPosition={item.contentPosition}/>
                        })
                    }
                </Carousel>
            </div>

        )
    }
}

export default BannerExample;
