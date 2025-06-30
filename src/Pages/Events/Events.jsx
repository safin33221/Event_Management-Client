import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Users } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Calendar } from 'lucide-react';
import React from 'react';

const Events = () => {
    const { data: events } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/api/event')
            return res.data.event;
        }
    })

    return (
        <div className=' m-10'>

            <div className='grid grid-cols-3 gap-5'>
                {
                    events?.map(event => (
                        <div className=" p-6 bg-white  rounded-2xl shadow-lg border border-gray-200 ">
                            <h2 className="text-xl font-bold text-black  mb-2">
                                {event?.eventTitle}
                            </h2>
                            <p className="text-sm text-gray-500  mb-4">
                                Posted by <span className="font-medium">{event?.name}</span>
                            </p>


                            <div className="flex items-center gap-2 text-gray-900  text-sm mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                    {event?.DateAndTime
                                        ? new Date(event.DateAndTime).toLocaleString(undefined, {
                                            dateStyle: 'medium',
                                            timeStyle: 'short'
                                        })
                                        : ' Date Not found'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-900  text-sm mb-2">
                                <MapPin className="w-4 h-4" />
                                <span>{event?.location}</span>
                            </div>

                            <p className="text-sm text-gray-900  mb-4">
                                {event?.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-gray-900  text-sm">
                                    <Users className="w-4 h-4" />
                                    <span>{event?.attendeeCount} Attending</span>
                                </div>
                                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-900 transition">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Events;