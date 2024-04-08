import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex my-2">
            <button className="w-[160px] bg-red-500 text-white py-3 px-4 font-semibold">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to='/'>
                    Only headlines of the news are showing here
                </Link>
                <Link className="mr-12" to='/'>
                    Army chief stresses peaceful resolution to conflicts in Bandarban
                </Link>
                <Link className="mr-12" to='/'>
                    Buet students continue protest for fourth day
                </Link>
            </Marquee>

        </div>
    );
};

export default BreakingNews;