import ImagePerson from './images/ImagePerson.jpg'
import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className=" bg-custom-grad w-1/6 m-4 rounded-md pb-5 bg-neutral">
            <div className=" h-1/4 rounded-md"></div>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mt-4">
                <img className="w-full h-full object-cover" src={ImagePerson} alt="person" />
            </div>
            <div className="text-center mt-4">
                <div>Nataliia Honcharuk</div>
                <div>I am the founder the Mount Travel</div>
            </div>
            <div className="text-center mt-4">
                <a href="contact" className="text-blue-500 hover:underline">Contact Us</a>
            </div>
        </div>
    )
}

export default UserProfile;
