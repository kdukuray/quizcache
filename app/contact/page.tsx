"use client";

export default function Contact() {
  return (
    <div>
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        Contact Us
      </header>

      <div className="max-w-3xl mx-auto mt-8 space-y-8">
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-800 text-lg">
            Have questions, feedback, or need support? Reach out to us anytime.
          </p>
        </section>

        <div className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
          <p className="text-gray-800 text-md">
            <a href="mailto:support@quizcache.com" className="text-blue-600 hover:underline">
              support@quizcache.com
            </a>
          </p>
        </div>

        <div className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Find us online</h3>
          <ul className="space-y-3 text-md">
            <li>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Join our Discord
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Follow on Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Follow on X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Like us on Facebook
              </a>
            </li>
            <li>
              <a href="https://reddit.com/r/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Join us on Reddit
              </a>
            </li>
            <li>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Watch on TikTok
              </a>
            </li>

            <li>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Watch on Youtube
              </a>
            </li>


          </ul>
        </div>
      </div>
    </div>
  );
}
