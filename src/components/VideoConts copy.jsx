import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(dara.items[0])
    );

    fetchAPI{ `search?part=snippet&relateaToVideoId=${id}&type=video` }.then((data)=> setVideos(data.items))
  }, [id])

  //const {snippet:{title,channelId, channelTitle}, statistics : {viewCount,LikeCount}}=videoDetail

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              controls/>
            </div>
            <div className="desc"></div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts