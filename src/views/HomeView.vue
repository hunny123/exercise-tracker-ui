<template>
  <main>
    <div class="bg-primary h-screen py-4 fixed w-screen">
      <div class="container px-4 h-screen mx-auto lg:w-2/3 md:w-screen">
        <div class="h-20 w-full">
          <img class="lg:w-32 w-28" src="../assets/logo.svg" />
        </div>
        <div class="lg:mt-5 mt-2">
          <div class="flex md:flex-row flex-col-reverse md:gap-x-32">
            <div class="w-full my-2 py-2 md:mx-3 md:1/2 md:my-5">
              <img
                src="../assets/main-text.svg"
                class="main-text lg:mt-12 md:mt-10"
              />
              <button
                class="mt-3 py-2 px-8 font-bold text-base .shadow-lg rounded-lg bg-white text-primary md:mt-8"
              >
                Log it here and ther
              </button>
            </div>
            <div class="w-full my-2 py-2 md:mx-3 md:1/2 md:my-5">
              <img src="../assets/exercise-guy.svg" class="exercise-guy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.exercise-guy {
}
.main-text {
  height: 200px;
}
</style>
