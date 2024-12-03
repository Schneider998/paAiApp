import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart, Bookmark, MapPin, Play, Plus, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const Profile = () => {
  const { id } = useParams();
  const location = useLocation();
  const isFromHiringPipeline = location.state?.from === 'hiring-pipeline';

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              to={isFromHiringPipeline ? "/hiring-pipeline" : "/find-talent"}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
          {isFromHiringPipeline ? (
            <div className="flex items-center gap-2">
              <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium">
                Decline
              </button>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium">
                Accept
              </button>
            </div>
          ) : (
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium">
              Invite to Job
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[280px,1fr] gap-8">
          {/* Left Column */}
          <div>
            <div className="text-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Profile"
                className="w-48 h-48 rounded-full mx-auto mb-4"
              />
              <h1 className="text-2xl font-bold mb-4">Ludwing Rondon</h1>
              <div className="flex justify-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900">
                  Get in touch
                </button>
              </div>
            </div>

            <div className="text-left mb-6">
              <div className="font-medium mb-2">High Ticket Closer</div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                Chile
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <h3 className="font-medium mb-2">Elevator Pitch</h3>
              <p className="text-sm text-gray-600">
                I am a highly motivated person. I am able to train harder than anyone, work harder than anyone and close more than anyone. I am looking for a life changing opportunity and certainly this is the one for me.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold mb-1">$720,000</div>
                <div className="text-sm text-gray-600">Revenue Closed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold mb-1">33%</div>
                <div className="text-sm text-gray-600">Close Rate</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold mb-1">$6000</div>
                <div className="text-sm text-gray-600">Avg Deal Size</div>
              </div>
            </div>

            {/* Sales Training Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Sales Training</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
                    alt="Remote Closing Academy"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Remote Closing Academy</div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Plus className="w-5 h-5" />
                    <span className="text-xs">3 more</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sales Coaches Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4">Sales Coaches</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Jeremy Miner"
                      className="w-16 h-16 rounded-full mb-2"
                    />
                    <div className="text-sm">Jeremy Miner</div>
                  </div>
                  <div className="text-center">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                      alt="Bill Walsh"
                      className="w-16 h-16 rounded-full mb-2"
                    />
                    <div className="text-sm">Bill Walsh</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Live Sales Calls */}
            <div>
              <h2 className="text-xl font-bold mb-6">Live Sales Calls</h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Closing a $5000 deal on Zoom",
                  "Handling Wife Objection $8K Close"
                ].map((title, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm font-medium mb-4">{title}</div>
                    <div className="h-1 bg-gray-200 rounded-full mb-4">
                      <div className="h-full w-1/2 bg-black rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <Shuffle className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <SkipBack className="w-4 h-4" />
                      </button>
                      <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <SkipForward className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <Repeat className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Experience */}
            <div>
              <h2 className="text-xl font-bold mb-6">Sales Experience</h2>
              <div className="space-y-4 text-sm">
                <p>Remote High Ticket Closer for Family Offices Club. (3 months - $26,000usd cash collected)</p>
                <p>Remote Sales Closer for Maihue Chile selling low ticket B2B and B2C products. (2 years - $600,000usd cash collected)</p>
                <p>Door to Door Sales representative for Securitas Direct selling alarms as High Ticket Closer (6 months - $100,000usd cash collected)</p>
              </div>

              <div className="mt-6">
                <div className="text-sm font-medium mb-2">Looking for:</div>
                <ul className="space-y-1 text-sm">
                  <li>Remote High Ticket Sales Closer position</li>
                  <li>Ticket between $10,000 to $30,000 usd</li>
                  <li>Training provided by company</li>
                  <li>Leads provided by company</li>
                  <li>Commissions only (if salary, depending on conditions)</li>
                  <li>Full time position</li>
                </ul>
              </div>
            </div>

            {/* Full Interview */}
            <div>
              <h2 className="text-xl font-bold mb-6">Full Interview</h2>
              <div className="aspect-video bg-gray-100 rounded-lg mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop"
                  alt="Interview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-medium mb-4">Interview Analysis:</h3>
                  <div className="grid grid-cols-3 gap-x-16 gap-y-4">
                    {[
                      { label: "Personality / Energy", rating: 5 },
                      { label: "Sales Fundamentals", rating: 5 },
                      { label: "Probing/Discovery", rating: 3 },
                      { label: "Objection Handling", rating: 4 },
                      { label: "Confidence", rating: 5 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="text-sm mb-1">{item.label}</div>
                        <div className="flex text-yellow-400">
                          {"★".repeat(item.rating)}{"☆".repeat(5-item.rating)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2">Interview Score</div>
                  <div className="w-32 h-32 relative">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="3"
                        strokeDasharray={`${85}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">85%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Analysis</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Positives</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Extensive setter experience with triage and DM setting outbound and inbound leads</li>
                      <li>Very familiar with industry standard CRM's like GHL and Twilio</li>
                      <li>Has worked on offers in the DFY e-commerce automation, SaaS, events and digital marketing agency spaces</li>
                      <li>Invested and completed Marcus Gilhooly's Club Closer training program</li>
                      <li>Very well-spoken, articulate and professional with a likeable, friendly and non-threatening demeanor</li>
                      <li>Based in the UK and is able to work in both US/North American and European time zones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Area For Improvement</h4>
                    <ul className="list-disc pl-4 space-y-2 text-sm">
                      <li>Very strong setter candidate. My one suggestion would be to remember to make sure all the decision makers will be on the call with the closer.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;