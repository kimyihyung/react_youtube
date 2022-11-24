import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Videos } from './'
import { useParams, Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { AiFillHeart } from 'react-icons/ai'
import Loader from './Loader'

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

  if (!videoDetail?.snippet) return <Loader />
  // 각 정보를 videoDetail안에다가 넣음.ㄴ

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

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
            <div className="desc">
              <span className="title">{title}</span>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="count">
                <span className="view">조회수 {viewCount}회</span>
                <span className="like">
                  <AiFillHeart /> {likeCount}
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <Videos videos={videos} layout="colunm" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts
