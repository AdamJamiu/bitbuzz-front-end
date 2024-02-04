import { Skeleton } from "@mui/material"

const MovieLoadingSkeleton = () => {
    return (
        <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <Skeleton width="100%" height={300} className="rounded-xl" />
            <Skeleton width="100%" height={300} className="rounded-xl" />
            <Skeleton width="100%" height={300} className="rounded-xl" />
        </div>
    )
}

export default MovieLoadingSkeleton;