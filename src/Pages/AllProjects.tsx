import ProjectPage from "./Project";

const project1_accordion = [
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

export default function AllProjects () {
    return(
        <>
            <div className='section project bg-white'>
                <h2 className='section-header'>Recent projects.</h2>
            </div>

            <ProjectPage
            name="artCollector"
            thumbnail_url="https://ostatniatawerna.pl/wp-content/cache/thumb/stub_7fbed6b7fe526ae_730x452.jpg"
            description="Personal art collection catalogue web-app"
            accordion_data={project1_accordion}
            github_url="github.com"
            live_url="artcollector.com" 
            />

            <ProjectPage
            name="Photographer's portfolio"
            thumbnail_url="https://ostatniatawerna.pl/wp-content/cache/thumb/stub_7fbed6b7fe526ae_730x452.jpg"
            description="Opis ipsum dolor sit amet consectetur, adipisicing elit. Corporis impedit alias magnam"
            accordion_data={project1_accordion}
            github_url="github.com"
            live_url="artcollector.com" 
            />

            <ProjectPage
            name="SprawdźFodmap"
            thumbnail_url="https://ostatniatawerna.pl/wp-content/cache/thumb/stub_7fbed6b7fe526ae_730x452.jpg"
            description="Opis ipsum dolor sit amet consectetur, adipisicing elit. Corporis impedit alias magnam"
            accordion_data={project1_accordion}
            github_url="github.com"
            live_url="artcollector.com" 
            />

        </>
    )
}