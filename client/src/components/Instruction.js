import React from "react";
import { useEffect } from "react";
import { DarkThemeToggle, Flowbite, figcaption, Timeline, Button, Card } from 'flowbite-react';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Instructioncomponent() {
    useEffect(() => {
        Aos.init();
    }, [],)
    return (
        <>
            {/* <div>
                <p class="text-3xl">Follow the Instruction </p>
            </div>
            <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-13 md:grid-cols-2">
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-aos="fade">STEP1</h3>
                        <p class="my-4 font-light" data-aos="flip-left">"Scan the unique id present on the cart"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3" data-aos="flip-left"  data-aos-delay="1000">
                        <img class="rounded-full w-13 h-13" src="./Images/qr-code-scanning-vector-illustration-600w-1303670605.webp" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-aos="fade">STEP2</h3>
                        <p class="my-4 font-light"  data-aos="flip-left">"Enter the password the your phone number "</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3" data-aos="flip-left"  data-aos-delay="1000">
                        <img class="rounded-full w-13 h-13" src="./Images/password.png" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-aos="fade">Step4</h3>
                        <p class="my-4 font-light"   data-aos="flip-left">"Start shopping the item and make sure that the items are proberly updated by the cart"</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3" data-aos="flip-left"  data-aos-delay="1000">
                        <img class="rounded-full w-13 h-13" src="./Images/shopping.jpg" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white"  data-aos="fade">STEP4</h3>
                        <p class="my-4 font-light"   data-aos="flip-left">"Exit the cart by clicking on Checkout botton on the page ."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center space-x-3" data-aos="flip-left"  data-aos-delay="1000">
                        <img class="rounded-full w-13 h-13" src="./Images/logout.png" alt="profile picture"></img>
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div></div>
                            <div class="text-sm font-light text-gray-500 dark:text-gray-400"></div>
                        </div>
                    </figcaption>
                </figure>
            </div> */}
            {/* <div className="grid grid-rows-2 grid-cols-1 gap-4 my-4 col-span-4 sm:max-w-sm" >
                <div>

                    <Timeline horizontal={true}>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time>

                                </Timeline.Time>
                                <Timeline.Title>
                                    STEP1
                                </Timeline.Title>
                                <Timeline.Body>
                                    <div className="min-w-max sm:max-w-screen-sm">
                                        <Card
                                            horizontal={true}
                                            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Scan the QR code
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Scan the unique id present on the cart
                                            </p>
                                        </Card>
                                    </div>
                                </Timeline.Body>
                                <Button color="gray">
                                    Learn More

                                </Button>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time>

                                </Timeline.Time>
                                <Timeline.Title>
                                    STEP 2
                                </Timeline.Title>
                                <Timeline.Body>
                                    <div className="min-w-max">
                                        <Card
                                            horizontal={true}
                                            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Enter Cerdensials
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Scan the unique id present on the cart
                                            </p>
                                        </Card>
                                    </div>
                                </Timeline.Body>
                                <Button color="gray">
                                    Learn More

                                </Button>
                            </Timeline.Content>
                        </Timeline.Item>

                    </Timeline>
                </div>
                <div>

                    <Timeline horizontal={true}>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time>

                                </Timeline.Time>
                                <Timeline.Title>
                                    STEP 3
                                </Timeline.Title>
                                <Timeline.Body>
                                    <div className="min-w-max">
                                        <Card
                                            horizontal={true}
                                            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Start shopping
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                Scan the unique id present on the cart
                                            </p>
                                        </Card>
                                    </div>
                                </Timeline.Body>
                                <Button color="gray">
                                    Learn More

                                </Button>
                            </Timeline.Content>
                        </Timeline.Item>
                        <Timeline.Item>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time>

                                </Timeline.Time>
                                <Timeline.Title>
                                    STEP 4
                                </Timeline.Title>
                                <Timeline.Body>
                                    <div className="min-w-max">
                                        <Card
                                            horizontal={true}
                                            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Exit the cart
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                By clicking on Checkout botton on the page
                                            </p>
                                        </Card>
                                    </div>
                                </Timeline.Body>
                                <Button color="gray">
                                    Learn More

                                </Button>
                            </Timeline.Content>
                        </Timeline.Item>

                    </Timeline>
                </div>
            </div > */}
            <div>
                <p class="text-3xl">Follow the Instruction </p>
            </div>
            <div className="grid grid-rows-2 sm:grid-cols-2 grid-cols-1 gap-2 my-4 col-span-4  ">
                <div className="w-full sm:max-w-lg group block  mx-auto rounded-lg sm:p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <Card
                        horizontal={false}
                        imgSrc="./Images/qr-code-scanning-vector-illustration-600w-1303670605.webp">
                        <h4 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STEP1</h4>
                        <h5 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Scan the QR code
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Scan the unique id present on the cart
                        </p>
                    </Card>
                </div>
                <div className="w-full sm:max-w-lg group block  mx-auto rounded-lg sm:p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <div data-aos="flip" data-aos-delay="100" >
                        <Card
                            horizontal={false}
                            imgSrc="./Images/password.png">
                            <h4 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STEP2</h4>
                            <h5 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Enter Cerdensials
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Scan the unique id present on the cart
                            </p>
                        </Card>
                    </div>
                </div>
                <div className="w-full sm:max-w-lg group block  mx-auto rounded-lg sm:p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                    <Card
                        horizontal={false}
                        imgSrc="./Images/password.png">
                        <h4 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STEP3</h4>
                        <h5 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Start shopping
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Scan the unique id present on the cart
                        </p>
                    </Card>
                </div>
                <div className="w-full sm:max-w-lg group block  mx-auto rounded-lg sm:p-2 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 dark:hover:bg-sky-500 dark:hover:ring-sky-500">
                    <Card
                        horizontal={false}
                        imgSrc="./Images/password.png">
                        <h4 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">STEP4</h4>
                        <h5 className="text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Exit the cart
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            By clicking on Checkout botton on the page
                        </p>
                    </Card>
                </div>
            </div >

        </>

    )
}