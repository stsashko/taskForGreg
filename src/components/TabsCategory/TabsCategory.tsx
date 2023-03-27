import React, {FC} from 'react'

interface Props {
    currentId: number,
    categories: {
        id: number
        title: string
    }[]
    selectCategory: (id: number) => void
}

const TabsCategory: FC<Props> = ({categories, currentId, selectCategory}) => {
    return (
        <nav className="mb-[25px] flex flex-wrap justify-center text-center flex-col lg:justify-start lg:flex-row lg:space-x-[43px] lg:text-left">
            {[{id: 0, title: 'All'}, ...categories].map(({id, title}) => (
                <a key={id} className={`text-white uppercase font-jost font-normal text-sm border-b-2 hover:underline lg:hover:no-underline lg:hover:border-white ${id === currentId ? 'underline lg:no-underline border-transparent lg:border-white' : 'border-transparent'}`} href="#" onClick={(e) => {
                    e.preventDefault();
                    selectCategory(id);
                }}>{title}</a>
            ))}
        </nav>
    );
};

export default TabsCategory;