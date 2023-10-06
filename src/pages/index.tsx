import Image from 'next/image'
import Navbar from '../../components/Navbar'
import HeroBanner from '../../components/HeroBanner'
import Category from '../../components/Category'
import Internship from '../../components/Internship'
import Courses from '../../components/Courses'
import Reviews from '../../components/Reviews'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
    <div >
      <Navbar />
      <HeroBanner />
      <Category/>
      <Internship/>
      <Courses/>
      <Reviews />
      <Footer/>



    </div>
    </>
  )
}
