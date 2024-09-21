import Badge from "./Components/Badge";
import HeaderLeft from "./Components/HeaderLeft";
import CardProject from "./Components/CardProject";
import projects from "./infoProject";
import badges from "./infoContact";

function App() {
  return (
    <>
      <div className="fixed top-0 z-[-2] h-full w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

      <HeaderLeft />
      <main className="mt-24 mx-16 lg:mx-auto ">
        <section id="about" className=" mx-auto w-full lg:w-[740px] pt-8 mb-12">
          <h1 className="flex font-extrabold text-4xl lg:text-5xl items-center flex-row mb-2 lg:mb-5">
            Hey, Im José Serge 👋
          </h1>
          <p className="mb-4 lg:leading-6 text-justify lg:text-lg">
            <span className=" text-amber-500 text-3xl font-black">+2</span>
            <span className=" text-xl font-semibold">
              {" "}
              años de experiencia.
            </span>{" "}
            <strong className="bg-gradient-to-r from-cyan-400 to-indigo-700 bg-clip-text text-transparent lg:text-xl ">
              Desarrollador de Software y Programador Web.
            </strong>{" "}
            <span className="font-semibold ">Barranquilla, Colombia 🇨🇴.</span>{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quis
            recusandae, fugiat voluptates neque voluptatum aspernatur veritatis
            facere quisquam, repellat atque ab facilis ipsa, a ex aliquam
            consequuntur molestias mollitia.
          </p>

          <div className=" mt-6 flex ">
            {badges.map((data) => {
              return <Badge key={data.name} name={data.name} icon={data.icon} url={data.url} />;
            })}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto my-4 w-full mt-16 lg:w-[740px]"
        >
          <h3 className="font-bold text-2xl text-stone-800">My Projects</h3>
          <p className=" mt-3 mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            soluta officia doloribus fugit nesciunt odit eaque deserunt error
            similique, rerum at cupiditate nobis mollitia voluptas pariatur
            aspernatur officiis quo obcaecati?
          </p>
          {projects.map((project) => {
            return <CardProject key={project.date} project={project} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
