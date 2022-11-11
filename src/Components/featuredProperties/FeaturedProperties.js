import "./featuredProperties.css"

const FeaturedProperties=()=>{
    return(
        <div className="fp">
            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGD8Ko2MQ-QHNvN1MEk3BoGwYEUDHZ3WpblQ&usqp=CAU" alt="" className="fpImg" />
            <span className="fpName">Anand</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from ₹1000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZKN02M3kmxpCjn2ysUE-EKV11Xnd1R_Kuw&usqp=CAU" alt="" className="fpImg"/>
            <span className="fpName">Anand</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from ₹1000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSSguqPfPRApst6adgF8t1MI9baWjv4O4xw&usqp=CAU" alt=""  className="fpImg"/>
            <span className="fpName">Anand</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from ₹1000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSJ-uxMUMWQanOBVDqnx1LV0G-r77qas4XA&usqp=CAU" alt="" className="fpImg" />
            <span className="fpName">Anand</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from ₹1000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
        </div>
    );
}
export default FeaturedProperties;