
const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className='text-center' >
        <p className='text-2xl font-medium text-gray-800' >Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3' >Your first order! Stay updated on the latest trends, exclusive offers, and new arrivals. Join our community and never miss out on the perfect timepiece for every occasion.</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter your email" required/>
            <button className='bg-black text-white text-xs px-10 py-4' type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox