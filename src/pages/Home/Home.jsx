import Navbar from "../Navbar/Navbar";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2>this is home page</h2>
        </div>
    );
};

export default Home;