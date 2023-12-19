<template>
  <div>
    <h1>Dashboard</h1>
    <div class="container">
      <div class="box">
        <div class="mini-container">
          <div class="texts">
            <p>Home</p>
            <i class="fa-solid fa-home"></i>
          </div>
        </div>
        <div class="router-link">
          <router-link to="/home">
            View Home <i class="fa-solid fa-circle-arrow-right"></i>
          </router-link>
        </div>
      </div>

      <div class="box">
        <div class="mini-container">
          <div class="texts">
            <p>Student</p>
            <i class="fa-solid fa-user-graduate"></i>
          </div>
        </div>
        <div class="router-link">
          <router-link to="/students">
            View Students <i class="fa-solid fa-circle-arrow-right"></i>
          </router-link>
        </div>
      </div>

      <div class="box">
        <div class="mini-container">
          <div class="texts">
            <p>Course</p>
            <i class="fa-solid fa-book"></i>
          </div>
        </div>
        <div class="router-link">
          <router-link to="/courses">
            View Courses <i class="fa-solid fa-circle-arrow-right"></i>
          </router-link>
        </div>
      </div>

      <div class="box">
        <div class="mini-container">
          <div class="texts">
            <p>Enrollment</p>
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
        <div class="router-link">
          <router-link to="/enrollments">
            View Enrollments <i class="fa-solid fa-circle-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 25px;
  font-family: 'Times New Roman', serif;
}

.select {
  border-radius: 5px;
  margin-left: 10px;
  font-family: 'Times New Roman', serif;
}

.container {
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.drop-list {
  padding-top: 15px;
  margin-right: 10px;
}

.texts i {
  font-size: 50px;
  text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.75);
  color: #8b4513; /* Adjust the color for a vintage feel */
}

.texts {
  color: #8b4513; /* Adjust the color for a vintage feel */
  margin-left: 10px;
  padding-top: 15px;
  display: flex;
  align-items: center;
  gap: 50px;
}

.router-link a {
  color: #8b4513; /* Adjust the color for a vintage feel */
  text-decoration: none; /* Removing underline */
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.router-link a:hover {
  color: #000080; /* Change color on hover */
}

.router-link {
  text-align: center;
  background-color: #d2b48c; /* Adjust the background color for a vintage feel */
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 5px;
}

.mini-container {
  display: flex;
  justify-content: space-between;
  background-color: #f0e68c; /* Adjust the background color for a vintage feel */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding-bottom: 15px;
}

.box {
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: #fafad2; /* Adjust the background color for a vintage feel */
  border: 1px solid #8b4513; /* Adjust border color for a vintage feel */
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
}

.title {
  text-align: center;
  align-items: center;
  gap: 20px;
  justify-content: center;
  border-bottom: 1px solid #8b4513; /* Adjust border color for a vintage feel */
  display: flex;
  color: #8b4513; /* Adjust the color for a vintage feel */
  font-size: 28px;
  font-weight: bold;
}
</style>

