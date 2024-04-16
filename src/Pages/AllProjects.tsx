import ProjectPage from "./Project";

const artCollector_accordionData = [
    {
    question: "Description",
    answer:
      <p>This is an early version of a full-stack CRUD webapp meant for cataloguing small art collections for personal use. Its development was ordered by a member of a group of people collecting art as their hobby. <br /> <br /> It's a free, mobile-friendly and easy-to-use alternative to the unintuitive desktop-only collection managers that thus far were the only avaible option on the market. <br /> <br/> It was built using Node.js w/ jQuery and Bootstrap. </ p>
  },
  {
    question: "Features",
    answer: <ul className="answer-list"><li>Fully-fledged art catalogue app suitable for both desktop and mobile use</li> <li>Data table w/ rich customization options and a search function"</li> <li>Elegant minimalistic show page design w/ custom made carousels that automatically adapt to various images sizes"</li> <li>Two types of leaflets (png files meant for printing) that can be automatically generated for each piece"</li> <li>Raw collection data can be exported to an xlsx file on one click of a button"</li> <li>Each user can choose to make their collection either public, private or only visible upon entering a passcode"</li> <li>Forgot Password service using auto-generated token sent on user's email</li> </ul>
  },
  {
    question: "Try it!",
    answer: <p>It will be an honor to have you try out this app! <br /> <br /> For this occasion, I've provided a demo account filled with dummy data. <br /> <br />The currently public alpha version of the app is deployed on a free-tier server and thus the title page make take as long as about 60 seconds to load if the page has not been visited for a short while. I apologize for this incovenience. <br /> <br /> Username: Pies <br /> <br /> Password: psy123  <br/ > <br /> Have fun!</p>
  }
];

const olaPortfolio_accordionData = [
    {
        question: "Description",
        answer: <p>My client had a very clean vision of what she had wanted her website to look like. <br /> <br /> Based on her set of guidelines I prepared a visual UI sketch which I have then turned into code. <br /> <br /> Components such as carousel and slideshow had to be designed from scratch as the ones from UI component libraries didn't fit the aesthetic choices ordered by my client. <br /> <br /> The site was built using React w/ Tailwind.</p>
    },
    {
        question: "Features",
        answer: ""
    
    }
]

const SprawdźFodmap_accordionData = [
    {
        question: "Description",
        answer: <p> This webapp is a fruit of the labour of a small team of professionals led by me, including a translator, a UI designer and a healthcare professional. <br /> <br /> It is the first clinical diet app available in polish - the aim was to give aid to the people not fluent in english enough to be able to easily obtain crucial info on their diets in a non-clinical enviroment. <br /> <br /> The database has been compiled basing on a carefully selected set of scientific resources. <br /> <br /> The code was written by me in React w/ components from MUI.</p> 
    },
    {   question: "Features",
        answer: <ul className="answer-list"><li>Check what you should and shouldn't eat on a lowFODMAP/anti-HIT diet in a matter of literal seconds using the quick search available on the homepage</li><li>Learn the dietary restrictions category by category by working through the easily navigatble set of tables</li> <li>First such webapp available on polish market</li><li>Fully responsive design makes the webapp suitable for on-the-go usage</li></ul>
    }
]

export default function AllProjects () {
    return(
        <div className="projects-wrapper">
            <div className='section project bg-white lg:hidden pt-32'>
                <h2 className='section-header'>Recent projects.</h2>
            </div>

            <ProjectPage
            name="artCollector"
            thumbnail_url="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1713120473/my-dev-portfolio/mrbgjmepxt5svp3ymxqv.png"
            description="Personal art collection catalogue web-app"
            accordion_data={artCollector_accordionData}
            github_url="https://github.com/szczek/artCollector"
            live_url="https://artcollector.azurewebsites.net/" 
            />

            <ProjectPage
            name="Photographer's portfolio"
            thumbnail_url="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1713120473/my-dev-portfolio/nktzfpsewbiwgg58ni6w.png"
            description="Custom photographer's portfolio webiste"
            accordion_data={olaPortfolio_accordionData}
            github_url="https://github.com/szczek/ola-portfolio"
            live_url="https://olakasprzykiewicz.pl/" 
            />

            <ProjectPage
            name="SprawdźFodmap"
            thumbnail_url="https://res.cloudinary.com/dtjtqp7r1/image/upload/v1713120473/my-dev-portfolio/s4mltucdrff1xnonarv2.png"
            description="Interactive diet database & info-hub for patients with gut health issues"
            accordion_data={SprawdźFodmap_accordionData}
            github_url="https://github.com/szczek/wrazliwe-jelita"
            live_url="https://sprawdzfodmap.pl/" 
            />

        </ div>
    )
}