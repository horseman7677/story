import React from 'react'
import './body.css'
import Card from '@mui/material/Card';
import { CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Data } from './Content'
import { Link } from 'react-router-dom';
// this the body of site
function Body() {
  // console.log(Data);
  // const read = (e) => {
  //   e.preventDefault();
  //   console.log("reading....");
  // }
  return (
    <div className='body'>

      <div className='items'>
        {
          Data.map((data, key) => {
            return <>
              <Card className='card' sx={{ maxWidth: 250 }} elevation={3}>
                <CardContent>
                  <Typography style={{ color: '#EF9A9A' }}>{data.title}</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="150"
                  image={data.image}
                />
                <CardActions >
                  <Link to="/Story1" style={{ textDecoration: 'none', color: "#FF80AB" }}>read</Link>
                </CardActions>
              </Card>
            </>
          })
        }
      </div>

    </div >
  )
}

export default Body