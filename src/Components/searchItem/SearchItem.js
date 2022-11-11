import "./searchItem.css"


const SearchItem=()=>{
    return(
        <div className="searchItem" >
            <img src="" alt="" className="siImg"/>
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubTitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entore Studio * 1 bathroom * 21m² 1 full bed
                </span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancell later, look in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="detailTexts">
                    <span className="siPrice">₹850</span>
                    <span className="siTaxOp">
                        Include taxes and fees
                        </span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;