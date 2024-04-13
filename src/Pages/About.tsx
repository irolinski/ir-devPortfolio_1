

export default function AboutPage (){
    return(
        <div className='section about bg-grey px-16'>
          <h2 className='section-header'>About me. </h2>
          <div className='h-96 px-4 py-8 text-lg'>

          <div className="text-left float-left pb-8"><span>My name is Ignacy and I'm a </span> 
            <span className="text-xl font-bold">full-stack</span> web developer.
          </div>

          <div className="text-right float-right pb-8"> 
            <span> My main stack is <span className="text-xl font-bold">Node.js</span> and <span className="text-xl font-bold">React</span> w/ various UI frameworks.</span>
          </div>
          
          <div className=" text-left float-left pb-8">
            <span>I'm also experienced in <span className="text-xl font-bold">designing UIs</span> tailored to my clients' needs.</span>
          </div>
          </div>
        </div>
    )
}