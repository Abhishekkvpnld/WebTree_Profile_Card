


const Navbar = () => {

    return (
        <div className="py-1 border-b-2 px-4">
            <div className=" mx-auto flex justify-between items-center">

                <span><img className="rounded-full w-11 h-11" src="/app.jpg" alt="img" /></span>

                <div className="flex gap-5 items-center">

                    <div className="flex items-center justify-center gap-1">
                        <img src="/userImg.png" className="w-10 h-10 rounded-full" alt="avatar" title="user" />
                        <h3 className="font-bold hidden md:block">John Doe</h3>
                    </div>



                    <button className="border-black border h-8 px-4 rounded-lg font-semibold hover:text-white hover:bg-blue-500">Login</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar;