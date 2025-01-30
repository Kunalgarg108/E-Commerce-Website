import React from 'react'
import Title from '../components/Title'
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox';
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga reiciendis nobis obcaecati nam modi dolore repellendus recusandae molestias doloremque quos, facere earum! Iusto quaerat quod praesentium earum, quos numquam?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates provident aperiam ex necessitatibus aliquam, quibusdam asperiores id error qui aut beatae neque ea inventore magnam dignissimos porro accusantium, suscipit ipsum!</p>
          <b className='text-gray-800'>
            Our Mission
          </b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus doloremque enim id quia, aperiam laudantium voluptate accusantium fuga illum hic voluptas numquam velit quas, maiores tenetur, quisquam est perspiciatis.
          </p>
         </div>
      </div>
      <div className='text-2xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
               <b>
                Quality Assurance
               </b>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit suscipit explicabo earum, possimus illo corporis molestias repudiandae dicta consequatur?</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
               <b>
                Convenience
               </b>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit suscipit explicabo earum, possimus illo corporis molestias repudiandae dicta Lorem ipsum dolor sit amet consectetur adipisicing.</p>
           </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6'>
               <b>
                24/7 Customer service
               </b>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit suscipit explicabo earum, possimus illo corporis molestias repudiandae dicta consequatur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, minus?</p>
           </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
