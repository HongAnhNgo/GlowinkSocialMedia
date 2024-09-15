const Categories = {
  inject: ["setTag"],
  data() {
    return {
      activeTag: "All",
    };
  },
  methods: {
    handleCategoryClick(tag) {
      this.activeTag = tag;
      this.setTag(tag);
    },
  },
  computed: {
    buttonClass() {
      return (tag) => {
        return this.activeTag === tag ? "button-fill" : "button-outline";
      };
    },
  },
  template: `
    <div class="categories">
                <h2>Categories</h2>
                <div class="category-list">
                <button 
                v-for="tag in ['All', 'Arts & Crafts', 'Sports', 'Languages', 'Outdoor', 'Something New']" 
                :key="tag"
                @click="handleCategoryClick(tag)" 
                :class="buttonClass(tag)"
              >
                {{ tag }}
              </button>
                </div>
    </div>
    `,
};
