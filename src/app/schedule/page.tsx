"use client";

import {useState} from "react"
import { Calendar, ChevronDown } from "lucide-react";

export default function Schedule (){
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber:'',
    consultationType: '',
    date: '',
    time: '',
    additionalNotes: '',
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev =>({
      ...prev,
      [name] : value
    }));
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();
    console.log ('Form submitted', formData);
  }

    return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 mr-2" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">
              Schedule a Consultation
            </h1>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
          <div>
            <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Book Your Session
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Select your preferred date, time, and consultation type.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
        
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Consultation Type
                  </label>
                  <div className="relative">
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                    >
                      <option value="">Select a consultation type</option>
                      <option value="individual">Individual Session</option>
                      <option value="couple">Couple's Session</option>
                      <option value="group">Group Session</option>
                      <option value="assessment">Initial Assessment</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Select a weekday. Unavailable dates are disabled.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <div className="relative">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white"
                      >
                        <option value="">Select a time slot</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Tell us about your concerns or specific topics you'd like to discuss"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-md transition duration-200"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm border p-6 sm:p-8">
              <div className="mb-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  Available Consultation Types
                </h3>
                <div className="space-y-2">
                  {[
                    ["Individual Session (60 min)", "$99"],
                    ["Couple's Session (90 min)", "$149"],
                    ["Group Session (120 min)", "$199"],
                    ["Initial Assessment (45 min)", "$75"],
                  ].map(([label, price]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{label}</span>
                      <span className="text-sm font-medium text-gray-900">{price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-medium text-gray-900 mb-3">What to Expect</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our consultations take place through secure video conferencing. You'll
                  receive a confirmation email with a link to join the session.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-900 mb-3">Cancellation Policy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cancellations with at least 24 hours notice will receive a full refund.
                  Late cancellations may be subject to a fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}