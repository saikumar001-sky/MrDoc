import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/auth",
    name: "Authentication",
    component: () => import("../components/API/Authentication/AuthAPI.vue"),
  },
  {
    path: "/add-sender",
    name: "Add Sender",
    component: () => import("../components/Add Sender/AddSender.vue"),
  },
  {
    path: "/add-kyc",
    name: "Add Kyc",
    component: () => import("../components/Add Kyc/AddKyc.vue"),
  },
  {
    path: "/bene",
    name: "Create Beneficiary",
    component: () => import("../components/Beneficiary/createBeneficiary.vue"),
  },
  {
    path: "/do-trans",
    name: "Do Transaction Pay",
    component: () =>
      import("../components/Do Transaction Pay/doTransactionPay.vue"),
  },
  {
    path: "/transaction-status",
    name: "transaction status",
    component: () =>
      import("../components/transaction status/transactionStatus.vue"),
  },
  {
    path: "/exchange-rate",
    name: "exchange rate",
    component: () => import("../components/Exchange rates/exchangeRate.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
