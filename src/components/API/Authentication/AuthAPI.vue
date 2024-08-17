<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">Autentication API</h2>
        <p>
          The Authentication API provides endpoints to authenticate users and
          manage access tokens, ensuring secure access to your application. This
          section covers the details of the authentication process, including
          verifying tokens, adding users (senders), managing beneficiaries, and
          handling transactions.
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>
          This endpoint is used to authenticate a user. It requires valid user
          credentials and returns a JSON Web Token (JWT) upon successful
          authentication.
        </p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-green-500 text-white px-3 py-1 font-bold">
            POST
          </div>
          <div class="pt-1 font-semibold">/api/autenticate-user</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for authentication API.</p>
        <codeBlock :code="data" />
      </section>
      <!---------------- Request Schema  ------------------>
      <section class="my-4" id="auth-req">
        <h2 class="font-bold">Request Schema</h2>
        <div class="overflow-auto text-sm md:text-base">
          <table class="border bg-white my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Field</th>
              <th class="p-3">Required</th>
              <th class="p-3">min/max length</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3">user_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">4/20</td>
              <td class="p-3">The unique identifier for the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">password</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">8/32</td>
              <td class="p-3">The user's password for authentication.</td>
            </tr>
            <tr class="border">
              <td class="p-3">user_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/5</td>
              <td class="p-3">
                Defines the type of user (e.g., individual (IND),
                Business(BUS)).
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="auth-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>
          Please Check below given sample Request data for the authenticate user
          api.
        </p>
        <codeBlock :code="request_body" />
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
              <td class="p-3">user_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/15</td>
              <td class="p-3">Unique identifier for the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">access_token</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">36/36</td>
              <td class="p-3">
                Token for accessing secured resources. Null if not yet
                generated.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">refresh_token</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">36/36</td>
              <td class="p-3">
                Token for refreshing the access token. Null if not yet
                generated.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_admin</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user has admin privileges.</td>
            </tr>
            <tr class="border">
              <td class="p-3">user_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/5</td>
              <td class="p-3">
                Defines the type of user (e.g., IND for Individual, BUS for
                Business).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_bus_created</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if a business account has been created by the user.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_two_factor_auth</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if two-factor authentication is enabled for the user.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_two_factor_check</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if two-factor authentication is currently being
                checked.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_kyc</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user's KYC (Know Your Customer) verification is
                completed.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_mobile_verified</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user's mobile number is verified.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">complete_registration</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user has completed their registration process.
              </td>
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
              <td class="p-3">language</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/5</td>
              <td class="p-3">Preferred language of the user (e.g., en-us).</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_partner</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user is a partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_logo</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user has uploaded a logo.</td>
            </tr>
            <tr class="border">
              <td class="p-3">logo</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">URL of the user's logo if uploaded.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">6/10</td>
              <td class="p-3">Type of partnership (e.g., IREMITU).</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Unique identifier for the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_payment_gateway</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user has access to the payment gateway.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">supported_payment_modes</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/100</td>
              <td class="p-3">
                List of payment modes supported (e.g., FPX, E-Wallets).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_self_beneficiary</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user is the beneficiary of their own account.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_check_pin</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user has enabled PIN verification.
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the authenticate
          user api.
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
              <td class="p-3">
                OK - The request has succeeded, and the user is authenticated
                successfully.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3 text-green-400 font-bold">201</td>
              <td class="p-3">
                Created - The user account has been created successfully.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found. Username/password not incorrect.</td>
            </tr>
          </table>
        </div>
      </section>
      <div class="container mb-4" id="register-api">
        <h2 class="font-bold">Register API</h2>
        <p>
          The Registration API allows users to create new accounts, enabling
          them to access the remittance services provided by the application.
          This section outlines the process of registering a user, including
          details on user verification, setting up user profiles, and
          integrating the API with secure KYC (Know Your Customer) procedures to
          ensure compliance. Additionally, it covers how registered users can
          manage their account settings and initiate transactions.
        </p>
      </div>
      <section class="my-4" id="register-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>
          This endpoint allows new users to register by providing their name,
          email, and password. If the registration is successful, a JWT token is
          returned that can be used for authentication in future API calls.
        </p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-green-500 text-white px-3 py-1 font-bold">
            POST
          </div>
          <div class="pt-1 font-semibold">/auth/register</div>
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
        <div class="overflow-auto text-sm md:text-base">
          <table class="border bg-white my-4 w-full text-left">
            <tr class="border bg-gray-100">
              <th class="p-3">Field</th>
              <th class="p-3">Required</th>
              <th class="p-3">min/max length</th>
              <th class="p-3">Description</th>
            </tr>
            <tr class="border">
              <td class="p-3">user_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">4/20</td>
              <td class="p-3">The unique identifier for the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">password</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">8/32</td>
              <td class="p-3">The user's password for authentication.</td>
            </tr>
            <tr class="border">
              <td class="p-3">user_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/5</td>
              <td class="p-3">
                Defines the type of user (e.g., individual (IND),
                Business(BUS)).
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="reg-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>
          Please Check below given sample Request data for the Register API.
        </p>
        <codeBlock :code="request_body1" />
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
              <td class="p-3">user_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">4/20</td>
              <td class="p-3">Unique identifier for the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">access_token</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">JWT</td>
              <td class="p-3">The JWT token used for API access.</td>
            </tr>
            <tr class="border">
              <td class="p-3">refresh_token</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">JWT</td>
              <td class="p-3">
                The JWT token used for refreshing access tokens.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_admin</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user is an admin.</td>
            </tr>
            <tr class="border">
              <td class="p-3">user_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/5</td>
              <td class="p-3">Defines the type of user (e.g., IND, BUS).</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_bus_created</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if a business is created for the user.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_two_factor_auth</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if two-factor authentication is enabled.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_two_factor_check</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if two-factor authentication is checked.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_kyc</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user is KYC verified.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_mobile_verified</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user's mobile is verified.</td>
            </tr>
            <tr class="border">
              <td class="p-3">complete_registration</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user has completed registration.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">kyc_status</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Current KYC status of the user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">language</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">2/5</td>
              <td class="p-3">Preferred language of the user (e.g., en-us).</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_partner</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user is a partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_logo</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user has a logo.</td>
            </tr>
            <tr class="border">
              <td class="p-3">logo</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">User's logo, if available.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Type of partner, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the partner, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_payment_gateway</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the user supports payment gateway.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">supported_payment_modes</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">List of supported payment modes.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_self_beneficiary</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the user is a self-beneficiary.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_check_pin</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if a PIN is required for checking.</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="reg-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the Register api.
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
                OK - The request has succeeded, and the user is registered
                successfully.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3 text-green-400 font-bold">201</td>
              <td class="p-3">
                Created - The user account has been created successfully.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">
                Not Found - password/ confirm password not matched.
              </td>
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
  import codeBlock from "../../../codeBlock.vue"
    import TableofContents from "../../../TableofContents.vue"
  import {ref} from "vue"
  const tocSections = [
  { id: 'auth-api', label: 'Authentication ',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint', is_main:false },
  { id: 'auth-curl', label: 'cURL', is_main:false},
  { id: 'auth-req', label: 'Request Schema', is_main:false },
  { id: 'auth-sample-req', label: 'Sample Request Data', is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false},
  { id: 'auth-sample-res', label: 'Sample Response Data', is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes', is_main:false},
  { id: 'register-api', label: 'Register ' ,is_main:true},
  { id: 'register-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'reg-curl', label: 'cURL' ,is_main:false},
  { id: 'reg-req', label: 'Request Schema',is_main:false },
  { id: 'reg-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'reg-res', label: 'Response Schema',is_main:false },
  { id: 'reg-sample-res', label: 'Sample Response Data',is_main:false },
  { id: 'reg-status-codes', label: 'Status Codes',is_main:false },

];
 const data=ref(` curl -v "http://staging-gloremit.tranglo.com:2014/v1/payments/bills/requests/1208?sIdType=1
&sIdNum=710320-71-5379&sFirstName=Kai&sLastName=Yen&bCountry=PH&bCurrency=PHP&bAmount=200
&bIssuerCode=61161&bAccNum=1111" \
-H "Authorization: GLOREMIT <UID>:<PWD>:<rspSign>"`)
    const response_body=ref(        {
            "user_id": "I00000001001",
            "access_token": null,
            "refresh_token": null,
            "is_admin": null,
            "user_type": "IND",
            "is_bus_created": false,
            "is_two_factor_auth": true,
            "is_two_factor_check": false,
            "is_kyc": false,
            "is_mobile_verified": false,
            "complete_registration": true,
            "kyc_status": "Approved",
            "language": "en-us",
            "is_partner": false,
            "is_logo": false,
            "logo": null,
            "partner_type": "IREMITU",
            "partner_id": null,
            "is_payment_gateway": true,
            "supported_payment_modes": "FPX (Internet Banking),E-Wallets,Bank Transfer/Cash Deposit",
            "is_self_beneficiary": null,
            "is_check_pin": false
        })
const request_body=ref({
    "user_name": "saikumar@mailsac.com",
    "password": "Admin@123",
    "user_type": "IND"
})
const data1 =ref(`curl "https://online.remitrise.com/userservice/api/v1/auth/register" ^
{^\^"user_name^\^":^\^"ind^@mailsac.com^
\^",^\^"password^\
^":^\^"Admin^@123^
\^",^\^"user_type^\^":^\^"IND^\^"^}^"`)
  const request_body1=ref({
    "user_name": "ind@mailsac.com",
    "password": "Admin@123",
    "user_type": "IND"
})
const response_body1=ref(       {
            "user_id": "I00000001077",
            "access_token": "null",
            "refresh_token": "null",
            "is_admin": null,
            "user_type": "IND",
            "is_bus_created": false,
            "is_two_factor_auth": true,
            "is_two_factor_check": false,
            "is_kyc": false,
            "is_mobile_verified": false,
            "complete_registration": false,
            "kyc_status": null,
            "language": "en-us",
            "is_partner": false,
            "is_logo": false,
            "logo": null,
            "partner_type": null,
            "partner_id": null,
            "is_payment_gateway": false,
            "supported_payment_modes": null,
            "is_self_beneficiary": false,
            "is_check_pin": false
        })
</script>
<style></style>
