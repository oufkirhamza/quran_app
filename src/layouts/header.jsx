import { Link } from "react-router-dom";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/img/logo2.svg"
import pdf from "../assets/pdf/quran.pdf"

export const Header = () => {
    // const handleDownload = () => {
    //     // Replace 'file_url' with the actual URL of the file you want to download
    //     const fileUrl = process.env.PUBLIC_URL + {pdf}
    
    //     // Create a temporary anchor element
    //     const anchor = document.createElement('a');
    //     anchor.href = fileUrl;
    
    //     // Set the download attribute and trigger the click event
    //     anchor.download = 'quran.pdf';
    //     anchor.click();
    //   };
    return (
        <>
            <div className="bg-[#7f5e25] text-white border-b-[1px] border-[#bdac8d] flex items-center justify-between p-3 ">
                <Link to={'/'} className="font-bold"><img src={logo} alt="" /> </Link>
                <div className="flex items-center gap-5">
                    <Link to={'/'}>الصفحة الرئيسية</Link>

                    {/* <Link to={'/'}>قراءة </Link> */}
                    <Link to={'/quran/receiters'}> استماع </Link>
                    <a href={pdf} download={'quran'} > القرآن pdf</a>
                </div>
                <div className="flex px-4 text-2xl gap-3">
                    <span><CgProfile /></span>
                    <span><IoSettingsSharp /></span>
                </div>
            </div>
        </>
    );
}
