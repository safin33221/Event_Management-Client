import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center text-white" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549921296-3a6b04f7251d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Seamlessly Manage <br className="hidden md:block" /> Your Next Event
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Plan, promote, and track events with ease. Whether it's a conference, wedding, or concert — we’ve got you covered.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl transition font-semibold">
                        Create Event
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl border border-white transition font-semibold">
                        Explore Events
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;