import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { RxAvatar } from "react-icons/rx";

const EditUserDetails = ({ user, onClose }) => {

  // eslint-disable-next-line react/prop-types

  const [data, setData] = useState({
    name: user?.name,
    profile_pic: user?.profile_pic,
    mobile: user?.mobile
  })
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

  const handleUploadPhoto = () => {

  }



  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-700 bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white w-full max-w-sm p-4 rounded-xl">
        <h2 className="font-semibold text-center">Profile Details</h2>
        <p className="text-lg font-semibold my-3">Edit User Details</p>
        <form action="grid gap-2 mt-2">
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


          <div className="">
            <label htmlFor="profile_pic" > Photo : </label>
            <div className="my-2 flex items-center gap-4">
              {
                user.profile_pic && user.name ? (user.profile_pic ? <Avatar name={user?.name} width={70} height={70} imageUrl={user?.profile_pic} /> : <Avatar name={user?.name} width={80} height={80} />) : (<RxAvatar size={45} />)
              }
              <button className="font-semibold">Change Photo</button>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPhoto}
              />
            </div>
          </div>

        </form>

      </div>

    </div>
  )
}

export default React.memo(EditUserDetails)