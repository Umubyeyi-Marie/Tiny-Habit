"use client"
export default function Footer(){
    return(
        <div className="flex flex-row space-x-162 px-2 py-2 ">
            <p className="text-m">This website uses cookies to enhance your experience on our website.<span className="text-indigo-500"> Learn more </span></p>
            <button className="bg-indigo-500 text-white p-2 text-m  "> Got it!</button>
        </div>
    )
}