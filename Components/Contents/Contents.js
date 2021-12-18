import ThumbNail from "./ThumbNail";
import FlipMove from "react-flip-move";
export default function Contents({results}) {
    
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center">
            {
                results.map((res)=>(
                    <ThumbNail key={res.id} result={res}/>
                ) )
            }
        </FlipMove>
    )
}
