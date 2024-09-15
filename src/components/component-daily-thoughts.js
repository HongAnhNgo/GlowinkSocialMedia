const DailyThoughts = {
  data() {
    return {
      dailyThoughts: [
        {
          userProfilePicUrl:
            "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          username: "Lina",
          timeCreated: "19:52",
          thoughtContent: "Be brave enough to be bad at something new.",
          likesCount: 5,
        },
        {
          userProfilePicUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqsuPjSIMjq0rw1wCOyLFKjh6em4nzB7lMxA&s",
          username: "Cristiano Ronaldo",
          timeCreated: "20:12",
          thoughtContent: "I'm living a dream I never want to wake up from!",
          likesCount: 25,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/women/1.jpg",
          username: "Emma",
          timeCreated: "08:30",
          thoughtContent: "Every day is a new beginning.",
          likesCount: 10,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/men/2.jpg",
          username: "John",
          timeCreated: "10:45",
          thoughtContent:
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          likesCount: 15,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/women/3.jpg",
          username: "Sophia",
          timeCreated: "12:20",
          thoughtContent:
            "In the end, we only regret the chances we didn't take.",
          likesCount: 8,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/men/4.jpg",
          username: "Daniel",
          timeCreated: "15:00",
          thoughtContent:
            "Life is 10% what happens to us and 90% how we react to it.",
          likesCount: 20,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/women/5.jpg",
          username: "Olivia",
          timeCreated: "16:45",
          thoughtContent:
            "The only way to do great work is to love what you do.",
          likesCount: 12,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/men/6.jpg",
          username: "Michael",
          timeCreated: "18:10",
          thoughtContent: "Dream big and dare to fail.",
          likesCount: 18,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/women/7.jpg",
          username: "Ava",
          timeCreated: "21:30",
          thoughtContent: "Believe you can and you're halfway there.",
          likesCount: 14,
        },
        {
          userProfilePicUrl: "https://randomuser.me/api/portraits/men/8.jpg",
          username: "William",
          timeCreated: "22:15",
          thoughtContent:
            "The future belongs to those who believe in the beauty of their dreams.",
          likesCount: 16,
        },
      ],
      perPage: 3,
      currentPage: 1,
    };
  },
  components: {
    paginate: VuejsPaginateNext,
  },
  computed: {
    // returns the data according to the page number
    getItems: function () {
      let current = this.currentPage * this.perPage;
      let start = current - this.perPage;
      return this.dailyThoughts.slice(start, current);
    },
    //returns total number of pages required according to the total rows of data
    getPageCount: function () {
      return Math.ceil(this.dailyThoughts.length / this.perPage);
    },
  },
  methods: {
    //sets the clicked page
    clickCallback: function (pageNum) {
      this.currentPage = Number(pageNum);
    },
  },
  template: `
    <div class="daily-thoughts">
      <h2>Daily Thoughts</h2>
      <div class="thoughts-container">
        <div v-for="(thought, index) in getItems" :key="index" class="thought">
          <div class="thought-top">
            <div class="profile-pic-container">
              <img
                :src="thought.userProfilePicUrl"
                alt="User Profile"
                width="40"
                height="40"
                class="rounded-circle profile-pic"
              />
            </div>
            <div class="user-post-container">
              <div class="user-post-container-top">
                <p class="username">{{ thought.username }}</p>
                <button class="button-outline button-wrap display-primary-color button-follow">
                  <span class="material-symbols-rounded display-primary-color follow-icon">add </span>
                  <span>Follow</span>
                </button>
              </div>
              <div class="user-post-container-bottom">
                <p>{{ thought.timeCreated }}</p>
              </div>
            </div>
          </div>
          <div class="thought-content">
            <p>{{ thought.thoughtContent }}</p>
          </div>
          <div class="thought-bottom">
            <div class="post-like-container">
              <span class="material-symbols-outlined display-primary-color">thumb_up</span>
              <span>{{ thought.likesCount }}</span>
              <span>Likes</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-center">
    <!-- Vue Paginate template -->
    <paginate
      :page-count="getPageCount"
      :page-range="6"
      :margin-pages="5"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
      </div>
    </div>
  `,
};
