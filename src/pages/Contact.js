import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Contact() {
  return (
    <section>
      <Header/>
    


<div class="container mx-auto my-20 w-2/3 border border-black bg-white py-6" >
  <div class="p-5 space-y-5 shadow-xl">
    <h4 class="text-center text-3xl">Contact Us</h4>

    <form action="mailto:Abhinandan8891@gmail.com" method="post" enctype="text/plain">
      <div class="grid grid-cols-2 gap-5">
        <input
        type="text" name="name"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="First Name"
        />
        <input
          type="text" name="name"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
          placeholder="Last Name"
        /> 
        <input type="text" name="mail"
         
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Email"
        />
        <input
          type="tel"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Phone"
        />
        <textarea type="text" name="comment" 
          cols="10"
          rows="5"
          class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send Message"
        class="focus:outline-none mt-5 bg-black px-4 py-2 text-white font-bold w-full"
      />
    </form>
  </div>
</div>

     <Footer/>
      
      </section>
   
  )
}
