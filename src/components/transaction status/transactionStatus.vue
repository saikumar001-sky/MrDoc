<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">Transaction Status</h2>
        <p>
          The Transaction Status api knows you whether the transaction is
          succeed or failed.
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>This endpoint is used to know the transaction status</p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-green-500 text-white px-3 py-1 font-bold">
            PUT
          </div>
          <div class="pt-1 font-semibold">/online/txn-status</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for Transaction pay Api.</p>
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
              <td class="p-3">pin_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Unique identification number for the transaction.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_txn_accepted</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the transaction has been accepted.
              </td>
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
              <td class="p-3">net_owner_comm_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Type of net owner commission.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adjusted_pay_ex_rate</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted payment exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_cse_approve_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Date when CSE approval was done.</td>
            </tr>
            <tr class="border">
              <td class="p-3">response_signature</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Signature of the response.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_status</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Status of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">channel_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the channel.</td>
            </tr>
            <tr class="border">
              <td class="p-3">net_owner_comm</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Net owner commission.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adjusted_dot_product</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted dot product.</td>
            </tr>
            <tr class="border">
              <td class="p-3">negative_match_criteria</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Negative match criteria.</td>
            </tr>
            <tr class="border">
              <td class="p-3">request_signature</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Signature of the request.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_txndate</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Partner transaction date.</td>
            </tr>
            <tr class="border">
              <td class="p-3">ledger_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Ledger ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">net_owner_comm_crncy_cd</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code of net owner commission.</td>
            </tr>
            <tr class="border">
              <td class="p-3">created_ip_addr</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">7/15</td>
              <td class="p-3">IP address of the creator.</td>
            </tr>
            <tr class="border">
              <td class="p-3">pay_agent_rate_individual</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Individual pay agent rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Type of payment (e.g., FPX).</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_confirmid</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Confirmation ID from the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_branch_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Branch ID of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_ex_rate</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Exchange rate for the collection.</td>
            </tr>
            <tr class="border">
              <td class="p-3">additional_cdd_info</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Additional CDD (Customer Due Diligence) information.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">pay_ex_rate_individual</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Individual pay exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">volet_user_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the Volet user.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_is_comitted</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the partner is committed.</td>
            </tr>
            <tr class="border">
              <td class="p-3">parent_sending_partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Parent sending partner ID.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_agent_comm_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Type of collection agent commission.</td>
            </tr>
            <tr class="border">
              <td class="p-3">settle_coll_amt_usd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Settled collection amount in USD.</td>
            </tr>
            <tr class="border">
              <td class="p-3">pay_txn_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the payment transaction.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_agent_comm</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Commission of the collection agent.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_txn_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Transaction ID of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">remittance_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/40</td>
              <td class="p-3">ID of the remittance.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_agent_rate_individual</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Individual collection agent rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">dot_status</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Status of the dot.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Code of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">purpose_cd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Code indicating the purpose.</td>
            </tr>
            <tr class="border">
              <td class="p-3">pay_ex_rate</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Pay exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">sender_first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">First name of the sender.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_country_cd</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code for the payment.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_full_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Full name of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adj_pay_settle_ex_rate</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted pay settlement exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_agent_comm_crncy_cd</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">
                Currency code of the collection agent commission.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">adjusted_pay_settle_amt</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted pay settlement amount.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_txn_ref_no</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/40</td>
              <td class="p-3">
                Reference number of the partner's transaction.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">reason_cd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Code indicating the reason.</td>
            </tr>
            <tr class="border">
              <td class="p-3">purpose_description</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Description of the purpose.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_callback_url</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Callback URL of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">sender_state_cd</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">State code of the sender.</td>
            </tr>
            <tr class="border">
              <td class="p-3">sender_last_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">Last name of the sender.</td>
            </tr>
            <tr class="border">
              <td class="p-3">request_txn_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the request transaction.</td>
            </tr>
            <tr class="border">
              <td class="p-3">set_pay_amt_usd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Settled payment amount in USD.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_amt</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_refund_req</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the partner requested a refund.</td>
            </tr>
            <tr class="border">
              <td class="p-3">receiver_mobile_no</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/15</td>
              <td class="p-3">Mobile number of the receiver.</td>
            </tr>
            <tr class="border">
              <td class="p-3">receive_txn_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">ID of the receive transaction.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_location_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Location ID of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adj_coll_ex_rate</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted collection exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">coll_agent_rate</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Rate of the collection agent.</td>
            </tr>
            <tr class="border">
              <td class="p-3">receiver_last_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">Last name of the receiver.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adj_pay_ex_rate</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted pay exchange rate.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_country_cd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code of the partner.</td>
            </tr>
            <tr class="border">
              <td class="p-3">sender_country_cd</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code of the sender.</td>
            </tr>
            <tr class="border">
              <td class="p-3">adj_coll_ex_amt</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Adjusted collection exchange amount.</td>
            </tr>
            <tr class="border">
              <td class="p-3">settle_pay_amt</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Settled payment amount.</td>
            </tr>
            <tr class="border">
              <td class="p-3">remittance_ref_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/40</td>
              <td class="p-3">Reference ID of the remittance.</td>
            </tr>
            <tr class="border">
              <td class="p-3">receiver_first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">First name of the receiver.</td>
            </tr>
            <tr class="border">
              <td class="p-3">receive_amount</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Amount received.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the Transaction
          status api.
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
                OK - The request has succeeded, and if transaction status is
                success
              </td>
            </tr>

            <tr class="border">
              <td class="p-3 text-red-400 font-bold">404</td>
              <td class="p-3">Not Found and if transaction status is failed</td>
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
  { id: 'auth-api', label: 'Transaction Status',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'auth-curl', label: 'cURL' ,is_main:false},
  { id: 'auth-req', label: 'Request Schema' ,is_main:false},
  { id: 'auth-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false },
  { id: 'auth-sample-res', label: 'Sample Response Data' ,is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes',is_main:false },
];
 const data=ref(`  curl "https://online.remitrise.com/paymentservice/api/v1
 /online/txn-status?pin_number=RR0000001020&is_txn_accepted=true" ^
`)
    const response_body=ref(          {
            "net_owner_comm_type": "F",
            "adjusted_pay_ex_rate": 25.8374,
            "is_cse_approve_date": null,
            "response_signature": null,
            "partner_status": null,
            "channel_id": null,
            "net_owner_comm": 6.0,
            "adjusted_dot_product": null,
            "negative_match_criteria": null,
            "request_signature": null,
            "partner_txndate": null,
            "ledger_id": null,
            "net_owner_comm_crncy_cd": "MYR",
            "created_ip_addr": "172.18.0.1",
            "pay_agent_rate_individual": null,
            "payment_type": "FPX",
            "partner_confirmid": null,
            "partner_branch_id": null,
            "coll_ex_rate": 25.84,
            "additional_cdd_info": null,
            "pay_ex_rate_individual": null,
            "volet_user_id": null,
            "partner_is_comitted": null,
            "parent_sending_partner_id": null,
            "coll_agent_comm_type": "F",
            "settle_coll_amt_usd": null,
            "tran_type": null,
            "volet_created_date": null,
            "receiver_cpay_pinnumber": null,
            "sub_sending_partner_id": null,
            "coll_agent_comm": 4.0,
            "settle_pay_amt_usd": null,
            "reason_second_approve": null,
            "volet_mpay_authcode": null,
            "is_payment_reached": true,
            "parent_payout_partner_id": null,
            "coll_agent_comm_crncy_cd": "MYR",
            "settle_pay_ex_rate_agent": null,
            "cost_rate": 117.56,
            "volet_mpayrefno": null,
            "is_notified": false,
            "sub_payout_partner_id": null,
            "parent_pay_agent_cd": "MYSABC0003",
            "cre_parent_agent_cd": "IREMITU",
            "is_self": true,
            "volet_pin": null,
            "remarks": null,
            "transaction_type": null,
            "parent_pay_sub_agent_cd": "BGDABC0006",
            "mod_parent_agent_cd": null,
            "risk_percentage": null,
            "volet_token": null,
            "created_date": "2024-08-17T20:49:03",
            "transaction_channel": null,
            "pay_agent_comm_type": "F",
            "net_owner_comm_usd": null,
            "partner_transaction_id": "RR0000001020",
            "bank_receipt": null,
            "modified_date": null,
            "paid_usd_rate": null,
            "receivable_usd": null,
            "sender_partner_transaction_id": null,
            "summery_receipt": null,
            "created_by": "I00000001019",
            "fx_rate_id": 11043,
            "pay_agent_comm": 4.0,
            "payable_usd": null,
            "cid": null,
            "partner_pinnumber": null,
            "modified_by": null,
            "service_charge_id": 347,
            "coll_ex_rate_code": null,
            "pay_agent_comm_usd": null,
            "poid": null,
            "partner_agent_pinnumber": null,
            "is_earned": false,
            "rate_setup_id": 125,
            "pay_ex_rate_code": null,
            "comm_gain_usd": null,
            "transaction_status": 1,
            "partner_code": null,
            "suspicious_reason": null,
            "payout_dollar_rate": null,
            "pay_ex_rate": 25.8374,
            "forex_gain_usd": null,
            "transaction_description": null,
            "partner_message": null,
            "transaction_stage": 1,
            "ho_dollar_rate": null,
            "receiver_name": "ffrf  ",
            "total_gain_usd": null,
            "refund_type": null,
            "on_behalf_id": null,
            "settle_pay_amount_lc": null,
            "reason_of_remittance_cd": "2",
            "total_coll_amount": 110.0,
            "settle_pay_share_crncy_cd": null,
            "source_of_fund_cd": "1",
            "coll_crncy_cd": "MYR",
            "comm_share_dtl_cd": null,
            "iban_no": null,
            "total_charge": 10.0,
            "txn_extract_flag": null,
            "swift_no": null,
            "transfer_amt": 100.0,
            "txn_extract_datetime": null,
            "paying_cntry_cd": null,
            "dot_product": 25.84,
            "extract_parent_agent_cd": null,
            "relation_with_remitter_code": null,
            "pay_amount": 2584.0,
            "extract_by": null,
            "purpose_of_remittance_cd": null,
            "version_id": 1,
            "pay_crncy_cd": "BDT",
            "is_approve": null,
            "cal_by": "C",
            "id": 1020,
            "payment_mode_cd": "B",
            "reason_decline": null,
            "location_id": "BGD0001",
            "customer_id": 14856,
            "tran_date": "2024-08-17T20:49:03",
            "forex_coll_agent_rate": 4.55,
            "location_name": "Bangladesh Commerce Bank Limited",
            "authorized_person_id_cd": null,
            "customer_version_id": 1,
            "remit_number": null,
            "parent_coll_sub_agent_cd": null,
            "customer_name": "Venky Nunna",
            "action_cd": null,
            "authorized_person_id_no": null,
            "receiver_id": 5355,
            "tran_hold_reason_cd": null,
            "is_approve_date": null,
            "is_cse_approve": null,
            "receiver_version_id": 1,
            "trans_comments": "",
            "is_approve_by": null,
            "is_cse_approve_by": null
        })
const request_body=ref( {
    "pin_number": "RR0000001020",
    "is_txn_accepted": true
})
</script>
<style></style>
