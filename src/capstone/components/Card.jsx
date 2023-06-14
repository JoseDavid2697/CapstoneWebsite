import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ScienceIcon from '@mui/icons-material/Science';
import StatsIcon from '@mui/icons-material/QueryStats';

export default function MediaCard(props) {
    const title = props.title;
    const icon = props.icon
  return (
    <>
        {
            icon == 'science' ? 
            <Card sx={{ maxWidth: 400}}>
                <CardContent>
                    <ScienceIcon></ScienceIcon>
                    <Typography gutterBottom variant="h5" component="div">
                    {title}
                    </Typography>
                </CardContent>
            </Card>
            :
            <Card sx={{ maxWidth: 400}}>
                <CardContent>
                    <StatsIcon></StatsIcon>
                    <Typography gutterBottom variant="h5" component="div">
                    {title}
                    </Typography>
                </CardContent>
            </Card>
        }
    </>
  )

}