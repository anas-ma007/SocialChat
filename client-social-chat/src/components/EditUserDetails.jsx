
const EditUserDetails = (data) => {
    const {name, profile_pic, email, mobile} = data.data
    console.log(name, profile_pic, email, mobile, "data in edituser props");
  return (
    <div>EditUserDetails</div>
  )
}

export default EditUserDetails