<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">KYC API</h2>
        <p>
          A KYC API typically returns an "approved" status if the provided ID is
          successfully verified and meets all regulatory requirements. If the ID
          does not pass verification due to discrepancies or insufficient
          information, the API will return a "not approved" status, indicating
          that the identity verification process has failed.
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>This endpoint is used to know the details of the customer.</p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-blue-500 text-white px-3 py-1 font-bold">GET</div>
          <div class="pt-1 font-semibold">/auth/get-kyc-status</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for KYC API.</p>
        <codeBlock :code="data" />
      </section>
      <!---------------- Request Schema  ------------------>
      <section class="my-4" id="auth-req">
        <h2 class="font-bold">Request Schema</h2>
        <h1>There is no Request Schema for this Api.</h1>
      </section>
      <section class="my-4" id="auth-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>There is no Sample Request Data for this Api.</p>
      </section>
      <!---------------- Reponse Schema  ------------------>
      <section class="my-4" id="auth-res">
        <h2 class="font-bold">Response Schema</h2>
        <div class="overflow-auto text-sm md:text-base">
          <table class="border bg-white my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Field</th>
              <th class="p-3">Required</th>
              <th class="p-3">min/max length</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3">kyc_status</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">8/10</td>
              <td class="p-3">
                Status of the user's KYC process (e.g., Approved, Pending).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">onboard_stage</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">1/2</td>
              <td class="p-3">
                The current stage of the user's onboarding process.
              </td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>Please Check below given sample response data for the KYC API.</p>
        <codeBlock :code="response_body" />
      </section>
      <section class="my-4" id="auth-status-codes">
        <h2 class="font-bold">Status Codes</h2>
        <div class="overflow-auto text-sm md:text-base">
          <table class="border my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Status Code</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3 text-green-400 font-bold">200</td>
              <td class="p-3">
                OK - The request has succeeded, and the user post the all kyc
                details successfully.
              </td>
            </tr>

            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found.the user not fill the kyc details</td>
            </tr>
          </table>
        </div>
      </section>
      <div class="container mb-4" id="register-api">
        <h2 class="font-bold">Register API</h2>
        <p>
          The KYC Summary Api contains the information about the customer like
          id proofs,selfie of the customer etc...
        </p>
      </div>
      <section class="my-4" id="register-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>
          This endpoint contains all the information related to the customer.
        </p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-blue-500 text-white px-3 py-1 font-bold">GET</div>
          <div class="pt-1 font-semibold">/auth/kyc-summery</div>
        </div>
      </section>
      <section class="my-4" id="reg-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for Register API.</p>
        <codeBlock :code="data1" />
      </section>
      <!---------------- Request Schema  ------------------>
      <section class="my-4" id="reg-req">
        <h2 class="font-bold">Request Schema</h2>
        <p>There is no Request Schema for this api.</p>
      </section>
      <section class="my-4" id="reg-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>There is no sample request data for this api.</p>
        <!-- <codeBlock :code="request_body1" /> -->
      </section>
      <section class="my-4" id="reg-res">
        <h2 class="font-bold">Response Schema</h2>
        <div class="overflow-auto text-sm md:text-base">
          <table class="border bg-white my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Field</th>
              <th class="p-3">Required</th>
              <th class="p-3">min/max length</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3">user_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Defines the type of user (e.g., IND).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_country_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Country code where the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_place</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Place where the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_type_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/2</td>
              <td class="p-3">Code representing the type of ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">12/12</td>
              <td class="p-3">The ID number of the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_expire_date</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">Expiration date of the ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_date</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">Date when the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">interview_date</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">Scheduled date of the interview.</td>
            </tr>
            <tr class="border">
              <td class="p-3">interview_time</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">8/8</td>
              <td class="p-3">Scheduled time of the interview.</td>
            </tr>
            <tr class="border">
              <td class="p-3">interview_city</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">City where the interview will take place.</td>
            </tr>
            <tr class="border">
              <td class="p-3">front_page</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">URL of the front page image of the ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">back_page</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">URL of the back page image of the ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">selfie</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">URL of the selfie image.</td>
            </tr>
            <tr class="border">
              <td class="p-3">front_page_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Name of the front page image file.</td>
            </tr>
            <tr class="border">
              <td class="p-3">back_page_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Name of the back page image file.</td>
            </tr>
            <tr class="border">
              <td class="p-3">selfie_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Name of the selfie image file.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="reg-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the KYC Summary API.
        </p>
        <codeBlock :code="response_body1" />
      </section>
      <section class="my-4" id="reg-status-codes">
        <h2 class="font-bold">Status Codes</h2>
        <div class="overflow-auto text-sm md:text-base">
          <table class="border my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Status Code</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3 text-green-400 font-bold">200</td>
              <td class="p-3">
                OK - The request has succeeded, and the user post the all kyc
                details successfully.
              </td>
            </tr>

            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found.the user not fill the kyc details</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
    <div class="w-96 ms-4">
      <TableofContents :sections="tocSections" />
    </div>
  </section>
</template>
<script setup lang="js">
  import codeBlock from "../../codeBlock.vue"
    import TableofContents from "../../TableofContents.vue"
  import {ref} from "vue"
  const tocSections = [
  { id: 'auth-api', label: 'KYC ',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint', is_main:false },
  { id: 'auth-curl', label: 'cURL', is_main:false},
  { id: 'auth-req', label: 'Request Schema', is_main:false },
  { id: 'auth-sample-req', label: 'Sample Request Data', is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false},
  { id: 'auth-sample-res', label: 'Sample Response Data', is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes', is_main:false},
  { id: 'register-api', label: 'KYC Summary ' ,is_main:true},
  { id: 'register-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'reg-curl', label: 'cURL' ,is_main:false},
  { id: 'reg-req', label: 'Request Schema',is_main:false },
  { id: 'reg-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'reg-res', label: 'Response Schema',is_main:false },
  { id: 'reg-sample-res', label: 'Sample Response Data',is_main:false },
  { id: 'reg-status-codes', label: 'Status Codes',is_main:false },

];
 const data=ref(`curl "https://online.remitrise.com/userservice/api/v1/auth/get-kyc-status" ^"`)
    const response_body=ref(           {
            "kyc_status": "Approved",
            "onboard_stage": "5"
        })
const request_body=ref({
    "user_name": "saikumar@mailsac.com",
    "password": "Admin@123",
    "user_type": "IND"
})
const data1 =ref(`curl "https://online.remitrise.com/userservice/api/v1/auth/kyc-summery" "`)
  const request_body1=ref({
    "user_name": "ind@mailsac.com",
    "password": "Admin@123",
    "user_type": "IND"
})
const response_body1=ref(       {
            "user_type": "IND",
            "id_issue_country_code": "",
            "id_issue_place": null,
            "id_type_code": "7",
            "id_number": "566565662216",
            "id_expire_date": "2024-08-09",
            "id_issue_date": "2024-08-02",
            "interview_date": "2024-08-29",
            "interview_time": "13:00:00",
            "interview_city": null,
            "front_page": "IMAGE1.PNG",
            "back_page": "IMAGE2.PNG",
            "selfie": "IMAGE3.PNG",
            "front_page_name": "arraylist.png",
            "back_page_name": "Screenshot (52).png",
            "selfie_name": "Screenshot (52).png"
        })
</script>
<style></style>
