
import './App.css';
import AliceCarousel from 'react-alice-carousel';
import { Paper } from '@mui/material'
import ImageArray from "./Image"

function App() {
  // console.log(ImageArray[0].src)
  return (
    <div >
      <AliceCarousel
        infinite={true}
        autoPlay={true}
        autoPlayInterval={400}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        stopAutoPlayOnHover={true}
      >
        {
          ImageArray.map((image, i) => <Image key={i} image={image} />)
        }
      </AliceCarousel>
    </div>
  );
}

function Image({ image }) {
  return (
    <Paper >
      <div className="App">
        <img src={image.src} alt="image" height="550" />
      </div>
    </Paper>
  )
}

export default App;
