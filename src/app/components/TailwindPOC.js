// app/components/TailwindPOC.js
export default function TailwindPOC() {
    return (
      <div className="container mx-auto p-4">
        {/* Header */}
        <header className="bg-blue-600 text-white p-6">
          <h1 className="text-4xl font-bold">Tailwind CSS POC</h1>
          <p className="mt-2 text-xl">Showcasing Tailwind's utility classes</p>
        </header>
  
        {/* Spacing Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Spacing Utilities with Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-4 bg-gray-200">
            <div className="p-6 bg-gray-300">
              <p>Box 1 - margin-top and padding inside.</p>
            </div>
            <div className="p-6 bg-gray-300">
              <p>Box 2 - margin-top and padding inside.</p>
            </div>
            <div className="p-6 bg-gray-300">
              <p>Box 3 - margin-top and padding inside.</p>
            </div>
          </div>
        </section>
  
        {/* Flexbox Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Flexbox Layout</h2>
          <div className="flex space-x-4">
            <div className="flex-1 bg-gray-200 p-6">
              <h3 className="text-xl">Flex Item 1</h3>
            </div>
            <div className="flex-1 bg-gray-300 p-6">
              <h3 className="text-xl">Flex Item 2</h3>
            </div>
          </div>
        </section>
  
        {/* Typography Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Typography Utilities</h2>
          <p className="text-xl font-medium mb-4">This text is medium-weight and large size.</p>
          <p className="text-blue-600">This text is blue and larger.</p>
          <p className="text-sm text-gray-500">This is small text with gray color.</p>
        </section>
  
        {/* Colors Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Color Utilities</h2>
          <div className="bg-red-500 text-white p-4 mb-4">Red background</div>
          <div className="bg-green-500 text-white p-4 mb-4">Green background</div>
          <div className="bg-blue-500 text-white p-4">Blue background</div>
        </section>
  
        {/* Responsive Design Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Responsive Design</h2>
          <div className="bg-purple-500 text-white p-6 sm:bg-red-500 md:bg-green-500 lg:bg-blue-500">
            This background color changes based on screen size.
          </div>
        </section>
      </div>
    );
  }
  