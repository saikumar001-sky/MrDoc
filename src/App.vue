<template>
  <div class="main-wrapper h-screen w-full dark:bg-gray-700">
    <nav class="h-20 bg-slate-100">
      <div class="py-3 ms-8">
        <img :src="main_logo" alt srcset class="w-48" />
      </div>
    </nav>
    <div class="flex flex-row">
      <aside class="px-3 w-80 text-slate-500">
        <div v-for="(menu, index) in sidemenu" :key="index">
          <button
            class="font-medium text-left w-full p-2 hover:text-primary-500"
            @click="menu.main_is_active = !menu.main_is_active"
          >
            {{ menu.title }}
            <span class="float-right mx-2 font-semibold">
              {{
              menu.main_is_active ? "-" : "+"
              }}
            </span>
          </button>
          <div class="list-none ps-6 mt-1 w-full transition-all" v-if="menu.main_is_active">
            <ul v-for="(submenu, subindex) in menu.content" :key="subindex">
              <button @click="$router.push(submenu.path)" class="py-2 w-full text-left hover:text-primary-500">{{ submenu.sub_title }}</button>
            </ul>
          </div>
        </div>
      </aside>
      <div class="w-full m-4">
        <div class="w-full h-custom-main-height overflow-y-auto">
          <router-view></router-view>
        </div>

        <!-- <div class="border flex flex-rows">
          <div class="border w-full">body</div>
          <div class="border basis-1/4">Table of contents</div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import main_logo from "./assets/main_logo.png"
import {onMounted, ref} from "vue"
import { useRouter } from 'vue-router';
const router = useRouter();

const sidemenu=ref([{
  id:1,
  title:"Service Details",
  main_is_active:false,
  content:[
    {
  sub_id: 1,
  sub_title: "Document History",
  is_sub_active: false,
  path: "/docHistory"
},
{
  sub_id: 2,
  sub_title: "Support Contacts",
  is_sub_active: false,
  path: "/supportContacts"
}
  ]
},{
  id:1,
  title:"Developer Guide",
  main_is_active:false,
  content:[
    {
  sub_id: 1,
  sub_title: "Interface Specification",
  is_sub_active: false,
  path: "/interfaceSpecification"
},
{
  sub_id: 2,
  sub_title: "Security",
  is_sub_active: false,
  path: "/security"
},
{
  sub_id: 3,
  sub_title: "Request Header",
  is_sub_active: false,
  path: "/requestHeader"
},
{
  sub_id: 4,
  sub_title: "Digital Signature",
  is_sub_active: false,
  path: "/digitalSignature"
},
{
  sub_id: 5,
  sub_title: "Postman Collections",
  is_sub_active: false,
  path: "/postmanCollections"
}

  ]
},{
  id:1,
  title:"API Reference",
  main_is_active:true,
  content:[
    {
  "sub_id": 1,
  "sub_title": "Authentication",
  "is_sub_active": false,
  "path": "/authentication"
},

{
  "sub_id": 3,
  "sub_title": "Add Sender",
  "is_sub_active": false,
  "path": "/addSender"
},
{
  "sub_id": 4,
  "sub_title": "Add Beneficiary",
  "is_sub_active": false,
  "path": "/addBeneficiary"
},
{
  "sub_id": 2,
  "sub_title": "Get Rates",
  "is_sub_active": false,
  "path": "/exchangerate"
},
{
  "sub_id": 5,
  "sub_title": "Do Transaction",
  "is_sub_active": false,
  "path": "/doTransaction"
},
{
  "sub_id": 6,
  "sub_title": "Transaction Status",
  "is_sub_active": false,
  "path": "/transactionStatus"
}

]

}])
const route =(path)=>{
router.push(path);
}
</script>
<style></style>
