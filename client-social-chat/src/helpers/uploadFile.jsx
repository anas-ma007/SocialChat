import { CLOUDINARY_CLOUD_NAME } from "../utils/constants";



const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`
console.log(url, "url log");

const uploadFile = async (file) => {
    const formData = new FormData()
    console.log(formData, "formdata log");
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