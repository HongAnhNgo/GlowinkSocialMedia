const Profile = {
  inject: ["userLatestPost"],
  data() {
    return {
      latestPost: "",
    };
  },

  computed: {
    truncatedLatestPost() {
      return this.latestPost
        ? this.latestPost.slice(0, 30) +
            (this.latestPost.length > 30 ? "..." : "")
        : "";
    },
  },
  watch: {
    userLatestPost: {
      handler(newVal) {
        console.log("userLatestPost updated:", newVal);
        this.latestPost = newVal?.postContent || "";
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.latestPost = this.userLatestPost?.postContent || "";
  },

  methods: {},
  template: `
    <div class="profile">
    <div class="profile-top">
        <img
        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D"
        alt="mdo"
        width="75"
        height="75"
        class="rounded-circle profile-pic"
        />
        <div class="user-info">
            <h3>Andrew Potter</h3>
            <p class="bio">Product Manager at WeShine</p>
        <div class="interests">
            <div class="icon-box icon-box-square with-primary-color">
                <span class="material-symbols-rounded display-bg-color">fitness_center</span>
            </div>
            <div class="icon-box icon-box-square with-primary-color">
                <span class="material-symbols-rounded display-bg-color">sports_basketball</span>
            </div>
            <div class="icon-box icon-box-square with-primary-color">
                <span class="material-symbols-rounded display-bg-color">pool</span>
            </div>
            <div class="icon-box icon-box-square with-primary-color">
                <span class="material-symbols-rounded display-bg-color">sports_soccer</span>
            </div>
            <div class="icon-box icon-box-square with-primary-color">
                <span class="material-symbols-rounded display-bg-color">brush</span>
            </div>
        </div>
        </div>                   
    </div>  
    <div class="profile-bottom">
        <div class="daily-thought">
            <h3 class="heading-margin">Daily Thought</h3>
            <p>No mountains are too high to climb.</p>
        </div>
        <div class="latest-post">
            <h3 class="heading-margin">Latest Post</h3>
        <div class="latest-post-card">
        <p class="short-desc">{{ truncatedLatestPost }}</p>
        <p v-if="latestPost">Read More</p>
        </div>
        </div>
    </div>                
</div>
    `,
};
