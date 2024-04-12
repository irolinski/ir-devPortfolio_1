import ProjectPage from "./Project";

const project1_accordion = [
    {
    question: "App features",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
  },
  {
    question: "Further development",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework."
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
            description="Opis ipsum dolor sit amet consectetur, adipisicing elit. Corporis impedit alias magnam"
            accordion_data={project1_accordion}
            github_url="github.com"
            live_url="artcollector.com" 
            />

            <ProjectPage
            name="Custom-made photographer's portfolio"
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