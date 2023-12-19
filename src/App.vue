<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      this.isDropdownOpen = false;
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<template>
  <div class="top-nav">
    <div class="title">
      <a id="menu" @click="toggleDropdown" :class="{ change: isDropdownOpen }">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>

  <div class="container" :class="{ 'show-nav': isDropdownOpen }">
    <div class="close">
      <a id="close" @click="toggleDropdown" :class="{ change: isDropdownOpen }">
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </a>
    </div>

    <div class="mini-container">
      <div class="name">
        <h1>Student Management System</h1>
      </div>

      <div class="user">
        <div class="pic-container">
          <img src="../src/assets/profile.jpg" alt="Profile Picture" class="circular-pic" />
        </div>

        <h1>Prince Paul Banquil</h1>
      </div>
    </div>

    <nav>
      <RouterLink to="/"
        ><i class="fa-solid fa-house"></i><strong>Dashboard</strong></RouterLink
      >
      <RouterLink to="/students">
        <i class="fa-solid fa-gamepad"></i><strong>Students</strong></RouterLink
      >
      <RouterLink to="/courses"
        ><i class="fa-solid fa-box"></i><strong>Courses</strong></RouterLink
      >
      <RouterLink to="/enrollments"
        ><i class="fa-solid fa-user"></i><strong>Enrollments</strong></RouterLink
      >
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.name h1 {
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-family: 'Times New Roman', serif;
}

.top-nav {
  background-color: #8f8c2d;
  border-bottom: 1px solid #999;
}

nav a:hover {
  background-color: #a14444;
}

nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  font-family: 'Times New Roman', serif;
}

#menu i:hover {
  background-color: #333;
  color: #fff;
  border-radius: 5px;
}

.user h1 {
  font-size: 22px;
  color: #fff;
  font-family: 'Times New Roman', serif;
}

.circular-pic {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.pic-container {
  padding-right: 15px;
}

.mini-container {
  margin-bottom: -20px;
}

.user {
  padding: 15px;
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid #fff;
  align-items: center;
  text-align: center;
}

#menu i {
  color: #000;
  padding: 5px;
  border-radius: 5px;
}

h3 {
  color: #d3d3d3;
  font-family: 'Times New Roman', serif;
}

#close {
  padding-right: 15px;
  background-color: rgba(150, 140, 170, 0.986);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.top-nav {
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

a {
  cursor: pointer;
  font-family: 'Times New Roman', serif;
}

.close {
  padding-left: 290px;
  transform: translate(1px, 1px);
}

.close i {
  color: #060101;
  font-size: 20px;
}

.close i:hover {
  color: red;
}

.name {
  border-bottom: 1px solid #fff;
  padding: 5px;
}

.container {
  width: 25%;
  padding: 10px;
  background-color: rgb(81, 58, 24);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transform: translate(-115%, -53px);
  transition: transform 0.3s ease;
  height: 1000px;
  position: fixed;
  z-index: 1;
}

.container.show-nav {
  transform: translate(0, -53px);
  height: 1000px;
}

nav {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>

