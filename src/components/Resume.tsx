
const RESUME_URL = '/resume.pdf'

const DOWNLOAD_NAME = 'Kassandra-Flores-Resume.pdf'

const buttonStyles =
  'inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2.5 text-base transition-colors hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

function Resume() {
  return (
    // id="resume" is what a "resume" link in the navbar scrolls to
    <section
      id="resume"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-10 sm:py-16"
    >
      <h2 className="text-3xl font-medium sm:text-4xl">/resume</h2>

      {/* Open = new browser tab. Download = saves the file (the `download`
          attribute works because the PDF is on the same site). */}
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
        >
          Open in new tab
        </a>
        <a href={RESUME_URL} download={DOWNLOAD_NAME} className={buttonStyles}>
          Download PDF
        </a>
      </div>

      {/* The iframe is hidden on mobile because it would be too small to read. */}
      <iframe
        src={`${RESUME_URL}#view=FitH`}
        title="Kassandra Flores' resume"
        className="mt-8 hidden h-[80vh] min-h-[500px] w-full rounded-2xl bg-white md:block"
      />
    </section>
  )
}

export default Resume