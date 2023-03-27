import React, {FC} from 'react'

interface Props {
    image: string
    title: string
    description: string
}

const Card: FC<Props> = ({image, title, description}) => {
    return (
        <a className="cursor-pointer block group   max-w-[382px] mx-auto sm:max-w-none">
            <div className="max-w-[382px] relative mb-3.5 z-0">
                <div className="overflow-hidden"><img src={image} alt={title} className="relative z-10 group-hover:scale-110 transition-all duration-700" /></div>
                <span className="hidden lg:block opacity-0 group-hover:opacity-100 absolute w-[309px] h-[169px] right-[-36px] bottom-[-29px] z-0 bg-[url('/images/card-bg.svg')] bg-no-repeat bg-contain transition-all duration-300"></span>
                <span className="opacity-0 group-hover:opacity-100 flex rounded-full w-[76px] h-[76px] absolute left-1/2 top-1/2 z-20 bg-white/[.65] ml-[-38px] mt-[-38px] justify-center items-center transition-all duration-300">
                    <span className="w-[26px] h-[26px] bg-[url('/images/plus.svg')] bg-no-repeat bg-contain"></span>
                </span>
            </div>
            <strong className="block font-abel font-normal text-[26px] leading-[33px] text-white mb-[13px] relative z-10">{title}</strong>
            <span className="block max-w-[288px] font-jost font-normal text-sm text-white relative z-10 uppercase">{description}</span>
        </a>
    );
};

export default Card;