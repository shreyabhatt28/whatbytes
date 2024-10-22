import { ChartColumnIncreasing ,Award,File } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className= "flex flex-col gap-4 mt-4 ">
            <Link href="/dashboard">
                <div className="sidebar-option">
                    <ChartColumnIncreasing size={20}/>
                    <h3 className="hidden sm:block ml-2">Dashboard</h3>
                </div>
            </Link>

            <Link href="/skills-test">
                <div className="sidebar-option">
                    <Award size={20}/>
                    <h3 className="hidden sm:block ml-2">Skills Test</h3>
                </div>
            </Link>
            <Link href="/internship">
                <div className="sidebar-option">
                    <File size={20}/>
                    <h3 className="hidden sm:block ml-2"> Internship </h3>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;