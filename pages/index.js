import Head from 'next/head'
import {BsFillMoonStarsFill, BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';
import Image from "next/image"
import nimImg from "../public/IMG-0546.jpg"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import dode from "../public/code.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Nimalan Karthik Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        {/* Section 1 - Intro */}

        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl pl-5 font-burtons  '>NKR</h1>
            <ul className='flex items-center pr-5'>
              <li>
                <BsFillMoonStarsFill className='clickable-icon cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://drive.google.com/file/d/1HnQdHCGmQaLaWo81NNebhZrepBuIzNIv/view?usp=drive_link';
                  }} 
                className='bg-gradient-to-r from-cyan-500 to-blue-900 text-white px-4 py-2  rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='px-5'>
            <h2 className='text-4xl font-semibold text-blue-900  text-center'>Nimalan Karthik Rajasekar</h2>
            <h3 className='text-2xl font-normal  text-center'>Developer</h3>
            <br></br>
            <p className='font-light py-3 flex-wrap justify-center text-center'>
            Master’s in Computer Science student at UC Riverside with demonstrated experience in building and
            maintaining production-ready web applications. With 2 years of full-time software development
            experience at SAP Labs and 6 months of software development internship experience at Healthedge, looking forward to assist the
            hiring team at GM in designing, developing and maintaining the product as an Software Engineering Intern.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-5 text-gray-700'>
            <BsLinkedin  
                    className="clickable-icon cursor-pointer"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.linkedin.com/in/nimalan-karthik/';
                  }}></BsLinkedin>
            <BsGithub  
                    className="clickable-icon cursor-pointer"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://github.com/nimalankarthik';
                  }}></BsGithub>
            <BsInstagram 
                    className="clickable-icon cursor-pointer"
                    onClick={(e) => {
                    e.preventDefault();
                    window.location.href='https://www.instagram.com/nimalan.karthik/';
                  }}></BsInstagram>
           </div>
           <div className='relative mx-auto rounded-full h-80 w-80 mt-10 overflow-hidden'>
            <Image alt='DP' src={nimImg}>
            </Image>
            <br></br>
           </div>
        </section>

        <hr className='text-black '></hr>

        {/* Section 2 - Projects */}
        <br></br>
      <section className='px-5' >
        <h2 className='text-4xl font-semibold text-blue-900  text-center'>Projects</h2>
        <div className='flex items-center justify-center'>

          <div className='"flex text-center items-center justify-center shadow-lg p-10 rounded-xl my-10 '> 
            <h3 className='text-lg font-medium align-middle pt-8 pd-2'>Twitter Data Analysis on COVID-19 </h3>
            <Image className='flex justify-center items-center' alt="icon1" src={design}></Image>    
            <p> • Led team in developing a Covid-19 tweet search engine, leveraging data engineering techniques to scrape and process Twitter
data. Built scalable crawling system, collecting 1.7GB dataset, and performed data cleaning for efficient analysis.
• Optimized tweet search engine with PyLucene and BERT for efficient retrieval of relevant tweets based on user queries.
Implemented indexes for improved search capabilities, ensuring accuracy and efficiency.
</p>
          </div>

          <div className='"flex text-center items-center justify-center shadow-lg p-10 rounded-xl my-10 '>
            <h3 className='text-lg font-medium align-middle pt-8 pd-2'>Timelapse Generator for Geo-Spatial Data using Big Data techniques</h3>
            <Image alt="icon1" src={consulting} width={200} height={200}></Image>    
            <p>• Deployed a web based dashboard using Vercel & React to enable the user to generate a timelapse video of satellite imagery
based on the user’s queried date range using Hadoop, computer vision and spatial techniques.
• Inferred useful insights such as area covered under each region of interest such as forest, land, buildings and roads etc. by
performing landmass segmentation and area cover analysis using QGIS and Grass GIS.
</p>
          </div>

          <div className='"flex text-center items-center justify-center shadow-lg p-10 rounded-xl my-10 '>
            <h3 className='text-lg font-medium align-middle pt-8 pd-2'>Research Paper on Neural Networks and Stereo Vision</h3>
            <Image alt="icon1" src={dode} width={200} height={200}></Image>    
            <p>• Designed and implemented a 3-step approach to provide a cost-effective solution for the harvesting robot to detect and
estimate the depth of agricultural produce in real-time using YOLOv3, a computer vision-based object detection algorithm
and the OpenCV library for stereo triangulation in Python.
• Presented the research paper at the 3rd International Conference on Data Science and Applications (ICDSA22)</p>
          </div>
        </div>
      </section>

      <hr className='text-black '></hr>

      {/* Section 3 - Skills and Education */}
      <section>
      <div className="grid grid-cols-2 gap-4">
      <div className='text-4xl font-semibold text-blue-900  text-center'>Skills
      <div className='text-base font-semibold text-black'>
        <ul >
          <li className='px-5 py-5 shadow-2xl'>Python</li>
          <li className='px-5 py-5 shadow-2xl'>Javascript</li>
          <li className='px-5 py-5 shadow-2xl'>HTML/CSS</li>
        </ul> 
      </div>
      </div>
      <div className='text-4xl font-semibold text-blue-900  text-center'>Education
      <div className='text-base font-semibold text-black'>
        <ul>
          <li className='px-5 py-5 shadow-2xl'>
            <h2>University of California Riverside</h2>
            <h3 className='font-light'>Master of Science in Computer Science</h3>
            </li>
          <li className='px-5 py-5 shadow-2xl'>
          <h2>Amrita Vishwavidyapeetham University</h2>
            <h3 className='font-light'>Bachelor of Technology in Computer Science & Engineering</h3>
          </li>
        </ul> 
      </div>
      </div>
      </div>  
      </section>

      </main>
    </div>
  );
}
