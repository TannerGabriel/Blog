<template>
  <div class="py-8 px-3.75 md:py-12 lg:py-15">
    <div
        v-if="alertOpen"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell"></i>
        </span>
        <span class="inline-block align-middle mr-8">
          <b class="capitalize">Error!</b> {{ errorMessage }}
        </span>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          v-on:click="closeAlert()"
        >
          <span>×</span>
        </button>
      </div>

      <button
            @click="signOut"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign out
          </button>
  </div>
</template>

<script>


export default {
  data: () => ({
    alertOpen: false,
    errorMessage: ""
  }),
  methods: {
    async signOut() {
      try {
        let { error } = await this.$supabase.auth.signOut()
        if (error) throw error
        else this.$router.push("/login")
      } catch (error) {
        alert(error.message)
        this.alertOpen = true;
        this.errorMessage = error.error_description || error.message;
      }
    },
    closeAlert() {
      this.alertOpen = false;
    }
  },
};
</script>

<style>

</style>