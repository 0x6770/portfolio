<svelte:head>
  <title>{title}</title>
  <meta name="description" content={title} />
</svelte:head>

<body>
  <div class="title">{title}</div>
  <div class="intro">{intro}</div>
  <Contacts contacts={contacts} />
  <Cards title="Experience" cards={experience} />
  <Cards title="Education" cards={education} />
  <Cards title="Projects" cards={projects} />
  <Skills skills={skills} />
</body>

<svelte:body on:load|once={fetchPortfolio()}/>

<script>
  import Cards from "../components/cards.svelte"
  import Contacts from "../components/contacts.svelte"
  import Skills from "../components/skills.svelte"

  let title = "Yujie Wang's Portfolio"
  let intro = ""
  let contacts = []
  let experience = []
  let education = []
  let projects = []
  let skills = []

  const fetchPortfolio = async() => {
    const url = "https://portfolio.wang.icu";
    const response = await self.fetch(url);
    if (response.ok) {
      const portfolio = await response.json();

      intro = portfolio["introduction"];
      contacts = portfolio["contacts"];
      experience = handleExperience(portfolio["experience"]);
      education = handleEducation(portfolio["education"]);
      projects = handleProjects(portfolio["projects"]);
      skills = portfolio["skills"];
    } else {
      throw new Error("Cannot fetch portfolio");
    }
  }

  const handleExperience = (data) => {
    return data.map(function(x) {
      return {
        "title": x.employer,
        "subtitle": x.role,
        "content": x.responsibilities,
        "start": x.start,
        "end": x.end,
      }
    })
  }

  const handleEducation = (data) => {
    return data.map(function(x) {
      return {
        "title": x.institution,
        "subtitle": x.degree,
        "content": x.course,
        "start": x.start,
        "end": x.end,
      }
    })
  }

  const handleProjects = (data) => {
    return data.map(function(x) {
      return {
        "title": x.name,
        "subtitle": x.link,
        "content": x.description,
      }
    })
  }


</script>

<style global lang="scss">
  :root {
    --color1: #f22b29;
    --color2: #140f2d;
    --color3: #d72638;
    --color4: #3f88c5;
    --color5: #f49d37;
    --border-width: 0.1em;

    --theme-color: var(--color5);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #161616;
      --bg-color2: #232323;
      --fg-color: #ededed;
      --fg-color2: #d0d0d0;
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bg-color: #fefefe;
      --bg-color2: #efefef;
      --fg-color: #222222;
      --fg-color2: #999999;
    }
  }

  body {
    background: var(--bg-color);
    color: var(--fg-color);
    min-width: 350px;
    max-width: 600px;
    width: 90%;
    margin: 2em auto;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
  }

  a {
    color: var(--theme-color);
  }

  div.title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 900;
    margin: 20px;
  }

  div.intro {
    margin-bottom: 10px;
  }
</style>
