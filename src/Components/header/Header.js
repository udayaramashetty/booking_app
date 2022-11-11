import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPerson, faPlane, faTaxi, faCar, faBed } from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range';
import { useState} from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import {useNavigate} from "react-router-dom"


const Header=({type})=>{
    const [destination,setDestination]=useState("");
    const [openDate,setOpenDate]=useState(false);
    const [openOptions,setOpenOptions]=useState(false);
    const [options,setOptions]=useState({
        adult:1,
        children:0,
        room:1,
    });
    const [date,setDate]=useState([
        {
            startDate:new Date(),
            endDate:new Date(),
            key:'selection'
        }
    ]);

        const navigate= useNavigate()
    const handleOption = (name,operation)=>{
        setOptions((prev)=>{
            return{
            ...prev,
            [name]:operation === "i" ? options[name] + 1 : options[name] - 1,
        };
    });
    };

    const handleSearch=()=>{
        navigate("/hotels",{state:{ destination, date, options }})
    }
    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={ faBed }/>
                <span>Stays</span>
             </div>

             <div className="headerListItem">
                <FontAwesomeIcon icon={ faPlane }/>
                <span>Flights</span>
             </div>

             <div className="headerListItem">
                <FontAwesomeIcon icon={ faCar }/>
                <span>Car rentals</span>
             </div>

             <div className="headerListItem">
                <FontAwesomeIcon icon={ faBed }/>
                <span>Attractions</span>
             </div>

             <div className="headerListItem">
                <FontAwesomeIcon icon={ faTaxi }/>
                <span>Airport taxis</span>
             </div>
            </div>
           {type !== "list" &&
            <><h1 className="headerTitle">A life time of doscount? It's Geninus.</h1>
            <p className="headerDisc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lambooking account</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSerchItem">
                <FontAwesomeIcon icon={ faBed } className="headerIcon"/>
                <input type="text"
                placeholder="where are you going?"
                className="headerSearchInput"
                onChange={e=>setDestination(e.target.value)}
                />
                </div>
                
                <div className="headerSerchItem">
                <FontAwesomeIcon icon={ faCalendarDays } className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/mm/yyyy")} to 
                ${format(date[0].endDate,"dd/mm/yyyy")}
                `}</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={item=>setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className="date"
                />}
                </div>

                <div className="headerSerchItem">
                <FontAwesomeIcon icon={ faPerson } className="headerIcon"/>
                <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
                { openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton" 
                        disabled={options.adult<=1}
                        onClick={()=>handleOption("adult","d")}>-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton"
                        disabled={options.children<=0}
                        onClick={()=>handleOption("children","d")}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <button className="optionCounterButton" 
                        disabled={options.room<=1}
                        onClick={()=>handleOption("room","d")}>-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>}
                </div>

                <div className="headerSerchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></> }
            </div>
        </div>
    );
}
export default Header;