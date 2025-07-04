"use client";

export default function About() {
  const faqs = [
    {
      question: "What is this website about?",
      answer: "This is a collaborative repository where students can upload and browse past exam papers to help each other prepare more effectively."
    },
    {
      question: "Is it free to use?",
      answer: "Yes! Browsing and uploading papers is completely free. The goal is to build a helpful resource for all students."
    },
    {
      question: "Can I upload papers from any school?",
      answer: "Absolutely. We encourage you to upload papers from any university or college, as long as you have the right to share them."
    },
    {
      question: "How do I upload a paper?",
      answer: "Just click on 'Upload a Paper', fill out the details like school, course, and professor, and attach your PDF file. It only takes a minute."
    },
    {
      question: "Are these papers verified?",
      answer: "These papers are uploaded by students like you. We rely on the community to report inaccuracies and keep the repository accurate."
    },
    {
      question: "Can I request a paper that’s not listed?",
      answer: "Yes, you can make a request. If another student has it, they may upload it to help you out."
    },
    {
      question: "Is my information private?",
      answer: "Yes. We do not share your personal information with anyone. Uploaded papers only show the academic details you provide."
    }
  ];

  return (
    <div className="">
      <header className="w-2/5 text-6xl font-medium m-auto text-center">
        About & FAQ
      </header>

      <div className="max-w-4xl mx-auto mt-12">
        <section className="mb-14 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            About This Site
          </h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            This platform is built by students, for students. It’s a growing repository of past exam papers designed to make studying easier and more effective. 
            Upload your past papers to help others, browse papers to prepare better, or request a paper you need. Together, we can all succeed!
          </p>
        </section>

        <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Frequently Asked Questions
        </h3>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">{faq.question}</h4>
              <p className="text-gray-800 text-md">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
