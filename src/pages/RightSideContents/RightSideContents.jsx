import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import zone1 from "../../assets/images/qZone1.png" 
import zone2 from "../../assets/images/qZone2.png" 
import zone3 from "../../assets/images/qZone3.png" 
// import zone1 from "../../../assets/qZone1.png";
// import zone2 from "../../../assets/qZone2.png";
// import zone3 from "../../../assets/qZone3.png";

const RightSideContents = () => {
    return (
        <div className="space-y-2">
            <div className="px-4 space-y-3">
                <h2 className="font-bold text-lg">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login with Github
                </button>
            </div>
            <div className="p-4">
                <h2 className="font-bold text-lg mb-3">Login With</h2>
                <a className="flex w-full border p-4 gap-4 items-center rounded-t-lg" href="">
                    <span className="bg-gray-200 p-2 rounded-full">
                        <FaFacebookF />
                    </span>
                    Facebook
                </a>
                <a className="flex w-full border p-4 gap-4 items-center" href="">
                    <span className="bg-gray-200 p-2 rounded-full">
                        <FaTwitter />
                    </span>
                    Twitter
                </a>
                <a className="flex w-full border p-4 gap-4 items-center rounded-b-lg" href="">
                    <span className="bg-gray-200 p-2 rounded-full">
                        <FaInstagramSquare />
                    </span>
                    Instagram
                </a>
            </div>
            <div className="p-4 space-y-3 bg-[#F3F3F3] rounded-lg">
                <h2 className="font-bold text-lg">Q-Zone</h2>
                <img src={zone1} alt="" />
                <img src={zone2} alt="" />
                <img src={zone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideContents;