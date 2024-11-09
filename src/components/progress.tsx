import React from 'react'

export default function WebsiteLinks() {
  const websites = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'GitHub', url: 'https://www.github.com' },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
    { name: 'React', url: 'https://reactjs.org' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </button>
        
        <h1 className="text-2xl font-bold mb-6">Useful Websites</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className=" flex-wrap gap-4">
            {websites.map((site) => (
              <li key={site.name}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}