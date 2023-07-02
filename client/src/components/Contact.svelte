<script lang="ts">
  let submitted = false;
  let submissionMessage = "";
  let submissionErrorMessage = "";
  let loadingStatus: "not-loading"|"loading"|"loaded" = "not-loading";


  const handleSubmit = async (e: Event) => {
    try {
      loadingStatus = "loading";
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch("https://khandakar-shakib.vercel.app/api/contact", options);
      if (!response.ok) {
        submissionErrorMessage = "Something went wrong";
        loadingStatus = "not-loading";
        return;
      }

      const res = await response.json();
      console.log(res);
      submissionMessage = res.message;
      submitted = true;
      loadingStatus = "loaded";

    } catch (error) {
      console.log(error);
      submissionErrorMessage = "Something went wrong"
      loadingStatus = "not-loading";
    }
  };
</script>

<div
  class="w-full max-w-7xl mx-auto pb-5 justify-stretch items-center gap-4 sm:flex sm:flex-row-reverse"
>
  <div class="bg-indigo-800 rounded-md py-3 px-2 mx-auto sm:mt-20 w-full max-w-sm shadow-sm shadow-zinc-500">
    <h2 class="text-3xl font-semibold pb-"> Let's get in touch </h2>
    <p class="py-2 flex gap-1 items-center">
      <img class="w-11" src="https://img.icons8.com/external-others-pike-picture/50/000000/external-Mail-report-others-pike-picture.png" alt="email"/> 
      xenonknight54@gmail.com
    </p>
    <a class="py-2 flex gap-1 items-center" href="https://www.github.com/khandakar227">
      <img class="bg-white rounded-md w-11" src="https://img.icons8.com/glyph-neue/64/000000/github.png" alt="github"/>
      khandakar227
    </a>
    <a class="py-2 flex gap-1 items-center" href="https://www.linkedin.com/in/shakib-hasan-734494249/">
      <img class="w-11" src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn"/>
      Khandakar shakib al hasan
    </a>
  </div>

  <div class="w-full">
      <form class="p-2 w-full rounded-md shadow shadow-gray-500" on:submit|preventDefault={handleSubmit}>
        <input
          class="px-3 my-2 rounded py-1 w-full shadow shadow-zinc-500 focus:outline-none focus:shadow-white bg-zinc-700"
          type="text"
          placeholder="Name"
          name="name"
          required={true}
        />
        <input
          class="px-3 my-2 rounded py-1 w-full shadow shadow-zinc-500 focus:outline-none focus:shadow-white bg-zinc-700"
          type="email"
          placeholder="Email"
          name="email"
          required={true}
        />
        <textarea
          rows="4"
          class="px-3 my-2 rounded py-1 w-full shadow shadow-zinc-500 focus:outline-none focus:shadow-white bg-zinc-700"
          placeholder="Description"
          name="description"
        />
        {#if submissionErrorMessage}
          <p class="my-2 p-2 rounded-md bg-red-700">{submissionErrorMessage}</p>
        {/if}
        
        {#if !submitted}
        <button
          class="bg-indigo-700 btn"
          disabled={loadingStatus === "loading" ? true : false}
          type="submit"
        >
        {#if loadingStatus === "not-loading"}
          Submit
          {:else if loadingStatus === "loading"}
          Please wait ...
        {/if}
        </button>
          {:else}
          <p class="py-3 px-2 border border-green-500 rounded-md"> {submissionMessage} </p>
        {/if}
      </form>
  </div>
</div>
