import React from 'react'
import ReactDOM from 'react-dom/client'
import {HaderComponent} from './HeaderComponent'
import {FooterComponent} from './FooterComponent'
import { CardComponent } from './CardComponent'




var root=ReactDOM.createRoot(document.getElementById("divRoot"));
const restaurants=[
    {
      "info": {
        "id": "608601",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e0ecb2d6-203c-4048-bb2d-63dcafbde685_608601.jpg",
        "locality": "Kodichikknahalli",
        "areaName": "Devara Chikkana Halli",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRatingString": "4.2",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    },
    {
      "info": {
        "id": "405734",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Akshay Nagar",
        "areaName": "Akshay Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRatingString": "4.3",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    },
    {
      "info": {
        "id": "42579",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_42579.JPG",
        "locality": "Vega City Mall",
        "areaName": "BTM Layout",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRatingString": "4.3",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    },
    {
      "info": {
        "id": "247180",
        "name": "Chai Point",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/19/546e3ffe-f2b3-471c-8ad2-2a70f6f842ab_247180.jpg",
        "locality": "HSR Layout",
        "areaName": "HSR Layout",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American"
        ],
        "avgRatingString": "4.5",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 4.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        }
      }
    }
  ]



var AppComponent=()=>
(
<div className='container-fluid'> 
  <HaderComponent/> 
  
  <div style={{display:'flex'}}>
  {restaurants.map((res) => (
  <CardComponent key={res.info.id} resData={res} />
))}


  
  </div>

  <FooterComponent/>
  
  </div>

)


root.render(<AppComponent/>);