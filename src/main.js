const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/logout",
      name: "logout",
    },
    {
      path: "/home",
      component: Home,
      name: "home",
    },
  ],
});

const app = Vue.createApp({
  data() {
    return {
      isAuthenticated: false,
      selectedTag: "All",
      userLatestPost: {},
    };
  },
  provide() {
    return {
      selectedTag: Vue.computed(() => this.selectedTag),
      setTag: this.setTag,

      userLatestPost: Vue.computed(() => this.userLatestPost),
      setUserLatestPost: this.setUserLatestPost,
    };
  },
  mounted() {
    if (!this.isAuthenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.isAuthenticated = status;
    },
    logout() {
      this.isAuthenticated = false;
    },
    setTag(tag) {
      this.selectedTag = tag;
    },

    setUserLatestPost(post) {
      console.log("setUserLatestPost called with:", post);
      this.userLatestPost = { ...post };
    },
  },
});

app.component("app-home", Home);
app.component("component-categories", Categories);
app.component("component-daily-challenge-log", DailyChallengeLog);
app.component("component-daily-thoughts", DailyThoughts);
app.component("component-feed", Feed);
app.component("component-profile", Profile);
app.use(router);
app.mount("#app");
