import { useParams } from "react-router-dom";
import { useActions} from "../../store/useStore";
import { useHotelsQuery } from "../../services/HandleAPI";
import Loading from "../Loading/Loading";
import './ModelreadMore.css'
const ModelreadMore = () => {
  const {setReadMore}=useActions()
    const {id}=useParams();

const{data:hotels,isLoading}=useHotelsQuery()
  if(!hotels || isLoading) return <Loading/>

const hotel=hotels.find((hotel)=>String(hotel.id)===id)
if(!hotel) return <div>Hotel Not Found</div>
  return (
 <>
  <div className="shadow"></div>
  <div className="aboutHotel">
    <span onClick={setReadMore}>X</span>


    <h3>Description of accommodation</h3>
    <div className="data">
      <div>
        <p>{`Opening Year: ${hotel.Year}`}</p>
        <p>{`number of rooms: ${hotel.rooms.length}`}</p>
      </div>
      <div>
        <p>{`phone number: ${hotel.phone}`}</p>
        <p>{`Email: ${hotel.email}`}</p>
      </div>
    </div>
    <div className="text">
      <p>{hotel.description}</p>
    </div>
  </div>
  </>
  )
}

export default ModelreadMore