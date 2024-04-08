import moment from 'moment';
import logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <div className="text-center">
            <img className='mx-auto' src={logo} alt="" />
            <h2 className='text-lg'>Journalism Without Fear and Favour</h2>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;