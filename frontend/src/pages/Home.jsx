import React from 'react'
import Cards from '../components/CardHome'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewsLetterBox from '../components/NewsLetterBox'

function Home() {
  return (
    <div>
      <Cards backGroundImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" image="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" description="shbfwhfkjfefwbajkfbwfwjafjwfwgef"/>
      <LatestCollection />
      <BestSeller />
      <Policy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
