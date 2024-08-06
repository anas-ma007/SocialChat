import React, { useEffect, useRef, useState } from "react";
import Avatar from "./Avatar";
import { RxAvatar } from "react-icons/rx";
import uploadFile from "../helpers/uploadFile";
import Divider from "./Divider";
import axios from "axios";
import { BACKEND_URL } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";



const EditUserDetails = ({ user, onClose }) => {

  const [data, setData] = useState({
    name: user?.name,
    profile_pic: user?.profile_pic,
    mobile: user?.mobile
  })

  const uploadPhotoRef = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        ...user
      }
    })
  }, [user])


  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  const handleOpenUploadPhoto = (e) => {
    e.preventDefault()
    e.stopPropagation()
    uploadPhotoRef.current.click()
  }


  const handleUploadPhoto = async (e) => {
    let file = e.target.files[0]
    const uploadPhoto = await uploadFile(file)
    setData((prev) => {
      return {
        ...prev,
        profile_pic: uploadPhoto?.url
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      const URL = `${BACKEND_URL}/api/update-user`

      const response = await axios({
        method : "post",
        url : URL,
        data : data,
        withCredentails : true
      })
      
      console.log(response,"response");
      toast.success(response.data.message)
      if(response.data.success){
        dispatch(setUser(response.data.data))
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error?.response?.data.message)
    }

  }



  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white w-full max-w-sm p-4 rounded-xl">
        <h2 className="font-semibold text-center">Profile Details</h2>
        <p className="text-base font-semibold my-3">Edit User Details</p>
        <form action="grid gap-2 mt-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="name text-sm">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={user?.name}
              onChange={handleChange}

              className="w-full px-2 py-1 focus:outline-primary border bottom-2 shadow-sm"
            />
          </div>


          <div className="mt-4">
            <div > Photo : </div>
            <div className="my-2 flex items-center gap-4">
              {
                user.profile_pic && user.name ? (user.profile_pic ? <Avatar name={user?.name} width={70} height={70} imageUrl={user?.profile_pic} /> : <Avatar name={user?.name} width={80} height={80} />) : (<RxAvatar size={45} />)
              }
              <label htmlFor="profile_pic" >
                <button className="font-semibold" onClick={handleOpenUploadPhoto}>Change Photo</button>
                <input
                  type="file"
                  id="profile_pic"
                  className="hidden"
                  ref={uploadPhotoRef}
                  onChange={handleUploadPhoto}
                />
              </label>
            </div>
          </div>
          <Divider />
          <div className="flex w-fit ml-auto mx-4 ">
            <button onClick={onClose} className="border-primary text-primary font-semibold border px-4 mx-2 py-1 rounded-md hover:scale-105">Cacnel</button>
            <button onClick={handleSubmit} className="border-primary bg-primary font-semibold text-white border px-4 mx-2  py-1 rounded-md hover:scale-105">Save</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default React.memo(EditUserDetails)