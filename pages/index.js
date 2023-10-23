import { Github, LinkedIn } from "@/components/icons";

const Header = ({ children }) => (
  <section className="flex flex-col gap-y-16">{children}</section>
);

const Section = ({ children }) => (
  <section className="flex flex-col gap-y-6">{children}</section>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-neutral-500">{children}</h2>
);

const SectionText = ({ children }) => (
  <p className="text-xl leading-normal">{children}</p>
);

const Project = ({ link, image, title, subtitle }) => (
  <a
    href={link}
    target="_blank"
    className="flex flex-row gap-x-4 items-center sm:gap-x-8"
  >
    <img
      className="rounded-lg w-16"
      src={image}
      width="512"
      height="512"
      alt=""
    />
    <div>
      <p className="text-lg">{title}</p>
      <p className="text-neutral-600">{subtitle}</p>
    </div>
  </a>
);

export default function Home() {
  return (
    <main className="flex flex-col gap-y-24 px-8 py-24 w-full max-w-3xl sm:px-24 sm:py-32">
      <Header>
        <div className="relative">
          <img
            className="rounded-full w-24"
            src="/profile-picture.jpg"
            width="512"
            height="512"
            alt="Profile picture"
          />
          <span className="absolute bottom-0 left-0 text-4xl -m-2">👋</span>
        </div>
        <h1 className="text-2xl font-medium leading-relaxed sm:text-3xl sm:leading-relaxed">
          Hello! I'm Johan, a seasoned Frontend Developer Consultant with a
          passion for crafting delightful digital experiences.
        </h1>
      </Header>
      <Section>
        <SectionHeading>Projects</SectionHeading>
        <Project
          link="https://www.rymdtiden.se"
          image="/project-rymdtiden.jpg"
          title="Rymdtiden.se"
          subtitle="Web production agency · Co-founder & Frontend developer"
        />
        <Project
          link="https://www.kunskapskanalen.se"
          image="/project-kunskapskanalen.jpg"
          title="Kunskapskanalen.se"
          subtitle="Swedish Television Channel · Frontend developer"
        />
        <Project
          link="https://www.nordddb.com"
          image="/project-nordddb.jpg"
          title="NORDDDB.se"
          subtitle="Advertising agency · Frontend developer"
        />
      </Section>
      <Section>
        <SectionHeading>About</SectionHeading>
        <SectionText>
          With a deep understanding of web technologies and a keen eye for
          design, I specialise in translating complex ideas into user-friendly,
          visually appealing web applications.
        </SectionText>
        <SectionText>
          I've honed my skills in HTML, CSS, JavaScript, and various modern
          frontend frameworks (such as React and Vue). I've had the privilege of
          collaborating with a diverse range of clients, from startups to
          established enterprises, helping them achieve their online goals.
        </SectionText>
        <SectionText>
          I believe that a well-crafted user interface not only enhances a
          brand's credibility but also improves user engagement. I stay up to
          date with the latest UI/UX trends, ensuring that my projects are not
          only visually appealing but also highly functional and responsive.
        </SectionText>
        <SectionText>
          I also bring a strategic mindset to the table. As a consultant, I work
          closely with clients to understand their business objectives, and I
          offer tailored solutions that align with their goals. Whether it's
          optimising performance, improving accessibility, or enhancing
          cross-browser compatibility.
        </SectionText>
        <SectionText>
          I love to stay informed about emerging technologies and best practices
          in the frontend development landscape. Continuous learning is key to
          staying ahead in this fast-paced field, and I thrive on the challenges
          it presents.
        </SectionText>
      </Section>
      <div className="flex flex-row gap-4">
        <a href="https://github.com/johan-ohrn-ab" target="_blank">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/johan-ohrn/" target="_blank">
          <LinkedIn />
        </a>
      </div>
    </main>
  );
}
