import axios, {mock} from "./axios-instance";
import {getOurWorksFaker} from "@/api/dataFaker";

const delay = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 300);
    });
}

mock.onGet("/our-works").reply(async ({params}) => {
    await delay();
    const works = getOurWorksFaker().filter(({categories}) => (params.catId ? categories.includes(params.catId) : true));
    const pageNumber = params.page || 1;
    const pageSize = pageNumber === 1 ? 9 : 6;
    const add = pageNumber === 1 ? 0 : 3;
    return [
        200,
        {
            works: works.slice((pageNumber - 1) * pageSize + add, pageNumber * pageSize + add),
            total: works.length
        }
    ]
});



interface IData {
    data: {
        works: {
            id: number
            categories: [number]
            image: string
            title: string
            description: string
        }[] | [],
        total: number
    }
}

export const ourWorks = async (page?:number, catId?:number) => {
    try {
        const result: IData = await axios.get(`our-works`, {
            params: {
                page: page || 0,
                catId: catId || 0
            }
        });
        return {
            works: result.data.works, total: result.data.total
        };
    } catch (e) {

    }

    return {
        works: [], total: 0
    };
}