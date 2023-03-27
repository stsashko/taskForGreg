import React, {FC, useState} from 'react'
import TabsCategory from "@/components/TabsCategory";
import Card from "@/components/Card";
import Button from "@/components/Button";
import {ourWorks} from "@/api/ourWorksApi";

interface IWorks {
    id: number
    categories: number[]
    image: string
    title: string
    description: string
}

interface Props {
    title: string
    description: string
    works: IWorks[] | []
}

const Page:FC<Props> = ({title, description, works}) => {
    const [cat, setCat] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<IWorks[] | []>(works);
    const [buttonLoadShow, setButtonLoadShow] = useState<boolean>(true);
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);

    const handleChangeCategory = async (catId: number) => {
        try {
            setPage(1);
            setCat(catId);
            let {works, total} = await ourWorks(1, catId);
            setButtonLoadShow(!(works.length === total));
            setData(works);
        } catch (e) {
        }
    }

    const fetchWordsMore = async (page: number, catId: number) => {
        try {
            setButtonLoading(true);
            let {works, total} = await ourWorks(page, catId);
            let newData = [
                ...data,
                ...works,
            ];
            setData(newData);
            setButtonLoadShow(!(newData.length === total));
            setButtonLoading(false);
        } catch (e) {
        }
    }

    const handleMore = async () => {
        setPage(page + 1);
        await fetchWordsMore(page + 1, cat);
    }

    return (
        <section className="bg-gbcolor">
            <div className="m-auto max-w-[1400px] pt-[99px] px-[50px] pb-28">
                <h1 className="font-abel font-normal mb-[14px] uppercase text-6xl text-white -tracking-[2.63736px] leading-[76px]">{title}</h1>
                <p className="max-w-[486px] text-white font-jost text-[26px] leading-[38px] mb-[68px]">{description}</p>
                <TabsCategory
                    categories={[
                        {id: 1, title: 'UX / UI DESIGN'},
                        {id: 2, title: 'WEB DEVELOPMENT'},
                        {id: 3, title: 'UE-COMMERCE'},
                        {id: 4, title: 'BRANDING'},
                    ]}
                    currentId={cat}
                    selectCategory={async (id) => {
                        await handleChangeCategory(id);
                    }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-14 lg:gap-24 lg:[&>*:nth-child(3n+2)]:mt-[40px] mb-[110px]">
                    {data.map(({id, image, title, description}) => (
                        <Card key={id} image={image} title={title} description={description} />
                    ))}
                </div>
                {buttonLoadShow && (
                    <Button handleClick={handleMore} loading={buttonLoading}>LOAD MORE</Button>
                )}
            </div>
        </section>
    );
};

export default Page;