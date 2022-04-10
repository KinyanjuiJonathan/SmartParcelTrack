import React from 'react'
import Header from '../Header/Header';
import { BiBox, BiRefresh, BiRevision, BiShoppingBag } from 'react-icons/bi';
import '../customerProfile/customerProfile.css'
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import { getParcel, get_Parcels } from '../Redux/Actions/ParcelAction';
import { useDispatch} from "react-redux";



const CustomerProfile=()=> {
     const navigate = useNavigate();
     const dispatch= useDispatch();

     const {parcel}=useSelector((state) => state.parcelReducer);
     const { customer:currentcustomer, isLoggedIn } = useSelector((state) => state.customerReducer);
     const customer_username= currentcustomer.customer.customer_username

      if (!currentcustomer) {
      return navigate ("/login") 
    //   .then(dispatch(get_Parcels(currentcustomer.customer.customer_username))
    //   console.log();
    //   .catch((err) => {
    //   }))
     }
     if (isLoggedIn){
         dispatch(get_Parcels(customer_username))
     }
     
    

 //console checking
 console.log('this in in the customer profile');
 console.log(isLoggedIn);
 console.log(currentcustomer.customer.first_name)
 console.log(customer_username);
 console.log(parcel);
 
 



    function handleDeleteParcel(e){}

    // const [parcel_id, setParcel_id] = useState('')


    // const handleTrackOrder = (e) => {
    //         e.preventDefault();
    //         dispatch(getParcel(parcel_id))
    //         .catch((err) => {
    //         })
    //             };
    

  return (
    <div >
        <Header/>
        <div className='topContainer'>
        <div>
                    <strong>Hello {currentcustomer.customer.first_name}  </strong>
                </div>   
            <div className='Container2' >                           
                <div className='Cont'>
                    <div><BiBox/>To be shipped</div>
                    
                </div>
                <div className='Cont'><BiShoppingBag/>shipped</div>
                <div className='Cont'><BiRevision/>To be reviewed</div>
                <div className='Cont'><BiRefresh/> refund/atersale</div>
            </div>
            <div className='Container3'>
                <div>
                    <label><h2>Current orders</h2></label>
                    <div>
                        <button> view on map</button>
                    </div>
                    <div className='trackOrder'>
                        <div>
                            <input type="text" placeholder="Enter parcel Number" ></input>
                            <button >trackOrder</button>
                        </div>
                        <div>
                            <button onClick={handleDeleteParcel()}>cancel parcel ordered</button>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='Container5'>


            </div>
            <div className='Container4'>
                <div className='Container4bottom'>
                    <Link to ='/CreateParcel'><a href=''><button>create Parcel</button></a></Link>
                    <Link to='/UpdatedAddress'><a href=''><button>View your Details</button></a></Link>
                    <a href=''><button>Frequently asked question</button></a>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CustomerProfile