import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/authentication",
    name: "Authentication",
    component: () => import("../components/API/Authentication/AuthAPI.vue"),
  },
  {
    path: "/addSender",
    name: "Add Sender",
    component: () => import("../components/Add Sender/AddSender.vue"),
  },
  {
    path: "/add-kyc",
    name: "Add Kyc",
    component: () => import("../components/Add Kyc/AddKyc.vue"),
  },
  {
    path: "/addBeneficiary",
    name: "Create Beneficiary",
    component: () => import("../components/Beneficiary/createBeneficiary.vue"),
  },
  {
    path: "/doTransaction",
    name: "Do Transaction Pay",
    component: () =>
      import("../components/Do Transaction Pay/doTransactionPay.vue"),
  },
  {
    path: "/transactionStatus",
    name: "transaction status",
    component: () =>
      import("../components/transaction status/transactionStatus.vue"),
  },
  {
    path: "/exchangerate",
    name: "exchange rate",
    component: () => import("../components/Exchange rates/exchangeRate.vue"),
  },
  {
    path: "/interface-specification",
    name: "Interface Specification",
    component: () =>
      import("../components/interface specifiction/interfaceSpecification.vue"),
  },
  {
    path: "/security",
    name: "Security",
    component: () => import("../components/security/security.vue"),
  },
  {
    path: "/requestHeader",
    name: "Request Header",
    component: () => import("../components/request header/requestHeader.vue"),
  },
  {
    path: "/digital-signature",
    name: "Digital Signature",
    component: () =>
      import("../components/Digital Signature/digitalSignature.vue"),
  },
  {
    path: "/postman-collections",
    name: "Postman Collections",
    component: () =>
      import("../components/Postman Collections/postmanCollections.vue"),
  },
  {
    path: "/",
    name: "Document History",
    component: () =>
      import("../components/Document History/documentHistory.vue"),
  },
  {
    path: "/support-contact",
    name: "Support Contacts",
    component: () =>
      import("../components/Support Contacts/supportContact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
