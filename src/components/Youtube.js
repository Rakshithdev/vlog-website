import React, {useState, useEffect} from "react"
import Video from "./Video"
console.log(process.env)
export default function Youtube() {
    const [videos, setVideos] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [data, setData] = useState({})
    const [videoCards, setVideocards] = useState([])
    const [display, setDisplay] = useState("block")

    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCV2lA2EqJdXZ2mHtd02WQTg&order=date&key=${process.env.REACT_APP_API_KEY1}`

    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setVideos(data.items)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    useEffect(()=> {
        const cards = videos.map((video) => {
            const snippet = video.snippet
            const videoId  = video.id.videoId
            return(<Video  title = {snippet.title} description = {snippet.description} videoId = {videoId} key = {videoId}/>)
        })
        setVideocards((prevState) => [...prevState, cards])
    }, [videos]) 

    useEffect(() => {
        setNextPage(data.nextPageToken)
    }, [data])

    const loadMore = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCV2lA2EqJdXZ2mHtd02WQTg&pageToken=${nextPage}&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            if(!data.nextPageToken){
                setDisplay("none")
            }
            setData(data)
            setVideos(data.items)
        })
    }


    return (
    <section className="section-margin youtube section-padding" id="youtube">
        <h3 className="section__header"> My Youtube Videos </h3>
        <div className="video-cards">
            {videoCards}
        </div>
        <button onClick = {loadMore} className="h-center youtube__button" style={{display: display}}> Load More </button>
    </section>
    )
}





