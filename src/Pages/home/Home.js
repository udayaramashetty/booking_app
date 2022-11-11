
import Featured from "../../Components/featured/Feautred";
import FeaturedProperties from "../../Components/featuredProperties/FeaturedProperties";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/header/Header";
import MailList from "../../Components/mailList/MailList";
import Navbar from "../../Components/navbar/Navbar";
import PropertyList from "../../Components/propertyList/PropertyList";
import "./home.css"


const Home =()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by Property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer/>
            </div>
        </div>
    );
}

export default Home;