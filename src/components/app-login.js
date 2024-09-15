const Login = {
  data() {
    return {
      msg: "",
      input: {
        username: "",
        password: "",
      },
      valid: true,
    };
  },
  methods: {
    login() {
      const { username, password } = this.input;
      if (username === "testuser" && password === "test12345") {
        this.$emit("isAuthenticated", true);
        this.$router.replace({ name: "home" });
      } else {
        this.msg =
          "Username or password incorrect. For testing, please enter 'testuser' as username and 'test12345' as password.";
      }
    },
    reset() {
      this.input.username = "";
      this.input.password = "";
      this.msg = "";
    },
  },
  template: `
  <div class="illustration">
  <div class="login-container">
    <div class="login-header">
      <h1>Welcome to <span class="logo">glowink</span></h1>
      <p>a community that helps you grow</p>
    </div>
    <h2>Login</h2>
    <form class="custom-form" @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="username"
          placeholder="Enter username"
          v-model="input.username"
          required
        />
        <div v-if="input.username.length > 10" class="text-danger">
          Name must be less than 10 characters
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="input.password"
          minlength="8"
          required
        />
        <div v-if="input.password.length < 8 && input.password.length!=0" class="text-danger">
          Password must be more than 8 characters
        </div>
      </div>
      <button type="submit" class="button-fill">Login</button>
      <button type="button" class="button-outline" @click="reset">
        Reset
      </button>
    </form>
    <p class="mt-2 text-center text-danger">{{ msg }}</p>
    <p>
      New to <span class="logo small-logo">glowink</span>?
      <span class="underline-text">Sign Up</span>
    </p>
  </div>
</div>
    `,
};
