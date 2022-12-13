import React, { useState, useEffect } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState(
    'BZCF - 비즈니스, 투자, 스타트업과 동기부여'
  )
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em> 채널
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
