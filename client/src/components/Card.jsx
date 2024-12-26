import moment from "moment";
import { FaUserEdit } from "react-icons/fa";

const Card = ({ data }) => {
    const formattedDate = moment(data?.registered?.date).format('YYYY-MM-DD HH:mm:ss');


    return (
        <div className="md:w-[90%] w-[100%] flex  hover:shadow-lg justify-between border-black mt-7 bg-white rounded-md p-1 md:p-2">

            <img src={data?.picture?.large} alt="img" className=" rounded-md" />

            <div className="flex-1 flex ml-3 justify-start">
                <div className="flex w-full flex-col">
                    <h1 className="hover:underline font-semibold text-slate-800 text-xl md:text-2xl"><span className="text-slate-500">{data?.name?.title}.</span> {data?.name?.first} {data?.name?.last}</h1>
                    <p className="text-slate-600">{data?.location?.country},{data?.location?.state},{data?.location?.city}</p>
                    <p className="text-start text-sm md:text-md font-semibold text-slate-700">{data?.gender} <span>({data?.registered?.age} Year old)</span></p>
                    <p className="font-semibold text-slate-700 text-sm md:text-md hover:underline">Ph No: <span className="hover:text-blue-800">{data?.phone}</span></p>
                    <div className="w-full flex items-center justify-end gap-2">
                        <p className="text-xs md:text-sm">{formattedDate}</p>
                        <FaUserEdit size={25} title="Edit" className="border hover:bg-blue-800 hover:text-white flex p-1 items-center justify-center hover:scale-110 transition rounded-full bg-blue-50" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card