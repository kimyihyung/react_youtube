import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    fetchAPI(`videos?part=snippet, statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])
  // 각 정보를 videoDetail안에다가 넣음
  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, LikeCount },
  // } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="play">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
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
