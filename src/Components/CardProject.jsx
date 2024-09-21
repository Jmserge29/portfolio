import {HomeModernIcon} from "@heroicons/react/24/solid"
import tailwindIcon from "../assets/tailwind.svg"
import BadgeSkills from "./BadgeSkills"

function CardProject({project}) {
  return (
    <div className="mt-8">
      {/* subtittle */}
      <span className=" text-gray-500 text-sm font-semibold flex content-center"><HomeModernIcon className=" size-5 mr-2 "/>{project.category}</span>
      {/* tittle */}
      <h3 className=" text-xl font-bold leading-10 ">Aplication Servering Todo List - React.Js </h3>
      {/* paragraph description */}
      <p className="mb-5 text-base text-justify">{project.description}</p>
      {/* badge skills*/}
      <div className="mb-5 flex gap-x-3">
        <span className="flex items-center font-semibold text-slate-500 text-sm">Skills: </span>
      {project.skills.map((skill) => {
        console.log(skill)
        return(
          <BadgeSkills tecnology={skill} icon={skill.icon}/>
        )
      })}
      </div>
      {/* image */}
      <img className="rounded-lg cursor-pointer w-full h-full" src={project.images} alt="project-1" />
      {/* footer card */}
      <div className="my-3">
        <span className=" text-gray-500 ml-1 text-sm font-medium">{project.date}</span>
      </div>
      <hr />
    </div>
  )
}

export default CardProject