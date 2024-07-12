import { TbPasswordFingerprint } from "react-icons/tb";


const Avatar = ({ userId, name, imageUrl, width, height }) => {
    let avatarName = ""

    //eg. user name = muhmd anas --------> MA
    if (name) {
        const splitName = name?.split(" ")
        if (splitName.length > 1) {
            const firstLetter = splitName[0].charAt(0).toUpperCase()
            const secondLetter = splitName[1].charAt(0).toUpperCase()
            avatarName = firstLetter + secondLetter
        } else {
            avatarName = splitName[0].charAt(0).toUpperCase()
        }
    }

    const bgColor = [
        "bg-slate-200",
        "bg-red-200",
        "bg-green-200",
        "bg-yellow-200",
        "bg-cyan-200",
        "bg-teal-200",
        "bg-blue-200",
        "bg-orange-200",
        "bg-lime-200",
        "bg-emerald-200",
        "bg-sky-200",
        "bg-violet-200",        
    ]
    const num = Math.floor(Math.random()*bgColor.length)
    console.log(num, "num in bg color .length");
    return (
        <div className= {`text-slate-800 overflow-hidden rounded-full shadow-2xl flex items-center justify-center border-2 text-2xl font-bold ${bgColor[num]} `} style={{ width: width+"px", height: height+"px" }}>
            {imageUrl ? (
                <img src={imageUrl} alt={name} width={width} height={height} className='overflow-hidden rounded-full' />
            ) : (
                name ? (
                    <div style={{ width: width+"px", height: height+"px" }} className='overflow-hidden rounded-full flex items-center from-stone-600 justify-center'>
                        {avatarName}
                    </div>
                ) : (
                    <div className='m-auto w-fit mb-3 '>
                        <TbPasswordFingerprint size={80} />
                    </div>
                )
            )
            }
        </div>
    )
}
export default Avatar