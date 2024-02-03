import mildImg from "/images/mill-and-boyd.jpg"

const PoolsPage = () => {
    return (
        <div className="w-full p-5 h-full">
            <h1 className="text-3xl font-semibold text-white">VIDEO LISTING POOLS</h1>

            <p className="my-5 max-w-3xl text-gray-200">
                Audience support your creators on their project with funds and get a reward for funding creators video
            </p>

            <div className="w-full flex flex-row justify-start items-center gap-4  text-sm mt-20 mb-5">
                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    All pools
                </button>

                <button className="py-2 px-4 rounded-md hover:bg-primary-purple font-medium bg-white hover:text-white ease transition-all">
                    New pools
                </button>
            </div>

            <div className="w-full">
                <table className="w-full my-5 min-w-max">
                    <tr className="border-[#0F0F0F] border-b w-full font-medium">
                        <td className="p-4">
                            <img src={mildImg} className="rounded-lg" />
                        </td>

                        <td className="text-white">mill and the boyd</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-green-500">$17.03</td>
                        <td className="p-4 text-white">
                            <button className="bg-[#0B0A0A] hover:opacity-75 px-4 py-2 font-semibold">
                                Trade
                            </button>
                        </td>
                    </tr>

                    <tr className="border-[#0F0F0F] border-b w-full font-medium">
                        <td className="p-4">
                            <img src={mildImg} className="rounded-lg" />
                        </td>

                        <td className="text-white">mill and the boyd</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-white">$35.23</td>
                        <td className="p-4 text-green-500">$17.03</td>
                        <td className="p-4 text-white">
                            <button className="bg-[#0B0A0A] hover:opacity-75 px-4 py-2 font-semibold">
                                Trade
                            </button>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default PoolsPage;