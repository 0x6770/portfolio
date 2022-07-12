<svelte:head>
  <title>{title}</title>
  <meta name="description" content={title} />
</svelte:head>

<body>
  <div class="title">{title}</div>
  {#await fetchPortfolio then portfolio}
    <div class="intro">{portfolio.intro}</div>
    <Contacts contacts={portfolio.contacts} />
    <Cards title="Experience" cards={portfolio.experience} />
    <Cards title="Education" cards={portfolio.education} />
    <Cards title="Projects" cards={portfolio.projects} />
    <Skills skills={portfolio.skills} />
  {/await}
</body>

<script>
  import Cards from "../components/cards.svelte"
  import Contacts from "../components/contacts.svelte"
  import Skills from "../components/skills.svelte"
  import {handleProjects, handleEducation, handleExperience} from "../utils/portfolioHandlers.ts"

  const title = "Yujie Wang's Portfolio";

  const url = "https://portfolio.wang.icu";

  const fetchPortfolio = fetch(url)
    .then(res => res.json())
    .then(data => {
      const intro = data.introduction;
      const contacts = data.contacts;
      const experience = handleExperience(data.experience);
      const education = handleEducation(data.education);
      const projects = handleProjects(data.projects);
      const skills = data.skills;

      const portfolio = {
        intro: intro,
        contacts: contacts,
        experience: experience,
        education: education,
        projects: projects,
        skills: skills
      };

      return portfolio;
    });
</script>

<style global lang="scss">
  @import "../styles/global.scss";

  .title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 20px;
  }

  .intro {
    margin-bottom: 10px;
  }
</style>
