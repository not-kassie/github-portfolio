import TechList from './Techlist'

import profilePhoto from '../assets/me.jpg'

function AboutMe() {
  return (
    // id="about-me" is what the navbar's "about me" link scrolls to.
    // mx-auto + max-w-6xl centers the content and stops it stretching on huge screens.
    <section
      id="about-me"
      className="mx-auto max-w-6xl px-4 py-12 sm:px-10 sm:py-16"
    >
      <h2 className="text-3xl font-medium sm:text-4xl">/about-me</h2>

      {/* One column on mobile, two columns (text 3 parts : photo 2 parts) from md (768px) up */}
      <div className="mt-6 grid items-start gap-8 md:grid-cols-[3fr_2fr] md:gap-14">
        {/* Text column. space-y-6 puts equal space between the paragraphs and list. */}
        <div className="space-y-6 text-base leading-relaxed sm:text-lg">
          <p>
            I am a Database Specialist at a local credit union. Currently, I 
            am set to graduate December 2026 with my bachelor’s in computer science. 
            This is my second degree with my first being a bachelor’s in English 
            literature. I decided to go back to school to reignite my passion for 
            coding that I inherited from my grandfather who coded professionally in 
            the 70s to 80s. In my studies, I’ve discovered I’m pretty intrigued by 
            database work. It feels like a puzzle that I’m slowly piecing together. 
            In my professional work, I’ve been working as a database specialist, but 
            in-between reports, I’ve started to develop professional software for our 
            company to use to analyze internal documents to cut back on tedious tasks 
            and open up our time for other things that would benefit the credit union 
            in the long run, and so we can move away from outside vendors. I find that 
            I’m able to combine my degrees through documentation, social skills, and 
            through my database work itself. The communication skills I developed in 
            my first degree enable me to work through data requests with relative ease.
            Further, I have a few personal projects I dabble on in my free time to manage 
            a database of literary agents for myself and my friends to use at our leisure
            when working on our other passions. I hope to continue this line of work well 
            into my future. 
          </p>

          <p>
            In my very sparse free time, I enjoy reading, writing fantasy
            fiction, and playing too many video games.
          </p>

          <p>
            While I’m still finding my niche in the CS field, here are some of the current technologies I’ve
            been working with:
          </p>

          <TechList />
        </div>

        {/* order-first puts the photo above the text on mobile; md:order-none restores
            the normal order (photo on the right) on larger screens. */}
        <img
          src={profilePhoto}
          alt="Kassandra smiling and looking down, seated in front of a wood-framed paper screen"
          className="order-first mx-auto aspect-square w-full max-w-sm rounded-2xl object-cover md:order-0 md:mx-0 md:max-w-none"
        />
      </div>
    </section>
  )
}

export default AboutMe