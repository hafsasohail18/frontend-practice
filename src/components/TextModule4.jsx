import React from 'react'
import TitleText from './TitleText'
import poster from '../assets/poster-meet-the-makers.avif'

const TextModule = () => {
  return (
    <>
    <TitleText
    title="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
    description="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
     />
     <div className='w-5/6 mx-auto'>
      <img src={poster} alt="" />
     </div>
    </>
  )
}

export default TextModule
