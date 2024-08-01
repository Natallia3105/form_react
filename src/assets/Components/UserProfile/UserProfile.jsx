import ImagePerson from './images/ImagePerson.jpg'
import './UserProfile.css'
const UserProfile = () => {
    return (
        <div className=" bg-custom-grad w-1/6 m-4 rounded-md pb-5 bg-neutral">
            <div className=" h-1/4 rounded-md"></div>
            <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mt-4 ">
                <img className="w-full h-full object-cover" src={ImagePerson} alt="person" />
            </div>
            <div className="text-center mt-4">
                <div className="font-bold text-2xl text-white">Nataliia Honcharuk</div>
                <div className="p-[20px] lg:p-[20px] lg:px-[40px] text-base text-white">I am the founder the Mount Travel</div>
            </div>
            <div className="my-[10px] mx-[70px] pt-[8px] pb-[10px]  bg-blue-600 text-base rounded-[40px] text-center ">
                <a href="contact" className="text-white hover:underline ">Contact Us</a>
            </div>
        </div>
    )
}

export default UserProfile;
