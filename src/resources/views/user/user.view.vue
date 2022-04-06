<template>
  <div class="p-5">
    <div class="w-500px m-auto bg-teal-400 p-5 rounded-md">
      <form action="" @submit.prevent="onSubmit" class="flex items-end gap-2">
        <div class="w-1/1">
          <label for="">Usuário</label>
          <input
            type="text"
            name="username"
            v-model="form.username"
            class="block w-1/1 h-40px px-3"
          />
        </div>
        <button type="submit" class="w-200px h-40px bg-gray-800 text-white">
          BUSCAR
        </button>
      </form>
    </div>
    <div v-if="loading.page">loading...</div>
    <pre v-else>{{ user }}</pre>
  </div>
</template>

<script>
// core
import { mapActions, mapGetters } from "vuex";

// repositories
import UserRepository from "../../../repository/user.repository";

// libs

// components
import Feather from "../../components/feather";

export default {
  name: "BoardKanban",

  data() {
    const form = {
      username: "andrecarello",
    };

    const loading = {
      page: false,
    };

    return {
      form,
      loading,
    };
  },

  components: {
    Feather,
  },

  methods: {
    async onSubmit() {
      if (!this.form.username) return alert("OPS, o username é obrigatório");
      this.loading.page = true;
      await UserRepository.get(this.form);
      this.loading.page = false;

      window.document.title = this.user.login
    },
  },

  async mounted() {},

  computed: {
    ...mapGetters({
      user: "UserStore/user",
    }),
  },
};
</script>