

export default function Testimonials(){

    return (
        <div className="py-10">
            <div className="max-w-6xl grid grid-rows-2 md:grid-cols-2 mx-auto gap-6 md:gap-20">
                <div>
                    <img src="/assets/woman.png" className="rounded-3xl max-h-80 w-full" />
                    </div>
                <div className="px-5 my-auto">
                    <h1 className="text-4xl tracking-widest font-bold py-5 w-3/4">What people are saying</h1>

                    <div>
                    Find out what learners and leaders are saying about the transformative impact of building AWS Cloud skills.
                    </div>
                </div>
            </div>
        </div>
    );
   
}