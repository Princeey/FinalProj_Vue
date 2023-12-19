<template>
  <div class="row">
    <div id="container" class="col-md-5">
      <form @submit.prevent="createEnrollment">
        <div class="course_id">
          <label
            ><i class="fa-solid fa-id-card"></i> Course ID:
            <input
              v-model="formData.course_id"
              required
              class="form-control"
              placeholder="1-10"
          /></label>
        </div>
        <div class="student_name">
          <label
            ><i class="fa-solid fa-user"></i> Student Name:
            <input
              v-model="formData.student_name"
              required
              class="form-control"
              placeholder="Name"
          /></label>
        </div>
        <div class="contact_number">
          <label
            ><i class="fa-solid fa-address-book"></i> Contact Number:
            <input
              v-model="formData.contact_number"
              required
              class="form-control"
              placeholder="xxx xxxx xxxx"
          /></label>
        </div>
        <div class="email">
          <label
            ><i class="fa-solid fa-envelope"></i> Email:
            <input
              v-model="formData.email"
              required
              class="form-control"
              placeholder="Email"
          /></label>
        </div>
        <button type="submit" class="btn btn-primary">
          Create Enrollment <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  course_id: "",
  student_name: "",
  contact_number: "",
  email: "",
});

const createEnrollment = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/enrollments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      console.log("Enrollment created successfully");
      router.push("/enrollments");
    } else {
      console.error("Error creating enrollment:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating enrollment:", error);
  }
};
</script>

<style scoped>
#container {
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.row {
  width: 100%;
}

.course_id,
.student_name,
.contact_number,
.email {
  margin-bottom: 15px;
}

form {
  margin-top: 40px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  background-color: white;
  padding: 20px;
}
</style>
