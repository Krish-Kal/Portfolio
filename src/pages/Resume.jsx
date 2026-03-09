import resume from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="min-h-screen pt-28 px-6 text-white">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-400 tracking-wide">
        My Resume
      </h1>

      <div className="max-w-5xl mx-auto backdrop-blur-xl bg-blue-900/20 border border-blue-400/20 rounded-2xl p-6 shadow-md">
        {/* Embedded Resume */}
        <iframe
          src={resume}
          title="Resume"
          className="w-full h-[700px] md:h-[750px] lg:h-[800px] rounded-xl border border-blue-400/20 shadow-inner"
        ></iframe>

        {/* Download Button */}
        <div className="text-center mt-6">
          <a
            href={resume}
            download
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/40 via-blue-600/30 to-blue-500/40
                       text-white font-semibold rounded-lg shadow-md 
                       hover:from-blue-500/60 hover:via-blue-600/50 hover:to-blue-500/60
                       hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;