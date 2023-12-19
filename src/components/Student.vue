<template>
  <div>
    <div class="header">
      <h1>Students</h1>
    </div>

    <div class="container">
      <div v-for="student in students" :key="student.id" class="student-info">
        <div class="mini-container">
          <img :src="student.image" alt="Student Image" class="student-image" />
          <h1 class="title">{{ student.name }}</h1>
          <div class="details">
            <p>Age: {{ student.age }}</p>
            <p>Grade: {{ student.grade }}</p>
          </div>
          <div class="actions">
            <button
              @click="enrollStudent(student)"
              type="button"
              class="btn btn-success"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const students = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/students/");
    const data = await response.json();
    students.value = data;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
});

const enrollStudent = async (student) => {
  try {
    const response = await fetch("http://localhost:8000/api/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id: student.id,
        // Other enrollment details you may need to pass
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Student enrolled successfully:", data.message);
      alert(`Successfully enrolled ${student.name}.`);
    } else {
      console.error("Error enrolling student:", data.message);
    }
  } catch (error) {
    console.error("Error enrolling student:", error);
  }
};
</script>


<style scoped>
/* Styles for the Students view */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  color: #1976d2; /* Blue */
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5); /* Text shadow */
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.mini-container {
  border-radius: 10px;
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: transform 0.3s ease;
}

.student-info {
  flex: 0 0 auto;
}

.student-image {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.title {
  color: #333; /* Darker text */
  text-align: center;
  margin-top: -20px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5); /* Text shadow */
}

.details {
  padding: 10px;
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.btn-success {
  background-color: #43a047; /* Green for success */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background-color: #388e3c; /* Darker green on hover */
}
</style>
