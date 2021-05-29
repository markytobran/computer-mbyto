import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue"),
    children: [
      {
        path: "/services/maintenance",
        name: "Maintenance",
        component: () => import("../components/PcMaintenance.vue"),
      },
      {
        path: "/services/repair",
        name: "Repair",
        component: () => import("../components/PcRepair.vue")
      },
      {
        path: "/services/website",
        name: "Website",
        component: () => import("../components/Website.vue")
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
