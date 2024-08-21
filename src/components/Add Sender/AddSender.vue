<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">Profile API</h2>
        <p>
          The profile Api lets users manage Profile Information and Personal
          Information. Language Settings allow users to select their preferred
          language, while E-Mail Verification confirms their email status for
          updates. Users can change their password in the Change Password
          section. Finally, Two-Factor Authentication (2FA) shows whether
          additional security is enabled.
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>This endpoint is used to manage a user's profile.</p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-blue-500 text-white px-3 py-1 font-bold">GET</div>
          <div class="pt-1 font-semibold">/auth/profile</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for Profile API.</p>
        <codeBlock :code="data" />
      </section>
      <!---------------- Request Schema  ------------------>
      <section class="my-4" id="auth-req">
        <h2 class="font-bold">Request Schema</h2>
        <h1>There is no Request Schema for this api.</h1>
      </section>
      <section class="my-4" id="auth-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>There is no Request Data for this api.</p>
        <!-- <codeBlock :code="request_body" /> -->
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
              <td class="p-3">profile_pic</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">URL of the user's profile picture.</td>
            </tr>
            <tr class="border">
              <td class="p-3">first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">User's first name.</td>
            </tr>
            <tr class="border">
              <td class="p-3">middle_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">User's middle name.</td>
            </tr>
            <tr class="border">
              <td class="p-3">last_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">User's last name.</td>
            </tr>
            <tr class="border">
              <td class="p-3">email_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/100</td>
              <td class="p-3">User's email address.</td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/15</td>
              <td class="p-3">User's phone number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">user_status</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user account is active.</td>
            </tr>
            <tr class="border">
              <td class="p-3">two_factor_enabled</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if two-factor authentication is enabled.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">kyc_status</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">8/10</td>
              <td class="p-3">User's KYC status (e.g., Approved).</td>
            </tr>
            <tr class="border">
              <td class="p-3">customer_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">Full name of the customer.</td>
            </tr>
            <tr class="border">
              <td class="p-3">dob</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">Date of birth in YYYY-MM-DD format.</td>
            </tr>
            <tr class="border">
              <td class="p-3">nationality_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/50</td>
              <td class="p-3">User's nationality (e.g., Indian).</td>
            </tr>
            <tr class="border">
              <td class="p-3">gender</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">4/6</td>
              <td class="p-3">User's gender (e.g., Male).</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_of_birth</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/50</td>
              <td class="p-3">Country of birth (e.g., India).</td>
            </tr>
            <tr class="border">
              <td class="p-3">address</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/250</td>
              <td class="p-3">User's address.</td>
            </tr>
            <tr class="border">
              <td class="p-3">city</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">City of residence (e.g., Jitra).</td>
            </tr>
            <tr class="border">
              <td class="p-3">state</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">State of residence (e.g., Kedah).</td>
            </tr>
            <tr class="border">
              <td class="p-3">country</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">Country of residence (e.g., Malaysia).</td>
            </tr>
            <tr class="border">
              <td class="p-3">zip_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/10</td>
              <td class="p-3">Postal code (e.g., 80250).</td>
            </tr>
            <tr class="border">
              <td class="p-3">occupation_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">Occupation of the user (e.g., Accountant).</td>
            </tr>
            <tr class="border">
              <td class="p-3">source_of_fund_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">Source of funds (e.g., Company Compensation).</td>
            </tr>
            <tr class="border">
              <td class="p-3">language</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/5</td>
              <td class="p-3">Preferred language (e.g., en-us).</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_email_confirmation</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user's email is confirmed.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_mobile_confirmation</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user's mobile is confirmed.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the profile data
        </p>
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
              <td class="p-3">OK - The request has succeeded</td>
            </tr>

            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found.</td>
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
  { id: 'auth-api', label: 'Add Sender',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'auth-curl', label: 'cURL' ,is_main:false},
  { id: 'auth-req', label: 'Request Schema' ,is_main:false},
  { id: 'auth-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false },
  { id: 'auth-sample-res', label: 'Sample Response Data' ,is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes',is_main:false },
];
 const data=ref(` curl "https://online.remitrise.com/userservice/api/v1/auth/profile" ^
`)
    const response_body=ref(         {
            "profile_pic": "https://iremitu-uat-s3.s3.ap-south-1.amazonaws.com/Img/1723890305t7g3kywf.png",
            "first_name": "Venky",
            "middle_name": "",
            "last_name": "Nunna",
            "email_id": "venkateshdev@mailsac.com",
            "phone_number": "60662515121",
            "user_status": true,
            "two_factor_enabled": true,
            "kyc_status": "Approved",
            "customer_name": "Venky Nunna",
            "dob": "2001-11-25",
            "nationality_code": "Indian",
            "gender": "Male",
            "country_of_birth": "India",
            "address": "nayanapalli",
            "city": {
                "name": "Jitra",
                "id": 65657
            },
            "state": {
                "name": "Kedah",
                "state_code": "02"
            },
            "country": "Malaysia",
            "zip_code": "80250",
            "occupation_code": {
                "value": "ACCOUNTANT",
                "value_code": "1"
            },
            "source_of_fund_code": {
                "value": "COMPANY COMPENSATION",
                "value_code": "6"
            },
            "language": "en-us",
            "is_email_confirmation": true,
            "is_mobile_confirmation": false
        })
const request_body=ref({
    "user_name": "saikumar@mailsac.com",
    "password": "Admin@123",
    "user_type": "IND"
})
</script>
<style></style>
