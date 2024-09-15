const Home = {
  data() {
    return {};
  },
  methods: {},
  template: `
  <header
  class="p-2 border-bottom d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between"
>
  <div
    class="header-left col-12 col-lg-auto d-flex align-items-center justify-content-center ms-lg-3 mb-2 mb-lg-0"
  >
    <div class="logo-box me-3">
      <a href="#" class="logo">glowink</a>
    </div>
    <div class="search-box">
      <input
        type="search"
        class="form-control p-3 ms-2 search-input"
        placeholder="Search glowink"
        aria-label="Search"
      />
    </div>
  </div>
  <div
    class="header-center col-12 col-lg-auto d-flex align-items-center justify-content-center gap-2 gap-lg-5 mb-2 mb-lg-0"
  >
    <div class="icon-box menu-box">
      <span class="material-symbols-rounded active">home</span>
    </div>
    <div class="icon-box menu-box">
      <span class="material-symbols-rounded">diversity_3</span>
    </div>
    <div class="icon-box menu-box">
      <span class="material-symbols-rounded">coffee</span>
    </div>
  </div>
  <div
    class="header-right col-12 col-lg-auto me-lg-3 d-flex align-items-center justify-content-center gap-3 p-3 p-lg-0"
  >
    <div class="icon-box with-bg-color">
      <span class="material-symbols-rounded">hive</span>
    </div>
    <div class="icon-box with-bg-color">
      <span class="material-symbols-rounded">notifications</span>
    </div>
    <div class="dropdown text-end">
      <a
        href="#"
        class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBtYW58ZW58MHx8MHx8fDA%3D"
          alt="mdo"
          width="40"
          height="40"
          class="rounded-circle profile-pic"
        />
      </a>
      <ul class="dropdown-menu text-normal mt-3">
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#"><router-link to="/login" v-on:click="logout()" replace
        >Logout</router-link></a></li>
      </ul>
    </div>
  </div>
</header>

    <main class="custom-main-layout">
      <section class="section-left">
        <component-profile/>
        <hr>
        <component-categories/>
      </section>
      <component-feed/>
      <section class="section-right">
        <component-daily-challenge-log/>
        <hr>
        <component-daily-thoughts/>
      </section>
    </main>
    `,
};
