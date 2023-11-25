import Image from "next/image";
import SVG from "./logo.svg"
import Link from "next/link";

interface Props{
className:string
}

export default function HeaderLogo(props:Props){

    return(
    <Link href={"./"}> 
            <Image {...props} alt={SVG} src={SVG}/>
    </Link>
    )
}