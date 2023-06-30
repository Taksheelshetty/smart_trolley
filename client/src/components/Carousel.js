import { Carousel } from "flowbite-react"

export default function CarouselComponent() {
    return (
        <>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                {/* <Carousel>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                       <img src="./item2.jpg"></img>
                    </div>
                    <div className="flex h-fit items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img className="items-center" src="./item3.jpg"></img>
                    </div>
                    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                        <img src="./photoitem.jpeg"></img>
                    </div>
                </Carousel> */}
                <Carousel slideInterval={5000}>
                    <img className="h-96 {`w-[80%]`}"
                        alt="..."
                        src="./item3.jpg"
                    />
                    <img
                        alt="..."
                        src="./item2.jpg"
                    />
                    <img
                        alt="..."
                        src="photoitem.jpeg"
                    />
                </Carousel>
            </div>





        </>
    )
}