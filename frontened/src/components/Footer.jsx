import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600' >
                At Timeluxe, we believe in the art of timeless elegance. Our watches are crafted with precision and passion, designed to complement your style and stand the test of time. Explore our collection and experience the perfect blend of tradition and innovation.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+212 644-560008</li>
                    <li>contact@timeluxe.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright {new Date().getFullYear()}@ timeluxe.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;