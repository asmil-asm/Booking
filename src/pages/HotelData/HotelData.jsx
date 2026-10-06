import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import {CiLocationOn } from "react-icons/ci";
import Imagemodel from '../../Component/Model-image/Imagemodel';
import ModelreadMore from '../../Component/ModelreadMore/ModelreadMore';
import Rooms from '../../Component/Rooms-Details/Rooms';
import './HotelData.css'
import { useActions } from '../../store/useStore';
import { useHotelsQuery } from '../../services/HandleAPI';
import DynamicIcon from '../../data/DynamicIcon';
import Loading from "../../Component/Loading/Loading";
const HotelData = () => {
const {images,setImages,readMore,setReadMore}=useActions()
const{data:hotels,isLoading}=useHotelsQuery()
const {id}=useParams();
if(!hotels || isLoading ) return <Loading/>
if(!hotels) return []
const hotel=hotels?.find((hotel)=>String(hotel.id)===id)
let countImage=hotel.Hotel_images.foodImage.length+hotel.Hotel_images.animatiesImage.length+hotel.Hotel_images.outImage.length+hotel.Hotel_images.publicImage.length+hotel.Hotel_images.roomImage.length

if(!hotel)
{
    return <h1>Hotel Not Found</h1>
}



  return (
    <div className='hotel-data'>
     

      <div  className='info-hotel'>
        <div className='title'>  
          <h1>{hotel.name}</h1>
<div className='rate'>{Array.from({length:hotel.rate}).map((index)=><FaStar key={index}/>)}</div>
</div>
<div className='location'>
  <CiLocationOn/>
<p>{hotel.location}</p>
</div>
<div className='images'>

<div className='imageOut'>
  <div>    {hotel.Hotel_images.outImage.map((item,index)=><img   key={index} onClick={setImages} src={item} alt='not found'/>)}

</div>
</div>
<div className='servicesImages' onClick={setImages}>
  <div className=' imageServ'>{hotel.Hotel_images.roomImage.map((item,index)=>(
<div>    <img src={item} key={index}/>
</div>
))}</div>
  <div className='imageServ'>{hotel.Hotel_images.foodImage.map((item,index)=>(
<div set-data={`${countImage} +`}>    <img src={item} key={index}/>
</div>  ))}</div>
</div>



</div>


<div className='information-hotel'>
    <div className='animinties'>
    <h2>Featuers:</h2>
     <div className='activities'>
{hotel.aminities.map((item,index)=>(
  <div className='active' key={index}>
    <DynamicIcon className='icon' name={item.icon}/>
    <h3>{item.name}</h3>
    </div>
))}
     </div>
    
    </div>
    <div className='facilities'>
      <h2>Facilities:</h2>
      <div className='places'>
{hotel.facilities.map((item,index)=>(
  <div className='place' key={index}>
    <DynamicIcon className='icon' name={item.icon}/>
    <h3>{item.name}</h3>
    </div>
))}
      </div>
    </div>
    <div className="description">
<h2>Description of accommodation</h2>
<p>{hotel.description}</p>
<span onClick={setReadMore}>see more</span>
    </div>
  </div>
  <Rooms/>
  
</div>

{
  images && 
 <Imagemodel/>
}
{
  readMore &&
  <ModelreadMore/>
}
      </div>

  )
}

export default HotelData