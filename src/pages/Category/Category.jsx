import { useParams, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import BreakingNews from "../Shared/Header/BreakingNews";
import Header from "../Shared/Header/Header";
import NewsSection from "./NewsSection";
import LeftSideContents from "../LeftSideContents/LeftSideContents";

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const expectedCategory = data[0].data[`${id}`];

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <LeftSideContents></LeftSideContents>
                </div>
                <div className="md:col-span-3">
                    <NewsSection expectedCategory={expectedCategory}></NewsSection>
                </div>
            </div>
        </div>
    );
};

export default Category;