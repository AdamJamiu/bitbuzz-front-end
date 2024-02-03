const ReelPage = () => {
    return (
        <section className="h-screen">
            <div className="w-full h-full snap-mandatory snap-y overflow-y-auto">
                <div className="snap-start">
                    <div className="bg-black h-[87vh] w-full flex justify-center items-center">
                        <div className="h-96 rounded-xl w-72 p-5 bg-white">
                            {/* Content for first snap target */}
                        </div>
                    </div>
                </div>

                <div className="snap-start">
                    <div className="bg-black h-[87vh] w-full flex justify-center items-center">
                        <div className="h-96 rounded-xl w-72 p-5 bg-white">
                            {/* Content for second snap target */}
                        </div>
                    </div>
                </div>

                <div className="snap-start">
                    <div className="bg-black h-[87vh] w-full flex justify-center items-center">
                        <div className="h-96 rounded-xl w-72 p-5 bg-white">
                            {/* Content for third snap target */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReelPage;