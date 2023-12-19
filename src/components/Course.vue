<template>
  <div>
    <h1>Courses</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.Description }}</td>
          <td>
            <button @click="enrollCourse(course)" class="btn btn-success">
              Enroll
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const courses = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/api/courses"
    );
    const data = await response.json();
    console.log("API response data:", data);
    courses.value = data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
});

const enrollCourse = async (course) => {
  try {
    const response = await fetch("http://localhost:8000/api/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_id: course.id,
        // Other enrollment details you may need to pass
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Course enrolled successfully:", data.message);
      alert(`Successfully enrolled in ${course.name}.`);
    } else {
      console.error("Error enrolling in course:", data.message);
    }
  } catch (error) {
    console.error("Error enrolling in course:", error);
  }
};
</script>

<style scoped>
/* Styles for the Courses view */
h1 {
  color: #37474f; /* Dark blue-grey */
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5); /* Text shadow */
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

/* Table styles */
.table th,
.table td {
  border: 1px solid #ccc; /* Light grey border */
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f5f5f5; /* Lighter grey for headers */
}

/* Button styles */
.btn {
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.btn-success {
  background-color: #43a047; /* Green for success */
}

.btn-success:hover {
  background-color: #388e3c; /* Darker green on hover */
}

/* Optional: Highlight rows on hover */
.table tbody tr:hover {
  background-color: #f0f0f0; /* Light grey on row hover */
}
</style>

