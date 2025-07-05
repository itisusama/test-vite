import React from 'react'

const Cards = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 - Horizontal layout */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <div className="flex gap-3">
                <div className="w-16 h-12 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=48&width=64"
                    alt="Team meeting"
                    width={64}
                    height={48}
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Horizontal layout */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <div className="flex gap-3">
                <div className="w-16 h-12 flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=48&width=64"
                    alt="Office work"
                    width={64}
                    height={48}
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Vertical layout with larger img */}
          <div className="bg-gray-400 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="aspect-video relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img-Dv0nShr420LuEr5jWjSehH8kjgYyDc.png"
                alt="Office interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">Lorem Ipsum dolor sit amet</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Card 4 - Text only */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 5 - Text with bullet point */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Card 6 - Large vertical img */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4 pb-2">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
            </div>
            <div className="px-4">
              <div className="aspect-video relative mb-3">
                <img
                  src="/placeholder.svg?height=120&width=200"
                  alt="City skyline"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div className="p-4 pt-0">
              <p className="text-gray-600 text-xs leading-relaxed">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam...
              </p>
            </div>
          </div>

          {/* Card 7 - Text with chart */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>

          {/* Card 8 - Text with small chart */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Lorem Ipsum dolor sit amet</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-8 bg-gray-100 rounded flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=32&width=48"
                    alt="Chart"
                    width={48}
                    height={32}
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">Ut enim ad minim veniam...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
