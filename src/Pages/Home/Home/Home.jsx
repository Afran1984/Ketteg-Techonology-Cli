import Banner from "../Banner/Banner";
import DropMessage from "../Contact/ContactShare/DropMessage";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>Home</h2>
            <Services></Services>
            <DropMessage></DropMessage>

            
        </div>
    );
};

export default Home;