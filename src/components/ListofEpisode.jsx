import { ArrowUpOnSquareIcon } from "@heroicons/react/16/solid"

function ListofEpisode() {
  return (
    <div className=" h-[220px] relative bg-blueblack p-4 w-full lg:w-[45%]  rounded-lg justify-between flex ">
        <div className="flex flex-col justify-around">
            <h1 className='text-gray-400 text-[20px] whitespace-nowrap'>list ofepisodes:</h1>
            <h2 className='text-white'>00-se01001</h2>
            <h2 className="text-white">01-se01001</h2>
        </div>
        <div className="flex flex-col justify-around mt-8 ">
        <div><ArrowUpOnSquareIcon className="w-[24px] h-[24px] text-gray-400 absolute right-[20px] top-8 "/></div>
        <h4 className="date--episode"> december 01 2024</h4>
        <h4 className="date--episode">october 03 2020</h4>
        </div>

    </div>
  )
}

export default ListofEpisode