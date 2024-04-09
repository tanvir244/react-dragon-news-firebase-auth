import { useEffect, useState } from "react";
import LeftSideContents from "../LeftSideContents/LeftSideContents";
import Navbar from "../Navbar/Navbar";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import News from "./News";
import RightSideContents from "../RightSideContents/RightSideContents";

const Home = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setAllNews(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <LeftSideContents></LeftSideContents>
                </div>
                <div className="md:col-span-2 space-y-6">
                    {
                        allNews.map(news => <News
                        key={news._id}
                        news={news}
                        ></News>)
                    }
                </div>
                <div>
                    <RightSideContents></RightSideContents>
                </div>
            </div>
        </div>
    );
};

export default Home;