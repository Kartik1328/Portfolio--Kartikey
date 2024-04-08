// use client
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillInstagram, AiFillLinkedin, AiFillGithub,} from 'react-icons/ai';
import Image from 'next/image';
// for importing any image in next js code we have to write this import line

export default function Home() {
  return (
    
    <main className='px-10 bg-white md:px-20 lg:px-40'>
<section className='min-h-screen'>
  <nav className='py-10 mb-10 flex justify-between  '>
    <h1 className='text-xl font-bold'>My Portfolio</h1>
    <ul className='flex items-center'>
      <li>
      <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
      </li>
      <a 
      className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a>
    </ul>
  </nav>
  <div className='text-center p-10'>
  <h2 className='text-green-500 text-5xl py-2 font-medium md:text-6xl'>Kartikey Srivastav</h2>
    <h3 className=' font-semibold py-2 text-xl md:text-2xl'>FrontEnd Developer & Designer</h3>
    <p className='text-md py-3 leading-8 text-green-900 md:text-xl max-w-xl mx-auto'>"Welcome to my creative playground, where design and development converge to craft captivating web experiences."</p>
  </div>

  <div className='text-4xl flex items-center justify-center gap-6 py-1 text-gray-800 cursor-pointer'>
    <AiFillGithub/>
    <AiFillLinkedin/>
    <AiFillInstagram/>
  </div>
  
  <div className="flex justify-center items-center h-screen -my-10">
  <div className="w-80 h-80 rounded-full overflow-hidden">
  <Image
        src="/MyPhoto.png" // Path to your image in the public directory
        alt="My Image"
        width={450} // Desired width of the image
        height={450} // Desired height of the image
      />
      </div>
  </div>
</section>

{/* NOW THE CONTENT PART  */}

<section>
  <div>
    <h3 className='text-3xl py-1'>Feild of Intrests</h3>
    <p className='text-md py-2 leading-8 text-gray-800'>
    Ever since I began my engineering journey, I've been really interested in  <span className='text-green-500'>Graphic Design.</span> I find <span className='text-green-500'>Front-end</span> development exciting, and it drives me to explore the latest technologies. My main focus has always been creating <span className='text-green-500'>User-friendly</span> interfaces.
    </p>
  </div>

  <div className='lg:flex gap-10 flex-1'>

    {/* first intrest */}
    <div className='text-center shadow-xl p-10 rounded-xl my-10 '>
    <div className='overflow-hidden flex justify-center items-center'>
      <Image className='w-40 h-40'
        src="/design.png" 
        width={150} // Desired width of the image
        height={150} // Desired height of the image
      />
    </div>
    <h3 className='text-2xl font-medium pt-8 pb-2'>Graphic Designing</h3>
    <p className='py-2  mx-auto'>
      Creating elegant designs according to the Core Design theory.
    </p>
    <h4 className='text-green-700 py-4 text-xl'>Design tools I use:</h4>
    <p className='text-gray-800 py-1'>Adobe Illustrator</p>
    <p className='text-gray-800 py-1'>Canva</p>
    <p className='text-gray-800 py-1'>Figma</p>
    </div>
{/* ----------------------------------------------------------------------- */}
    {/* second intrest */}
    <div className='text-center shadow-xl p-10 rounded-xl my-10'> 
    <div className='overflow-hidden flex justify-center items-center'>
      <Image className='w-40 h-40'
        src="/code.png" 
        width={150} // Desired width of the image
        height={150} // Desired height of the image
      />
    </div>
    <h3 className='text-2xl font-medium pt-8 pb-2'>Front-End Development</h3>
    <p className='py-2'>
    Creating beautiful and user-friendly Web Designs by following core principles for front-end development.
    </p>
    <h4 className='text-green-700 py-4 text-xl'>Design Tools I use:</h4>
    <p className='text-gray-800 py-1'>HTM CSS JS</p>
    <p className='text-gray-800 py-1'>React Js, Angular</p>
    <p className='text-gray-800 py-1'>Wordpress, Tailwind</p>
    <p className='text-gray-800 py-1'>APIs</p>
    </div>

    {/* -------------------------------------------------------------------------- */}

    {/* third intrest */}
    <div className='text-center shadow-xl p-10 rounded-xl my-10'>
    <div className='overflow-hidden flex justify-center items-center -my-10'>
      <Image className='w-64 h-64'
        src="/mobile UI (1).png" 
        width={200} // Desired width of the image
        height={200} // Desired height of the image
      />
    </div>
    <h3 className='text-2xl font-medium pt-8 pb-2 my-2'>UI Design</h3>
    <p className='py-2'>
    Crafting visually pleasing user interfaces while adhering to core design principles in UI design.
    </p>
    <h4 className='text-green-700 py-4 text-xl'>Design tools I use:</h4>
    <p className='text-gray-800 py-1'>Figma</p>
    <p className='text-gray-800 py-1'>Canva</p>
    </div>

    {/* --------------------------------------------------------------------------- */}

  </div>
</section>

<section>
  <div>
  <h3 className='text-3xl py-1'>Projects/Portfolio</h3>
  <p className='text-md py-2 leading-8 text-gray-800'>
  Lately, I've been deeply involved in a variety of projects, including <span className='text-green-500'>graphic design, web development, and mobile UI design</span>. 
  I've had the chance to create eye-catching graphics, develop functional websites, and design intuitive mobile user interfaces.
    </p>
  </div>

{/* NOW IMAGES SECTION */}
  <div>
    <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className='basis-1/3 flex-1'>
        <Image className='rounded-lg object-cover' 
        src="/GD1.png" // Path to your image in the public directory
        alt="My Image"
        width={450} // Desired width of the image
        height={450} // Desired height of the image
        layout='responsive'
      />
      </div>

       <div className='basis-1/3 flex-1'>
       <Image className='rounded-lg object-cover' 
        src="/GD2.png" // Path to your image in the public directory
        alt="My Image"
        width={450} // Desired width of the image
        height={450} // Desired height of the image
        layout='responsive'
      />
       </div>
     
     <div className='basis-1/3 flex-1'>
     <Image className='rounded-lg object-cover' 
        src="/web3.png" // Path to your image in the public directory
        alt="My Image"
        width={450} // Desired width of the image
        height={450} // Desired height of the image
        layout='responsive'
      />
     </div>

     <div className='basis-1/3 flex-1'>
        <Image className='rounded-lg object-cover' 
        src="/web4.png" // Path to your image in the public directory
        alt="My Image"
        width={450} // Desired width of the image
        height={450} // Desired height of the image
        layout='responsive'
      />
      </div>

    </div>
  </div>
</section>

      <div >
        
      </div>
    </main>

    
  )

  
}