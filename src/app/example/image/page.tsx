import Image from "next/image"
import Link from "next/link";

export default function ImagePage(){
    return(
        <div>
            
            <img src="https://www.sahkamlesh.com.np/me.png" height={100} width={100}></img>
            
            <Image
            src="https://www.sahkamlesh.com.np/me.png"
            alt="Kamlesh_png"
            height={100}
            width={100}
            >
            </Image>
            
            {/* // TODO: */}
            {/* // access from public folder */}
            <img src="/img1.png"alt="kamlesh sah" width={400} height={500}></img>
            <Image src="/img1.png" alt="" height={100} width={100}></Image>
            
            {/* // access from assests folder */}
            {/* <Image src={img2.jpg} alt="" height={100} width={100}></Image> */}

            <Link href="/example/link">go to link page</Link>

        </div>
    )
}