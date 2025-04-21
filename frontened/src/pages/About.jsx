/* eslint-disable no-unused-vars */
import React from 'react';
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import { assets } from "../assets/assets";


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="About Image"
          className="w-full md:max-w-[400px] rounded"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">
            {`TimeLuxe was born out of a timeless elegance and a desire to
            redefine the way people experience luxury watches. Our journey began with a
            simple vision: to create a platform where watch enthusiasts can effortlessly
            discover, explore, and own exquisite timepieces that reflect their unique style`}
          </p>
          <p className="">
            {` Since our inception, we've dedicated ourselves to curating a collection of premium watches that blend craftsmanship, innovation, and sophistication. From classic designs to modern masterpieces, each watch is carefully selected to cater to the discerning tastes of our customers.`}
          </p>
          <strong className="text-gray-800">Our Mission</strong>
          <p>
            {`At Timeluxe, our mission is to inspire confidence and elevate your style with every tick of the clock. We’re committed to delivering an unparalleled shopping experience, from seamless browsing and personalized recommendations to prompt delivery and exceptional customer service.`}
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-8 flex flex-col gap-5">
          <strong>Quality Assurance:</strong>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-8 flex flex-col gap-5">
          <strong>Convenience:</strong>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-8 flex flex-col gap-5">
          <strong>Exceptional Customer Service:</strong>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About