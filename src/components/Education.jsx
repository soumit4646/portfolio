import { Heading } from "@radix-ui/themes";

export default function () {
    return (
        <div className="w-[90vw] md:max-w-6xl mx-auto pt-12 pb-12">
            <div>
                <Heading size="9" className="text-center mb-8">
                    Education
                </Heading>
                <div className="border-l-2 border-gray-400 pl-4">
                    <div className="flex flex-col gap-2 p-4 mb-5 relative">
                        <p className="text-xl">2017 - 2018</p>
                        <p className="text-2xl font-bold">
                            Islampur High School
                        </p>
                        <p className="text-xl">
                            Completed my 10th standard from Islampur High School
                            with a score of 600 out of 700
                        </p>
                        <div className="box bg-blue-400"></div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 mb-5 relative">
                        <p className="text-xl">2018 - 2020</p>
                        <p className="text-2xl font-bold">
                            Islampur High School
                        </p>
                        <p className="text-xl">
                            Completed my 10th standard from Islampur High School
                            with a score of 600 out of 700
                        </p>
                        <div className="box bg-blue-400"></div>
                    </div>
                    <div className="flex flex-col gap-2 p-4 relative">
                        <p className="text-xl">2020 - 2024</p>
                        <p className="text-2xl font-bold">
                            University of Engineering & Management, Kolkata
                        </p>
                        <p className="text-xl">
                            Completed my B.tech in Computer Science and
                            Engineering from UEM Kolkata with a GPA of 8.70.
                        </p>
                        <div className="box bg-blue-400"></div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}
