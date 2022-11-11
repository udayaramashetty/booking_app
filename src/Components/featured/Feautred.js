import "./featured.css"


const Featured=()=>{
    return(
        <div className="featured">
            <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawEDTB6e-NvX-0BZmmH6OK-LdVXGljnHG4w&usqp=CAU" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Shivmogga</h1>
                <h2>28 Properties</h2>
            </div>
            </div>

            <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3_rBsSGhpI7Be5kNnltQ74e28ZzahEiYSdQ&usqp=CAU" alt="" className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Kodekenal</h1>
                <h2>38 Properties</h2>
            </div>
            </div>

            <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqta7uTX1IubHIkf49B28QH8Vuuiee4n0aCA&usqp=CAU" alt=""  className="featuredImg"/>
            <div className="featuredTitles">
                <h1>Ooty</h1>
                <h2>16 Properties</h2>
            </div>
            </div>

            
        </div>
    
    );
}
export default Featured;