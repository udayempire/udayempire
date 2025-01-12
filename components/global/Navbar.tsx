import Link from "next/link"

export const Navbar=()=>{
    const data = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Projects",
            href:"/projects"
        },
        {
            name:"Blogs",
            href:"/blogs"
        }
    ]
    return <div className="flex justify-between items-center border-b border-zinc-700 p-4 mx-8">
        <div className="">udayempire</div>
        <div className="flex  gap-10">
        {data.map((link,index)=>(
            <li className="list-none" key={index}>
                <Link className="hover:text-[#33E092] transition ease-in-out  transis text-md" href={link.href}>{link.name}</Link>
            </li>
        ))}
        </div>
    </div>
}