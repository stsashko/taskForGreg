import React, {FC} from 'react'

interface Props {
    data: [
        {title: string, text: string},
        {title: string, text: string},
        {title: string, text: string}
    ]
}

const InfoBox: FC<Props> = ({data}) => {
    return (
        <section className="bg-gbcolorinfo pt-[21px] pb-[16px]">
            <div className="m-auto max-w-[1400px] px-[50px]">
                <ul className="flex flex-col lg:flex-row text-center lg:text-left">
                    {data.map(({title, text}, k) => {
                        return (
                            <li key={title} className={`${k === 0 ? 'lg:mr-auto' : (k === 1 ? 'lg:ml-[38px]' : 'lg:ml-auto')}`}>
                                <span className="inline lg:block uppercase text-gbtitle font-jost font-normal text-base">{title} </span>
                                <strong className="inline block lg:block font-abeezee font-normal text-xl leading-6 text-gbtext mt-[-2px]">{text}</strong>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default InfoBox;