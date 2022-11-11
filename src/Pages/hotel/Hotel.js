import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import MailList from "../../Components/mailList/MailList";
import Footer from "../../Components/footer/Footer";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Hotel =()=>{
    const photos =[{
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBm_U9ig_H61fiFEdlgUSewDBztAeb3gEhcA&usqp=CAU"
    },
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7BglAkl-DO3qsdb9Eaeh3pN_l9FePHuM6w&usqp=CAU"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJiZI4kKtjW55nk0gtECus8D1UVsr-F5X5A&usqp=CAU"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LVjEHl5fnVHAyxdAoVzgc3kWA1c8rsSeKhMw7k5BXRL8a6vtfsZizvWQilvulbFhCrs&usqp=CAU"
},]
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="booknow">Reserve or
                        Book Now!
                    </button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span >Bangalore 560029</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent 500mt from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book stay over ₹850 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map(photo=>{
                            <div className="hotelImgWrapper">
                                <img src={photo.src}alt="" className="hotelImg"/>
                           </div>     
                        })}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">stay in Cool weather</h1>
                        <p className="hotelDesc">
                            ANd9GcQ9LVjEHl5fnVHAyxdAoVzgc3kWA1c8rsSeKhMw7k5BXRL8a6vtfsZizvWQilvulbFhCrs
                        </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a week stay</h1>
                            <span>
                                ANd9GcQ9LVjEHl5fnVHAyxdAoVzgc3kWA1c8rsSeKhMw7k5BXRL8a6vtfsZizvWQilvulbFhCrs
                            </span>
                            <h2>
                                <b>₹850</b>(per day)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
}

export default Hotel;