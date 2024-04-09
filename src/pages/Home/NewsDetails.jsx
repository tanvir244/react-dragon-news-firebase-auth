import { useParams, useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import BreakingNews from '../Shared/Header/BreakingNews';
import Navbar from '../Navbar/Navbar';
import RightSideContents from '../RightSideContents/RightSideContents';

const NewsDetails = () => {
    const { id } = useParams();
    const newsData = useLoaderData();
    console.log(newsData);
    const expectedNews = newsData.find(news => news._id == id);

    const { image_url, title, details, total_view, rating } = expectedNews;

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 my-4'>
                <div className='md:col-span-3'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className='flex gap-4 mt-4 justify-end'>
                                <span className='font-bold text-red-500'>Views: {total_view}</span>
                                <span className='font-bold text-green-500'>Rating: {rating.number}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1'>
                    <RightSideContents></RightSideContents>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;