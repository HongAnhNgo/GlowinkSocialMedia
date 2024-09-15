const Feed = {
  inject: ["selectedTag", "setUserLatestPost"],
  computed: {
    filteredPosts() {
      if (this.selectedTag === "All") {
        return this.posts;
      }
      return this.posts.filter((post) => post.tags.includes(this.selectedTag));
    },
  },
  data() {
    return {
      posts: [
        {
          self: false,
          ownerName: "Alppi",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "18:20",
          postChallenge: "Morning run",
          postChallengeAuthor: "Edma",
          postContent:
            "Just finished my first 20km run today! Feeling exhausted but happy nonetheless. Will try to keep this up every weekend. Cheers!",
          likesCount: 5,
          commentsCount: 1,
          sharesCount: 2,
          comments: [
            {
              commenterName: "Josh Cambri",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "Let’s go Alppi! proud of u!",
            },
          ],
          newComment: "",
          tags: ["All", "Sports", "Outdoor"],
        },
        {
          self: false,
          ownerName: "Lina",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "19:30",
          postChallenge: "One week crochet",
          postChallengeAuthor: "Grace",
          postContent:
            "Today I crocheted a scarf for my mum! It turns out beautiful! And I just started learning how to crochet a week ago. Thank you guys for the inspiration and encouragement, it means a lot to me.",
          likesCount: 8,
          commentsCount: 1,
          sharesCount: 1,
          comments: [
            {
              commenterName: "Marie Curry",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "The scarf is so beautiful. Congrats!",
            },
          ],
          newComment: "",
          tags: ["All", "Arts & Crafts", "Something New"],
        },
        {
          self: false,
          ownerName: "Drew Hays",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "14:20",
          postChallenge: "50 Daily Push up",
          postChallengeAuthor: "James Well",
          postContent:
            "Just did 60 pushups today. Felt awesome. Will try to keep this up every day. Cheers!",
          likesCount: 5,
          commentsCount: 1,
          sharesCount: 2,
          comments: [
            {
              commenterName: "Josh Cambri",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "Let’s go Drew! proud of u!",
            },
          ],
          newComment: "",
          tags: ["All", "Sports"],
        },
        {
          self: false,
          ownerName: "Melina Karatovski",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "11:36",
          postChallenge: "Learning French everyday",
          postChallengeAuthor: "Josh",
          postContent:
            "Today I just did 2 hours of learning french by myself. Feel motivated!",
          likesCount: 8,
          commentsCount: 1,
          sharesCount: 1,
          comments: [
            {
              commenterName: "Marie Curry",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "Congrats!",
            },
          ],
          newComment: "",
          tags: ["All", "Languages", "Something New"],
        },
        {
          self: false,
          ownerName: "Xavier Hannes",
          ownerProfilePicUrl:
            "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "10:25",
          postChallenge: "Mountain Climbing",
          postChallengeAuthor: "Ricardo",
          postContent: "Feel like I'm on top of the world!",
          likesCount: 5,
          commentsCount: 1,
          sharesCount: 2,
          comments: [
            {
              commenterName: "Josh Cambri",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "Looks good, brother!",
            },
          ],
          newComment: "",
          tags: ["All", "Sports", "Outdoor"],
        },
        {
          self: false,
          ownerName: "Victoria",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "19:30",
          postChallenge: "Destresswith a picnic by the sea",
          postChallengeAuthor: "Grace",
          postContent:
            "I spent this afternoon having a picnic near the beach. It was great, highly recommended.",
          likesCount: 8,
          commentsCount: 1,
          sharesCount: 1,
          comments: [
            {
              commenterName: "Lavenia",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              commentContent: "I also love the beach! Let's hangout sometimes!",
            },
          ],
          newComment: "",
          tags: ["All", "Outdoor"],
        },
        {
          self: false,
          ownerName: "Simmons",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "18:20",
          postChallenge: "Go Gym Everyday",
          postChallengeAuthor: "Alan",
          postContent:
            "Just finished my first 3hrs gym session today! Feeling exhausted but happy nonetheless. Will try to keep this up every weekend. Cheers!",
          likesCount: 5,
          commentsCount: 1,
          sharesCount: 2,
          comments: [
            {
              commenterName: "Stephano",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              commentContent: "Great Job!",
            },
          ],
          newComment: "",
          tags: ["All", "Sports"],
        },
        {
          self: false,
          ownerName: "Sylvia",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "22:30",
          postChallenge: "Folk dancing",
          postChallengeAuthor: "Garcia",
          postContent:
            "Today I join a folk dancing class. It's actually so much fun!",
          likesCount: 4,
          commentsCount: 1,
          sharesCount: 1,
          comments: [],
          newComment: "",
          tags: ["All", "Arts & Crafts", "Something New"],
        },
        {
          self: false,
          ownerName: "Sengun",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "07:18",
          postChallenge: "Morning Cold Shower",
          postChallengeAuthor: "Cristiano",
          postContent: "So cold! But worth it. I feel more alert than ever!",
          likesCount: 5,
          commentsCount: 1,
          sharesCount: 2,
          comments: [
            {
              commenterName: "Josh Cambri",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent: "Very nice Sengun!",
            },
          ],
          newComment: "",
          tags: ["All", "Something New"],
        },
        {
          self: false,
          ownerName: "Hannah",
          ownerProfilePicUrl:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          postTime: "19:30",
          postChallenge: "Swimming Class",
          postChallengeAuthor: "Ali",
          postContent:
            "Just learn how to swim today at the age of 26. Never too late to learn something new!",
          likesCount: 8,
          commentsCount: 1,
          sharesCount: 1,
          comments: [
            {
              commenterName: "Marie Curry",
              commenterProfilePicUrl:
                "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              commentContent:
                "That's awesome. I actually still don't know how to swim, and I'll be 30 next month 😭",
            },
          ],
          newComment: "",
          tags: ["All", "Sports", "Something New"],
        },
      ],
      selectedChallenge: "",
      newPost: {
        self: true,
        ownerName: "Andrew Potter",
        ownerProfilePicUrl:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D",
        postTime: "",
        postChallenge: "",
        postChallengeAuthor: "",
        postContent: "",
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0,
        comments: [],
        newComment: "",
        tags: ["All"],
      },
    };
  },
  methods: {
    addComment(post) {
      if (post.newComment.trim() !== "") {
        post.comments.push({
          commenterName: "Andrew Potter",
          commenterProfilePicUrl:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D",
          commentContent: post.newComment,
        });
        post.commentsCount++;
        post.newComment = "";
      }
    },
    addTag(event) {
      if (event.code == "Comma" || event.code == "Enter") {
        event.preventDefault();
        var val = event.target.value.trim();
        if (val.length > 0) {
          this.newPost.tags.push(val);
          event.target.value = "";
        }
      }
    },
    removeTag(index) {
      this.newPost.tags.splice(index, 1);
    },
    removeLastTag(event) {
      if (event.target.value.length === 0) {
        this.removeTag(this.newPost.tags.length - 1);
      }
    },
    updatePostChallenge() {
      const selected = this.selectedChallenge;

      if (selected === "Individual Post (No challenge)") {
        this.newPost.postChallenge = "";
        this.newPost.postChallengeAuthor = "";
      } else {
        const parts = selected.split(" - ");
        this.newPost.postChallenge = parts[0] || "";
        this.newPost.postChallengeAuthor = parts[1] || "";
      }
    },
    addNewPost() {
      this.newPost.postTime = new Date().toLocaleString();
      this.setUserLatestPost({ ...this.newPost });
      console.log("New post added:", this.newPost);
      const newPosts = this.posts.slice(); // Create a copy using slice
      newPosts.unshift({ ...this.newPost }); // Spread operator to avoid mutation
      this.posts = newPosts;

      this.newPost.postTime = "";
      this.newPost.postChallenge = "";
      this.newPost.postChallengeAuthor = "";
      this.newPost.postContent = "";
      this.newPost.tags = ["All"];
    },
  },
  template: `
    <section class="main-center">
        <div class="main-top">
          <div class="main-top-left">
            <p class="date">Tuesday, 4th June 2024</p>
            <p class="quote">
              “With the new day comes new strength and new thoughts.” - Eleanor
              Roosevelt
            </p>
          </div>
          <div class="main-top-right">
            <button class="button-fill button-wrap" data-bs-toggle="modal" data-bs-target="#addNewPostModal">
              <span class="material-symbols-rounded display-bg-color">
                add </span
              ><span class="button-text">Add new post </span>
            </button>
            <!-- Modal -->
            <div class="modal fade" id="addNewPostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Add new post</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form class="custom-form">
                     
                        <select class="form-select" id="select Challenge" aria-label="Choose Challenge" v-model="selectedChallenge" @change="updatePostChallenge">
                          <option disabled selected>Choose a challenge</option>
                          <option value="Individual Post (No challenge)">Individual Post (No challenge)</option>
                          <option value="Morning run - Edma">Morning run - Edma</option>
                          <option value="One week crochet - Grace">One week crochet - Grace</option>
                        </select>
                      
                    
                        <textarea v-model="newPost.postContent" class="form-control" placeholder="New post content" id="postContent" style="height: 100px"></textarea>
                        
                        <div class="tag-container">
                          <p>Tags</p>
                          <div class="tag-input" id="tags">
                            <div class="tag-list">
                              <div v-for="(tag, index) in newPost.tags" :key="tag" class="tag-input__tag">

                                <span v-if="index!=0" @click="removeTag(index)">x</span>
                                {{ tag }}
                              </div>
                            </div>                         
                            <input type="text" class="form-control tag-input__text" id="tagsInput" placeholder="Sports, Arts, Outdoor, ..." @keydown="addTag" @keydown.delete="removeLastTag">    
                          </div>
                        </div>
                
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="button-outline button-wrap" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="button-fill button-wrap" @click="addNewPost" data-bs-dismiss="modal">Add new post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feed">
      <div v-for="post in filteredPosts" :key="post.ownerName" class="post-card">
        <div class="post-card-top">
          <div class="post-card-top-left">
            <div class="profile-pic-container">
              <img :src="post.ownerProfilePicUrl" alt="profile picture" width="40" height="40" class="rounded-circle profile-pic" />
            </div>
            <div class="user-post-container">
              <div class="user-post-container-top">
                <p class="username">{{ post.ownerName }}</p>
                <button v-if="!post.self" class="button-outline button-wrap display-primary-color button-follow">
                  <span class="material-symbols-rounded display-primary-color follow-icon">add</span>
                  <span>Follow</span>
                </button>
              </div>
              <div class="user-post-container-bottom">
                <p>{{ post.postTime }}</p>
              </div>
            </div>
          </div>
          <div v-if="post.postChallenge" class="post-card-top-right">
            <span class="material-symbols-rounded display-primary-color">line_end</span>
            <span><span>{{ post.postChallenge }}</span> - <span class="username display-primary-color">{{ post.postChallengeAuthor }}</span></span>
            <span class="material-symbols-rounded display-primary-color">line_start</span>
          </div>
        </div>
        <div class="post-content">
          <p>{{ post.postContent }}</p>
        </div>
        <div class="post-card-bottom">
          <div class="post-card-bottom-left">
            <div class="post-like-container">
              <button class="button-like"><span class="material-symbols-outlined display-primary-color">thumb_up</span></button>
              <span>{{ post.likesCount }}</span>
              <span>Likes</span>
            </div>
            <div class="post-like-container">
              <span class="material-symbols-outlined display-primary-color">comment</span>
              <span>{{ post.commentsCount }}</span>
              <span>Comments</span>
            </div>
            <div class="post-like-container">
              <span class="material-symbols-outlined display-primary-color">share</span>
              <span>{{ post.sharesCount }}</span>
              <span>Shares</span>
            </div>
          </div>
          <div class="post-card-bottom-right">
            <div class="user-comment">
              <div class="user-comment-top">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D" alt="mdo" width="32" height="32" class="rounded-circle profile-pic" />
                <p class="username">Andrew Potter</p>
              </div>
              <div class="user-comment-bottom">
                <input v-model="post.newComment" type="search" class="form-control p-3 search-input comment-input" placeholder="Share your thought on this post" aria-label="Comment" />
                <button @click="addComment(post)" class="button-fill button-wrap">Comment</button>
              </div>
            </div>
            <div class="other-comments" v-for="comment in post.comments" :key="comment.commenterName">
              <div class="other-comment">
                <div class="user-comment-top">
                  <img :src="comment.commenterProfilePicUrl" alt="profile picture" width="32" height="32" class="rounded-circle profile-pic" />
                  <p class="username">{{ comment.commenterName }}</p>
                </div>
                <div class="user-comment-bottom">
                  <p>{{ comment.commentContent }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    `,
};
