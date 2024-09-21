import { EnvelopeIcon } from "@heroicons/react/24/solid"

function Badge({name, icon, url}) {
  return (
    <a href={name ? url : "#"} target='_blank' className={` hover:shadow-indigo-600 hover:shadow-2xl transition transform hover:-translate-y-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  shadow-blue-500/50 shadow-md rounded-3xl mb-2 inline-block px-6 lg:px-4 py-2  font-semibold  ml-2 cursor-pointer`}>
      <div className='flex justify-center content-center items-center text-sm'>
        {icon ? <img className=' size-5 mr-2' src={icon} alt="" />: <EnvelopeIcon width={16} height={16}  className="mr-1"/>}
          {name}
      </div>
    </a>
  )
}

export default Badge