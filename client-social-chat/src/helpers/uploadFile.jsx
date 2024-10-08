import { CLOUDINARY_CLOUD_NAME } from "../utils/constants";



const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`  //The "auto" is for all kind of data or media, means photos images..etc. not sure, need to check once again

const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "SocialChat-file")

    const response = await fetch(url, {
        method: "post",
        body: formData
    })

    const responseData = await response.json()
    return responseData
}

export default uploadFile