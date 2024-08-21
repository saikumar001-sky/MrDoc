<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">Exchange Rates</h2>
        <p>
          The Exchange Rates api gives live exchange rate currency of every
          country
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>
          This endpoint is used to live exchange rate currency of every country
        </p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-blue-500 text-white px-3 py-1 font-bold">GET</div>
          <div class="pt-1 font-semibold">/exchange-amount-data</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for Exchange Rate Api.</p>
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
              <td class="p-3">transfer_amount</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount being transferred.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payout_currency</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code for payout (e.g., BDT).</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Identifier for the location.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_mode</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Mode of payment (e.g., B).</td>
            </tr>
            <tr class="border">
              <td class="p-3">payout_country</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code for payout (e.g., BGD).</td>
            </tr>
            <tr class="border">
              <td class="p-3">calculation_by</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">
                Code indicating who performed the calculation.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">send_country</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code for sender (e.g., MYS).</td>
            </tr>
            <tr class="border">
              <td class="p-3">send_currency</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code for sender (e.g., MYR).</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="auth-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>
          Please Check below given sample request data for the Transaction
          status api.
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
              <td class="p-3">collectAmount</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount to be collected.</td>
            </tr>
            <tr class="border">
              <td class="p-3">collectCurrency</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code for collection (e.g., MYR).</td>
            </tr>
            <tr class="border">
              <td class="p-3">serviceCharge</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Service charge amount.</td>
            </tr>
            <tr class="border">
              <td class="p-3">transferAmount</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount being transferred.</td>
            </tr>
            <tr class="border">
              <td class="p-3">exchangeRate</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Exchange rate applied for the transaction.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payoutAmount</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount to be paid out.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payoutCurrency</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code for payout (e.g., BDT).</td>
            </tr>
            <tr class="border">
              <td class="p-3">payoutPartner</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Code for the payout partner (e.g., BGDABC0006).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">rateId</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Identifier for the exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">serviceChargeId</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Identifier for the service charge.</td>
            </tr>
            <tr class="border">
              <td class="p-3">paymentMode</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Mode of payment (e.g., B).</td>
            </tr>
            <tr class="border">
              <td class="p-3">rate_setup_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Identifier for the rate setup.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the Exchange
          Rateapi.
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
                OK - The request has succeeded, and will get current Exchange
                Rate of selected country
              </td>
            </tr>

            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found</td>
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
  { id: 'auth-api', label: 'Exchange Rate',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'auth-curl', label: 'cURL' ,is_main:false},
  { id: 'auth-req', label: 'Request Schema' ,is_main:false},
  { id: 'auth-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false },
  { id: 'auth-sample-res', label: 'Sample Response Data' ,is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes',is_main:false },
];
 const data=ref(`  curl "https://online.remitrise.com/catalogservice/api/v1
 /dropdown/exchange-amount-data?transfer_amount=100&payout_currency=BDT&loca
 tion_id=&payment_mode=B&payout_country=BGD&calculation_by=C&
 send_country=MYS&send_currency=MYR" ^
`)
    const response_body=ref(          {
            "collectAmount": "20.00",
            "collectCurrency": "MYR",
            "serviceCharge": "10.00",
            "transferAmount": "10.00",
            "exchangeRate": "25.84",
            "payoutAmount": "258.40",
            "payoutCurrency": "BDT",
            "payoutPartner": "BGDABC0006",
            "rateId": 11043,
            "serviceChargeId": 347,
            "paymentMode": "B",
            "rate_setup_id": 125
        })
const request_body=ref( {
  "transfer_amount": 10,
  "payout_currency": "BDT",
  "location_id": "",
  "payment_mode": "B",
  "payout_country": "BGD",
  "calculation_by": "C",
  "send_country": "MYS",
  "send_currency": "MYR"
}
)
</script>
<style></style>
