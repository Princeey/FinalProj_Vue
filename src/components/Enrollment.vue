<template>
  <div>
    <h1>Enrollments</h1>
    <div class="d-grip gap-2 d-md-flex justify-content-md-end mb-3">
      <router-link
        to="/enrollment/create"
        class="btn btn-primary mo-md-2"
        type="button"
      >
        Add New Enrollment
      </router-link>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Student ID</th>
          <th>Course ID</th>
          <th>Enrollment Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="enrollment in enrollments" :key="enrollment.id">
          <td>{{ enrollment.id }}</td>
          <td>{{ enrollment.student_id }}</td>
          <td>{{ enrollment.course_id }}</td>
          <td>{{ enrollment.enrollment_date }}</td>
          <td>
            <button @click="deleteEnrollment(enrollment.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const enrollments = ref([]);
const router = useRouter();

onMounted(async () => {
  await fetchEnrollments();
});

const fetchEnrollments = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/enrollments");
    const data = await response.json();
    enrollments.value = data;
  } catch (error) {
    console.error("Error fetching enrollments:", error);
  }
};

const deleteEnrollment = async (enrollmentId) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/enrollments/${enrollmentId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Remove the deleted enrollment from the list
      enrollments.value = enrollments.value.filter(
        (enrollment) => enrollment.id !== enrollmentId
      );
      alert("Enrollment deleted successfully");
      console.log("Enrollment deleted successfully");
    } else {
      console.error("Error deleting enrollment:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting enrollment:", error);
  }
};
</script>

<style scoped>
/* Styles for the Enrollments view */
h1 {
  color: #1976d2; /* Blue */
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5); /* Text shadow */
}

.btn-primary {
  background-color: #1976d2; /* Blue for primary action */
}

.btn-primary:hover {
  background-color: #1565c0; /* Darker blue on hover */
}

.btn-danger {
  background-color: #d32f2f; /* Red for danger/delete */
}

.btn-danger:hover {
  background-color: #b71c1c; /* Darker red on hover */
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

/* Optional: Highlight rows on hover */
.table tbody tr:hover {
  background-color: #f0f0f0; /* Light grey on row hover */
}
</style>

