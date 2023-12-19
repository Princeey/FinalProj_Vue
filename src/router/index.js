import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentView from "../views/StudentView.vue";
import CourseView from "../views/CourseView.vue";
import EnrollmentView from "../views/EnrollmentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/students",
      name: "student",
      component: StudentView,
    },
    {
      path: "/courses",
      name: "course",
      component: CourseView,
    },
    {
      path: "/enrollments",
      name: "enrollment",
      component: EnrollmentView,
    },
    {
      path: "/enrollment/create",
      name: "create",
      component: () => import("../components/enrollment/create.vue"),
    },
  ],
});

export default router;
