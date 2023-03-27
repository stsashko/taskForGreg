import React, {FC} from 'react'

interface Props {
    children: React.ReactNode
    handleClick: () => void
    loading?: boolean
}

const Button: FC<Props> = ({children, handleClick, loading = false}) => {
    const load = (
        <div className="animate-spin h-5 w-5 mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg></div>
    );

    return (
        <button type="button" className="transition-all duration-300 group bg-transparent hover:bg-white hover:text-gbcolor flex relative m-auto font-abel items-center font-normal text-xl uppercase -tracking-[0.879121px] h-[95px] pl-[80px] pr-[112px] border-white border-2 text-white" onClick={() => {
            handleClick();
        }}>{loading ? load : children}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                 stroke="currentColor" className="w-[23px] h-[23px] absolute top-[34px] right-[38px] group-hover:hover:text-gbcolor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"/>
            </svg>
        </button>
    );
};

export default Button;