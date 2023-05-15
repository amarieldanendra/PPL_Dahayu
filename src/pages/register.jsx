export default function Register(){
    return(
        <main>
            {/* Form untuk register */}
            <div className="w-full py-10 bg-[#F4EBD0] flex justify-center items-center">
                <div
                    className="w-2/5 px-[46px] py-[23px] shadow-[0_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px]"
                >
                    <p className="font-dosis font-bold text-[#023020] text-[35px] text-center">Register</p>
                    <div
                        className="w-full mt-[70px] flex"
                    >
                        <div
                            className="w-[49%] flex flex-col"
                        >
                            <label className="font-dosis text-2xl text-[#023020]" htmlFor="firstName">First Name</label>
                            <input className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px]" type="text" name="firstName" id="firstName" />
                        </div>
                        <div
                            className="w-[49%] flex flex-col"
                        >
                            <label className="font-dosis text-2xl text-[#023020]" htmlFor="lastName">Last Name</label>
                            <input className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px]" type="text" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="username">Username</label>
                        <input className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px]" type="text" name="username" id="username" />
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="email">Email</label>
                        <input className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px]" type="text" name="email" id="email" />
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="password">Password</label>
                        <input className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px]" type="password" name="password" id="password" />
                    </div>
                    
                    <div
                        className="w-full flex justify-center mt-14"
                    >
                        <button className="px-5 py-3 bg-[#8A9A5B] rounded-[15px] text-[#F4EBD0] font-bold text-2xl mx-auto">Register</button>
                    </div>
                </div>
            </div>
        </main>
    )
}