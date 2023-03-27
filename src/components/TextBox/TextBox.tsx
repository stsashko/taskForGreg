import React from 'react'
import {NextComponentType} from 'next'

const TextBox: NextComponentType = () => {
    return (
        <section className="pt-[111px] pb-[127px]">
            <div className="m-auto max-w-[1400px] px-[50px]">
                <div className="max-w-[1085px] mx-auto flex flex-col md:flex-row md:space-x-28 mb-[42px]">
                    <div className="md:basis-full pt-[7px]">
                        <strong className="block text-gbtitle mb-[8px] uppercase font-jost font-normal text-xl leading-7">DESCRIPTION:</strong>
                        <p className="text-gbtext font-abeezee font-normal text-lg leading-[21px] mb-[23px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                    </div>
                    <div className="md:basis-auto w-[270px]">
                        <strong className="block text-gbtitle uppercase font-jost font-normal text-xl leading-7 mb-[8px]">SERVICES:</strong>
                        <ul className="text-gbtext font-abeezee font-normal text-lg leading-[21px]">
                            <li>- Branding</li>
                            <li>- UX / UI Design</li>
                            <li>- Web Development</li>
                            <li>- Maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1085px] mx-auto flex flex-col md:flex-row md:space-x-28">
                    <div className="md:basis-full pt-[7px]">
                        <strong className="block text-gbtitle mb-[8px] uppercase font-jost font-normal text-xl leading-7">WORKING PROCESS:</strong>
                        <p className="text-gbtext font-abeezee font-normal text-lg leading-[21px] mb-[23px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
                            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </p>
                        <p className="text-gbtext font-abeezee font-normal text-lg leading-[21px] mb-[23px]">Excepturi sint occaecati  cupiditate non provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. </p>
                    </div>
                    <div className="md:basis-auto w-[270px]">
                        <strong className="block text-gbtitle uppercase font-jost font-normal text-xl leading-7 mb-[8px]">KEY TECHNOLOGIES:</strong>
                        <ul className="text-gbtext font-abeezee font-normal text-lg leading-[21px]">
                            <li>- WordPress</li>
                            <li>- ACF</li>
                            <li>- CloudFlare</li>
                            <li>- Woocommerce</li>
                            <li>- SMTP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextBox;