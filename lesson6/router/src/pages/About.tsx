import React from 'react'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <section>
            <Navbar></Navbar>
            <div className=" flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                    <div className="w-full mx-auto">
                        <h1>A small headline to switch your visitors into users.</h1>
                        <h2>A small headline to switch your visitors into users.</h2>
                        <p>Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Stop it. We're gonna take a little break but we'll be back in a while so, don't nobody go no where.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
