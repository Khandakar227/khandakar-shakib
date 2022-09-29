<script>
  const projects = [
    {
      src: "https://gh-card.dev/repos/Khandakar227/svelte-mp3.svg",
      info: {
        title: "Svelte mp3",
        desc: "Cybernatically enhanced audio player",
      },
      action: {
        src: "https://github.com/Khandakar227/svelte-mp3",
        type: "github-repo",
      },
    },
    {
      src: "https://khandakar227.github.io/json-data/cdn/cakeshop.webp",
      info: {
        title: "Cake Shop",
        desc: "Confectionary & Bakery shop website built using astro framework.",
      },
      action: {
        src: "https://cakeshop.pages.dev/",
        type: "link",
      },
    },
    {
      src: "/img/CCITC.jpg",
      info: {
        title: "CCITC",
        desc: "Checkout the official site of CCITC",
      },
      action: {
        src: "https://www.ccitc.xyz",
        type: "link",
      },
    },
    {
      src: "https://raw.githubusercontent.com/Khandakar227/json-data/main/cdn/esmary.webp",
      info: {
        title: "Esmary",
        desc: "An online shopping platform for clothings (A demo site)",
      },
      action: {
        src: "https://esmary.vercel.app",
        type: "link",
      },
    },
    {
      src: "/img/dialogflow.png",
      info: {
        title: "Chatbot for an IT club",
        desc: "A chatbot using dialogblow for CCITC club landing page"
      },
      action: {
        src: "https://khandakar227.github.io/dialogflow",
        type: "link"
      }
    },
    {
      src: "https://raw.githubusercontent.com/Khandakar227/json-data/main/cdn/animeflix.webp",
      info: {
        title: "Animeflix",
        desc: "Video streaming site based on netflix's UI.",
      },
      action: {
        src: "https://ani-me-flix.netlify.app",
        type: "link",
      },
    },
    {
      src: "https://gh-card.dev/repos/Khandakar227/user-authentication-system.svg",
      info: {
        title: "Khandakar227/user-authentication-system",
        desc: "An example of user authentication system using mongodb, express.",
      },
      action: {
        src: "https://github.com/Khandakar227/user-authentication-system",
        type: "github-repo",
      },
    },
    {
      src: "https://raw.githubusercontent.com/Khandakar227/json-data/main/cdn/pt.webp",
      info: {
        title: "Periodic Table",
        desc: "Simple periodic table created using React Components",
      },
      action: {
        src: "https://peri0dictable.netlify.app",
        type: "link",
      },
    },
    {
      src: "/img/Quran_Kareem.png",
      info: {
        title: "Quran Web",
        desc: "A web app for reading the Quran. Only bangla and english translations were added.",
      },
      action: {
        src: "https://quranulkareem.vercel.app",
        type: "link",
      },
    },
    {
      src: "https://raw.githubusercontent.com/Khandakar227/json-data/main/cdn/blog_ccitc.webp",
      info: {
        title: "Blog - CCITC",
        desc: "Read awesome posts, sign in with google write your own posts/ blogs",
      },
      action: {
        src: "https://www.blog.ccitc.xyz",
        type: "link",
      },
    },
  ];
</script>

<div
  class="py-4 px-1 columns-1 sm:columns-2 md:columns-3 gap-x-2 max-w-7xl mx-auto"
>
  {#each projects as project, i}
    <a
      href={project.action.src}
      target="_blank"
      class="mx-auto my-1 shadow-sm bg-[#3e3e3e70] inline-block w-full hover:bg-zinc-900 transition"
    >
      <div
        class="relative group"
        data-sal="slide-up"
        data-sal-duration={100 * (i + 1) + "s"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="absolute top-0 right-0 hidden group-hover:block w-8 h-auto mix-blend-difference fill-white"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path
            d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"
          /></svg
        >
        <img
          class="rounded w-full h-auto mx-auto bg-white"
          src={project.src}
          alt={project.info.title}
        />
        <div class="p-2">
          <h2 class="text-xl font-extrabold py-2">
            {project.info.title}
          </h2>
          <p class="text-xl">{project.info.desc}</p>
        </div>
      </div>
    </a>
  {/each}
</div>
