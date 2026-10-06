import '../../Component/Type-hotels/typeHotels.css'
import Typehotels from '../../Component/Type-hotels/Typehotels'
import Hero from '../../Component/Hero/Hero'
import '../../Component/Hero/Hero.css'
import Offers from '../../Component/Offers/Offers'
import '../../Component/Offers/Offers.css'
import Amenities from '../../Component/Amenities/Amenities'
import '../../Component/Amenities/Amenities.css'
import HotelsCity from '../../Component/HotelsCity/HotelsCity'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../Component/HotelsCity/HotelsCity.css'
import Testimonail from '../../Component/Testimonail/Testimonail'
import '../../Component/Testimonail/Testimonail.css'
import CommomQuestion from '../../Component/Common-Question/CommomQuestion'
const Home = () => {
  return (
    <div className="home">
      <Hero/>
     <Typehotels/>
     <Offers/>
     <Amenities/>
     <HotelsCity/>
     <Testimonail/>
     <CommomQuestion/>

    </div>
  )
}

export default Home