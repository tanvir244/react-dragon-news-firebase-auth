import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './style.css';

const LeftSideContents = () => {
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setAllNews(data[0].data))
    }, []);

    // Extract the keys of the object into an array
    const propertyNames = Object.keys(allNews);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Categories</h2>
            <ul className="ml-6">
                {
                    propertyNames.map((propertyName, index) => <NavLink
                        to={`/category/${propertyName}`}
                        key={index}
                        activeClassName="active"
                        className="block py-1 my-2 pl-4 uppercase font-semibold nav-link"
                        allNews={allNews}
                    >{propertyName}</NavLink>)
                }
            </ul>
        </div>
    );
};

export default LeftSideContents;