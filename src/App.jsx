import './App.css'

function App(){
  return(
    <>
    <header class="bg-white shadow">
    <div class="container mx-auto  flex items-center justify-between px-6 py-4 ">
      <h1 class="text-2xl font-serif font-bold">MIRACLE FLOWERS</h1>
      <nav class="space-x-6">
        <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Sign In</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">My Account</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
        <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
    </div>
  </header>

  <div class="bg-gray-100 p-2 min-h-screen flex items-center justify-center">
  <div class="container mx-auto flex flex-wrap md:flex-nowrap items-start gap-8">
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        src="https://cdn01.pinkoi.com/product/ZSJxR6Vb/1/640x530.jpg"
        alt="Menu Board"
        class="w-full object-cover  rounded-lg shadow-lg"
      />
    </div>

    <div class="w-full md:w-1/2 text-gray-800 text-center mt-44">
      <h1 class="head list-decimal pl-6 space-y-2 text-gray-600">Spring Flowers</h1>
      <h3 className='heady list-decimal pl-6 space-y-2'>Brighten Someone's Day!</h3>
    </div>
  </div>
</div>

  <section class="bg-pink-200 py-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 class="h text-lg font-semibold mb-2">Florist's Choice Bouquets</h3>
        <p class="he">Not sure what you want?<br />
           Let our floral designers help you.</p>
      </div>
      <div>
        <h3 class="h text-lg font-semibold mb-2">Roses</h3>
        <p class="he">Roses are timeless and symbolize <br /> love and extravagance.</p>
      </div>
      <div>
        <h3 class="h text-lg font-semibold mb-2">Luxury Flowers</h3>
        <p class="he">Crafted with care <br />to stun and delight.</p>
      </div>
    </div>
  </section>

  <section class="bg-white py-16">
  <div class="container mx-auto text-center">
    <h2 class="text-3xl font-serif font-bold mb-4">This month specials</h2>
    <div class="mb-10">
      <hr class="border-gray-300 w-16 mx-auto"/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdfU23P8yQ3ZWWPUk1cbFBW_H9s91LBVU0MxM_2_jisrL5hgAwDZH3-302bXPVvOMMJs&usqp=CAU" alt="Spring Rose and Lily" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Spring Rose and Lily</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£39.98</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://media.istockphoto.com/id/485733243/photo/bouquet-of-spring-flowers.jpg?s=612x612&w=0&k=20&c=W2iF8wRd912Z3NKckH9qZ8uLX9VCm4PIJmhFZD5y7lk=" alt="Spring Meadow" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Spring Meadow</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£44.99</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9vTp0iW3KhYq7BrHcLBf-Url9k-7dSHZ7WSI0vKd3fP9sl_woS0C_66Nac5ibk04DGA&usqp=CAU" alt="Desire" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Desire</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£36.98</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyzLBe6HyHWaF5yfXUwqVYulNZfkRliig8A&s" alt="Burst of Spring" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Burst of Spring</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£24.98</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://media.bunches.co.uk/products/fblosl-1.jpg" alt="Spring Cheer" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Spring Cheer</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£34.99</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://m.media-amazon.com/images/I/713ie3vtuiL._AC_UF894,1000_QL80_.jpg" alt="Vintage Rose" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Vintage Rose</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£39.98</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://res.cloudinary.com/dizexseir/image/upload/w_400,c_limit,f_auto,q_auto/v1626775689/ProImages/f2t7oayjrnow12axk8el.jpg" alt="Vintage Rose" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Silk Rose</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£39.98</p>
      </div>
      <div class="bg-gray-100 shadow-md rounded-lg p-4">
        <img src="https://i.etsystatic.com/27551697/r/il/2e1c6f/4267822946/il_570xN.4267822946_bdxu.jpg" alt="Vintage Rose" class="rounded-md mb-4"/>
        <h3 class="text-lg font-semibold">Peach Daisy</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit.</p>
        <p class="text-lg font-bold mt-2">£39.98</p>
      </div>
    </div>
  </div>
</section>

<section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left m-20">
          <h2 className="text-2xl font-bold text-center mb-6 font-mono">About us</h2>
            <p className="mb-6 font-serif">
              We believe that flowers in the UK have been overpriced for too long and that UK flower lovers are not getting what they deserve in terms of flower and bouquet quality.
            </p>
            <p className="italic">Jane Doe</p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://www.rhapsodyfloraldesign.co.uk/Image.aspx?websiteid=724&filename=product/1867682670large03.jpg&newheight=384&newWidth=384&ver=2&cache=1"
              alt="Bouquet of Flowers"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Reviews</h2>
          <div className="text-center">
            <blockquote className="italic text-lg">
              “Thank you for a first-class service. The flowers are beautiful and well packed. My wife was delighted. Thanks again, George.”
            </blockquote>
            <p className="mt-4 text-sm">- George</p>
          </div>
        </div>
      </section>

      <div class="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden">
    <div class="relative">
      <img src="https://shop.mydgarden.com/cdn/shop/products/rose_0d1e2117-d515-4d71-bd1f-cb11462d746f_grande.jpg?v=1523292236" alt="Flowers" class="w-full h-full object-cover"/>
    </div>

    <div class="p-8">
      <h2 class="text-center text-lg font-serif uppercase text-gray-700 mb-8">Contact</h2>
      
      <div class="text-sm text-gray-600 space-y-4">
        <div>
          <h3 class="font-medium">Address</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 class="font-medium">Telephone</h3>
          <p>01234 567 890</p>
        </div>
      </div>

      <form class="mt-8 space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-200"/>
          <input 
            type="email" 
            placeholder="Email" 
            class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-200"/>
        </div>
        <textarea 
          placeholder="Message" 
          rows="4" 
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-200"></textarea>
        <button 
          type="submit" 
          class="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Send
        </button>
      </form>

      <div class="flex space-x-4 mt-8 justify-center">
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22,12a10,10,0,1,0-10,10A10,10,0,0,0,22,12Zm-6.9.45H15.1v7H12.1v-7H10.2V9.8H12.1V8.05c0-1.95.88-3.1,3.3-3.1h1.4V8.45H15.6c-.5,0-.7.23-.7.7V9.8h1.9Z"></path>
          </svg>
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.22,12A10,10,0,1,0,12,22a10,10,0,0,0,10.22-10ZM10.1,18.24V8.8L16.5,13.52Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
export default App