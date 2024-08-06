
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiUserCirclePlus } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Avatar from "./Avatar";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from 'react-redux'
import { useState } from "react";
import EditUserDetails from "./EditUserDetails";




const SiderBar = () => {

    const user = useSelector(state => state?.user)
    console.log(user, "user log check mobile number");
    const [editUserOpen, setEditUserOpen] = useState(false)

    return (
        <div className='w-full h-full '>
            <div className='bg-slate-200 w-12 h-full rounded-tr-xl rounded-br-xl py-8  text-gray-700 flex flex-col justify-between'>
                <div>
                    <NavLink className={({ isActive }) => `w-12 my-[0.1rem] h-12 flex justify-center items-center cursor-pointer hover:bg-slate-300 rounded-lg ${isActive && "bg-slate-300"}`}>
                        <IoChatbubblesOutline title="chat" size={30} />
                    </NavLink>

                    <div className="w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-300 rounded-lg">
                        <PiUserCirclePlus title="add friend" size={30} />
                    </div>
                </div>
                <div >


                    <button onClick={()=>setEditUserOpen(true)} title={user?.name} className="w-12 h-12 mb-6 flex justify-center items-center cursor-pointer z-40 hover:bg-slate-300 rounded-lg">
                        {
                         user.profile_pic && user.name ? ( user.profile_pic  ? <Avatar  name={user?.name} width={90} height={90} imageUrl={user?.profile_pic} /> :  <Avatar  name={user?.name} width={80} height={80} /> ) : ( <RxAvatar size={45}/>)
                        }
                    </button>

                    <button className="w-10 h-10 m-auto flex justify-center items-center cursor-pointer bg-red-300  hover:bg-red-400  rounded-lg">
                        <BiLogOut title="Logout" size={30} height={30} width={30} />
                    </button>

                </div>
            </div>


            {
                editUserOpen &&(
                    <EditUserDetails onClose={()=>setEditUserOpen(false) } user={user} />
                )
            }
        </div>
    )
}

export default SiderBar