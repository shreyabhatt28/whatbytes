import Image from 'next/image'

const QuickStats = ({details}) => {
    return ( 
        <div className="w-full border-b border-t border-gray-300  px-8 py-4 flex flex-col">
        <h1 className="font-bold text-sm ml-4 mb-2">Quick Statistics</h1>
        <div className="grid grid-cols-3 h-[100px]">
            <div className="flex items-center justify-center ">
                <div className=" hidden w-[60px] h-[60px] rounded-full bg-gray-300 md:flex items-center justify-center">  
                    <Image src="/images/html5.svg" width={40} height={40} alt="html 5"/>
                </div>
                <div className="ml-4">
                    <h1 className="font-bold text-xl">{details.rank}</h1>
                    <p className="text-gray-400">Your Rank</p>
                </div>
            </div>
            <div className=" flex items-center justify-center border-l border-r border-gray-300 " >
                <div className=" hidden w-[60px] h-[60px] rounded-full bg-gray-300 md:flex items-center justify-center ">
                    <Image src="/images/html5.svg" width={40} height={40} alt="html 5"/>
                </div>
                <div className="ml-4">
                    <h1 className="font-bold text-xl">{details.percentile}%</h1>
                    <p className="text-gray-400">Percentile</p>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="hidden w-[60px] h-[60px] rounded-full bg-gray-300 md:flex items-center justify-center ml-4">
                    <Image src="/images/html5.svg" width={40} height={40} alt="html 5"/>
                </div>
                <div className="ml-4 ">
                    <h1 className="font-bold text-xl">{details.score}/15</h1>
                    <p className="text-gray-400">Correct Answers</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default QuickStats;