import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../api/apiClient";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
    const { id } = useParams()
    // const { data, isLoading } = useQuery({
    //     queryKey: ["get-movies"],
    //     queryFn: () => httpClient.get("discover/movie").then(res => res?.data),
    //     refetchOnMount: true,
    //     refetchOnWindowFocus: false,
    //     retry: Infinity
    // })

    return (
        <div>
            <iframe
                className="rounded-xl w-[300px] sm:w-[400px] h-[300px] md:w-[700px] md:h-[400px] lg:w-[1024px] lg:h-[505px]"
                src={`https://www.youtube.com/embed/1IMTfaaFXWE`}
                title="Form your US/UK/Canada business in just 24 hours with GoNomad"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    )
}

export default VideoPlayer;