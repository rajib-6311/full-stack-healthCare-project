import Banner from "../Components/Banner";
import Header from "../Components/Header";
import SpecialtyMenu from "../Components/SpecialtyMenu";
import TopDoctors from "../Components/TopDoctors";

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecialtyMenu/>
            <TopDoctors/>
            <Banner/>
        </div>
    );
};

export default Home;