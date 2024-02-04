import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../api/apiClient";

const ReelPage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["get-movies-popular"],
        queryFn: () => httpClient.get("movie/popular").then(res => res?.data),
        refetchOnMount: true,
        refetchOnWindowFocus: false
    })
    return (
        <section className="h-[87vh]">
            <div className="w-full h-full snap-mandatory snap-y overflow-y-auto">
                {data?.results?.map((item, index) => (
                    <div className="snap-start bg-black h-screen w-full flex flex-col justify-start items-center p-10" key={index}>
                        <div className="h-96">
                            <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} className="rounded-lg h-96" />
                            <p className="text-white font-semibold">{item?.release_date}</p>
                            <p className="text-white font-semibold">{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ReelPage;

{/* <div className="snap-start">
                    <div className="">
                        <div className="h-96 rounded-xl w-72 p-5 bg-white">
                        </div>
                    </div>
                </div> */}