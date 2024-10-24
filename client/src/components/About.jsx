import React from 'react'
import as1 from '../assets/as1.jpg'
import as2 from '../assets/as2.jpg'

const About = () => {
    return (
        <section class="container mx-auto px-4 py-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="flex justify-center lg:justify-end">
                    <img src={as2} alt="Credit Card Image" class="w-full  object-cover rounded-lg shadow-md"/>
                </div>
                <div class="flex flex-col justify-center">
                    <h2 class="text-2xl lg:text-3xl font-bold mb-4">About Apex Card Credit Card</h2>
                    <p class="text-gray-700 mb-4">
                        Apex Card Limited was set up in 1997 to finance infrastructure, focusing primarily on project finance and mobilization of capital for private sector infrastructure development. Whether it is financial intermediation for infrastructure projects and services, or adding value through innovative products to the infrastructure value chain or asset maintenance of existing infrastructure projects, the company focused on supporting organizations to get the best credit cards.
                    </p>
                    <p class="text-gray-700 mb-4">
                        The Company’s ability to tap global as well as Indian financial resources made it the acknowledged experts in infrastructure finance. Dr. Kanhaiya Lal joined the company in 2005 and successfully expanded the business to Asset Management, Institutional Broking, and Infrastructure Debt Fund. He applied for a commercial banking license to the RBI in 2013. In 2014, the Reserve Bank of India (RBI) granted an in-principle approval to Apex Card Limited to set up a new bank in the private sector.
                    </p>
                    <p class="text-gray-700">
                        Following this, the Apex Card Limited divested its infrastructure finance assets and liabilities to a new entity - Apex Card Bank - through demerger. Thus, Apex Card Bank was created by demerger of the infrastructure, lending business of Apex Card to Apex Card Bank in 2015.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                <div class="flex flex-col justify-center order-2 lg:order-1">
                    <h3 class="text-2xl lg:text-3xl font-bold mb-4">We help you to get your best Work Done.</h3>
                    <p class="text-gray-700 mb-4">
                        The Apex Card Credit Card not only takes care of your daily credit needs but also helps you with any emergency cash requirements. Besides this, you can earn accelerated rewards on your spends, a complimentary health membership, discounts and cashbacks on various categories, as well as easy EMI finance options.
                    </p>
                </div>
                <div class="flex justify-center lg:justify-start order-1 lg:order-2">
                    <img src={as1} alt="Person holding a Credit Card" class="w-full object-cover rounded-lg shadow-md"/>
                </div>
            </div>
        </section>
    
  )
}

export default About