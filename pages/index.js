import { Github, LinkedIn } from "@/components/icons";

const Header = ({ children }) => (
  <section className="flex flex-col gap-y-16">{children}</section>
);

const Section = ({ children }) => (
  <section className="flex flex-col gap-y-6">{children}</section>
);

const SectionHeading = ({ children }) => (
  <h2 className="text-stone-500">{children}</h2>
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
      <p className="text-stone-600">{subtitle}</p>
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
          I'm Johan, a frontend developer that enjoys developing user interfaces
          for the web.
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
        <SectionHeading>Biography</SectionHeading>
        <SectionText>
          I'm Johan, a fronted developer and freelance consultant based in
          Stockholm.
        </SectionText>
        <SectionText>
          After my graduation I knew exactly that I wanted to start working with
          web development. I have spent most of my career since then working at
          award-winning agencies where I've had the privilege of building highly
          interactive websites for numerous high-profile clients.
        </SectionText>
        <SectionText>
          Today, I'm a freelance consultant and the co-founder of Rymdtiden — a
          close-knit collective of developers that aim to help our clients with
          web development.
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
