

export default function AboutPage (){
    return(
        <div className='section about bg-grey px-16'>
          <h2 className='section-header text-center'>About me. </h2>
          <div className='px-4 py-8 text-2xl flex flex-col items-center sm:text-3xl md:text-4xl lg:text-5xl'>

            <div className="text-left float-left pb-8 py-[20%] xs:py-[25%] sm:py-[15%]">
              <span>My name is Ignacy and I'm a </span> 
              <span className="text-xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold">full-stack</span> web developer.
            </div>
            <div className="text-right float-right pb-8 xxs:py-[20%] xs:py-[25%] sm:py-[15%]"> 
              <span> My main stack is <span className="text-xl xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold">Node.js</span> and <span className="text-xl xxs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold">React</span> w/ various UI frameworks.</span>
            </div>
            
            <div className=" text-left float-left pb-8 xxs:py-[20%] xs:py-[25%] sm:py-[15%]">
              <span>I'm also experienced in <span className="text-xl xxs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold">designing UIs</span> tailored to my clients' needs.</span>
            </div>
          </div>
        </div>
    )
}