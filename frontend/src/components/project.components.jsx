import React from 'react';
import Project1  from '../assets/MewTwo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from '../index.css';


function BlueBoy() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Project1}
                    alt="TPP Project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mewtwo Escape
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Welcome to our game! In this game you take the role of the legendary psychic pokemon, mewtwo. Who is trapped in a laboratory and must fina a way to escape. The laboratory is full of obstacles and ememies that mewtwo must avoid in order to collect 
                        keys that will unlock doors to the boss room which you must defeat!
                    </Typography>
                    <Typography variant="body2" color="text.secondary" >Developers: Bhavneet, Yonas, Patrick</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size = "small" color = "primary" >
                    Check it out!
                </Button>
            </CardActions>
        </Card>
    );
}
export default BlueBoy