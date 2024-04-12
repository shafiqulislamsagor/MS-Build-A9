import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OurLocation = () => {
    return (
        <div className='my-16 w-11/12 lg:w-4/5 mx-auto '>
            <div>
                <h2 className='text-4xl opacity-80 saira text-center mb-7 font-medium'>Our Location</h2>
            </div>
            <MapContainer className='h-[500px] rounded-md z-0' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; Shafiqul Islam Sagor'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Designing per pass <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default OurLocation;
