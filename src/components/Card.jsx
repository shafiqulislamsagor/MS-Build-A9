import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


const CardComponent = () => {
    return (
        <Card className='ml-11' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/VVtBChc/home1.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <h3>Luxurious Villa in Beverly Hills</h3>
                    <h2 className='text-sm'>location</h2>
                    <h2>Area: 3000 sqft</h2>
                    <h2>facilities backyard, playroom, study room, garage</h2>
                    <h2>Price $450,000</h2>
                    <h2>Status sale</h2>
                    <div>
                        <button>view</button><button>Booking</button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;

