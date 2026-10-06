import Typehotels from '../../Component/Type-hotels/Typehotels'
import Hero from '../../Component/Hero/Hero'
import Offers from '../../Component/Offers/Offers'
import Amenities from '../../Component/Amenities/Amenities'
import HotelsCity from '../../Component/HotelsCity/HotelsCity'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testimonail from '../../Component/Testimonail/Testimonail'
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