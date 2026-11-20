import githubIcon from '../assets/github.svg'

interface Project {
  title: string
  description: string
  tech: string[]
  //set up optional props
  github?: string 
  live?: string 
}

// for future reference, add projects here 
const projects: Project[] = [
{
    title: 'AI Assistant Project Placeholder',
    description:
      'School Project for my Senior Assessment that I will be updating within the next two weeks.',
    tech: ['Python'],
    github: 'https://github.com/not-kassie/your-repo',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This site. Designed in Figma, then built from scratch with React, TypeScript, and Tailwind, and deployed to GitHub Pages with GitHub Actions.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/not-kassie/github-portfolio',
  },
  {
    title: 'Academia Connect',
    description:
      'Shell for the idea of a platform connecting students with professors leading research projects.',
    tech: ['Javascript', 'HTML', 'CSS'], 
    github: 'https://github.com/not-kassie/academiaconnect',
  },
]

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'

function FolderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-10 sm:py-16"
    >
      <h2 className="text-3xl font-medium sm:text-4xl">/projects</h2>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.title}
            className="relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-200 sm:p-7 hover:border-white/30 hover:shadow-[0_0_24px_rgb(255_255_255/0.15)] motion-safe:hover:-translate-y-1 has-[a:focus-visible]:border-white/30 has-[a:focus-visible]:shadow-[0_0_24px_rgb(255_255_255/0.15)]"
        >
            <div className="flex items-start justify-between">
              <span className="text-white">
                <FolderIcon />
              </span>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className={`relative block transition-opacity hover:opacity-70 ${focusRing}`}
                  >
                    <img src={githubIcon} alt="" className="block size-6" />
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className={`relative block text-white transition-opacity hover:opacity-70 ${focusRing}`}
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

           <h3 className="mt-6 text-xl font-medium">
                {project.github ? (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
                >
                    {project.title}
                </a>
            ) : (
                project.title
            )}
            </h3>

            <p className="mt-2 leading-relaxed text-muted">
              {project.description}
            </p>

            <p className="mt-auto pt-6 text-sm text-muted">
              {project.tech.join(', ')}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects