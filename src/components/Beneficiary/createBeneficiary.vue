<template>
  <section class="flex">
    <div>
      <div class="container mb-4" id="auth-api">
        <h2 class="font-bold">Beneficiary API</h2>
        <p>
          Beneficiary creation API typically involves collecting and validating
          the recipient's details, such as name, account number, and bank
          information. The process often includes verifying the beneficiary's
          identity for compliance with regulations. Once validated, the
          beneficiary is saved in the system for future transactions.
        </p>
      </div>
      <section class="my-4" id="auth-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>
          This endpoint is used to post all the information about Beneficiary.
        </p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-green-500 text-white px-3 py-1 font-bold">
            POST
          </div>
          <div class="pt-1 font-semibold">/individual/create</div>
        </div>
      </section>
      <section class="my-4" id="auth-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for Beneficiary API.</p>
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
              <td class="p-3">payment_mode_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">
                Name of the payment mode (e.g., Bank Transfer).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">rec_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Recipient type (e.g., IND for Individual).</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/50</td>
              <td class="p-3">Name of the country (e.g., India).</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">ISO country code (e.g., IND).</td>
            </tr>
            <tr class="border">
              <td class="p-3">currency_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code (e.g., INR).</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">
                Code for the payment mode (e.g., B for Bank Transfer).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/20</td>
              <td class="p-3">Code of the branch associated with the bank.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the bank.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">Name of the bank (e.g., Axis Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_account_no</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/20</td>
              <td class="p-3">Bank account number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Location identifier associated with the bank.</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">Name of the location (e.g., Axis Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">First name of the recipient.</td>
            </tr>
            <tr class="border">
              <td class="p-3">middle_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Middle name of the recipient.</td>
            </tr>
            <tr class="border">
              <td class="p-3">last_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Last name of the recipient.</td>
            </tr>
            <tr class="border">
              <td class="p-3">last_name2</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Additional last name if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">
                Code for the relationship with the recipient (e.g., 20 for
                Service Provider).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">
                Name of the relationship (e.g., Service Provider).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/15</td>
              <td class="p-3">Phone number of the recipient.</td>
            </tr>
            <tr class="border">
              <td class="p-3">mobile_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/15</td>
              <td class="p-3">
                Mobile number of the recipient (e.g., country code and number).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">address</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/100</td>
              <td class="p-3">Address of the recipient.</td>
            </tr>
            <tr class="border">
              <td class="p-3">state_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">State code where the recipient resides.</td>
            </tr>
            <tr class="border">
              <td class="p-3">state_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">State name where the recipient resides.</td>
            </tr>
            <tr class="border">
              <td class="p-3">district_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">District code where the recipient resides.</td>
            </tr>
            <tr class="border">
              <td class="p-3">district_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">District name where the recipient resides.</td>
            </tr>
            <tr class="border">
              <td class="p-3">city</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/50</td>
              <td class="p-3">City where the recipient resides.</td>
            </tr>
            <tr class="border">
              <td class="p-3">date_of_birth</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">8/10</td>
              <td class="p-3">Date of birth of the recipient (YYYY-MM-DD).</td>
            </tr>
            <tr class="border">
              <td class="p-3">zip_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Postal code of the recipient's address.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/20</td>
              <td class="p-3">Type of identification (e.g., Passport).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_value</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/20</td>
              <td class="p-3">Identification number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">email</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/50</td>
              <td class="p-3">Email address of the recipient.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>
          Please Check below given sample Request data for the create
          beneficiary api.
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
              <td class="p-3">last_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Last name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">nature_of_business</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Nature of the business, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">district_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code of the district.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Code for payment type (e.g., B for Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Name of the location (e.g., Axis Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Type of identification, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">created_by</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">ID of the creator.</td>
            </tr>
            <tr class="border">
              <td class="p-3">customer_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/10</td>
              <td class="p-3">Unique identifier for the customer.</td>
            </tr>
            <tr class="border">
              <td class="p-3">last_name2</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Additional last name, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">designation</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Designation or title, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">city_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code of the city.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_account_no</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/20</td>
              <td class="p-3">Bank account number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">iban_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/34</td>
              <td class="p-3">
                International Bank Account Number (IBAN), if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">id_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Identification number, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">modified_by</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">
                ID of the person who last modified the record.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">receiver_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the receiver.</td>
            </tr>
            <tr class="border">
              <td class="p-3">gender</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Gender of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/255</td>
              <td class="p-3">Name of the country (e.g., India).</td>
            </tr>
            <tr class="border">
              <td class="p-3">postal_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Postal or ZIP code.</td>
            </tr>
            <tr class="border">
              <td class="p-3">account_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">
                Type of bank account (e.g., Savings, Checking).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">swift_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/11</td>
              <td class="p-3">SWIFT/BIC code, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_exp_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Expiration date of the identification.</td>
            </tr>
            <tr class="border">
              <td class="p-3">created_date</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Date when the record was created.</td>
            </tr>
            <tr class="border">
              <td class="p-3">version_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Version of the record.</td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/15</td>
              <td class="p-3">Phone number of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">nationality_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code representing the nationality.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_address</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Address of the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the bank.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bic_cd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/11</td>
              <td class="p-3">Bank Identifier Code (BIC), if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Date when the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">modified_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Date when the record was last modified.</td>
            </tr>
            <tr class="border">
              <td class="p-3">full_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Full name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">mobile_number</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/15</td>
              <td class="p-3">Mobile number of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">birth_country</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Country of birth.</td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/10</td>
              <td class="p-3">Code representing the relationship type.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">rec_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Record type (e.g., IND for Individual).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_location</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Location where the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">policy_number</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Policy number, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">title</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Title or honorific, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">email_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Email address of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code (e.g., IND).</td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_others</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Other relationship details, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/20</td>
              <td class="p-3">Code of the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">
                Unique identifier for the partner, if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_negativelisted</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the entity is on a negative list.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">upload_document_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">ID of the uploaded document, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/255</td>
              <td class="p-3">First name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">dob</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Date of birth.</td>
            </tr>
            <tr class="border">
              <td class="p-3">address</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Address of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">currency_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code (e.g., INR).</td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number_cty_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/5</td>
              <td class="p-3">Country code for the phone number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">mod_partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Modified partner ID, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">negative_match_criteria</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">
                Criteria for negative matching, if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">uuid</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">36/36</td>
              <td class="p-3">Unique identifier for the record.</td>
            </tr>
            <tr class="border">
              <td class="p-3">middle_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Middle name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">state_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code representing the state.</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">7/7</td>
              <td class="p-3">Unique identifier for the location.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_delete</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the record is deleted.</td>
            </tr>
          </table>
        </div>
      </section>

      <section class="my-4" id="auth-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the create
          beneficiary api.
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
              <td class="p-3">Not Found</td>
            </tr>
          </table>
        </div>
      </section>
      <div class="container mb-4" id="register-api">
        <h2 class="font-bold">Get All Beneficiaries</h2>
        <p>
          The get all beneficiaries api will get all the beneficiaries of the
          customer
        </p>
      </div>
      <section class="my-4" id="register-endpoint">
        <h2 class="font-bold">Endpoint</h2>
        <p>This endpoint allows to get the all beneficiaries.</p>
        <div class="flex py-3 bg-slate-300 rounded-md">
          <div class="mx-3 bg-blue-500 text-white px-3 py-1 font-bold">GET</div>
          <div class="pt-1 font-semibold">/individual/get-all</div>
        </div>
      </section>
      <section class="my-4" id="reg-curl">
        <h2 class="font-bold">cURL</h2>
        <p>Below given code is cURL for get all beneficiaries API.</p>
        <codeBlock :code="data1" />
      </section>
      <!---------------- Request Schema  ------------------>
      <section class="my-4" id="reg-req">
        <h2 class="font-bold">Request Schema</h2>
        <p>There is no Request Schema for this API.</p>
      </section>
      <section class="my-4" id="reg-sample-req">
        <h2 class="font-bold">Sample Request Data</h2>
        <p>There is no Sample Requst Data for this API.</p>
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
              <td class="p-3">last_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Last name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">nature_of_business</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Nature of the business, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">district_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code of the district.</td>
            </tr>
            <tr class="border">
              <td class="p-3">payment_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/1</td>
              <td class="p-3">Code for payment type (e.g., B for Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Name of the location (e.g., Axis Bank).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Type of identification, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">created_by</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/10</td>
              <td class="p-3">ID of the creator.</td>
            </tr>
            <tr class="border">
              <td class="p-3">customer_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">5/10</td>
              <td class="p-3">Unique identifier for the customer.</td>
            </tr>
            <tr class="border">
              <td class="p-3">last_name2</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Additional last name, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">designation</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Designation or title, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">city_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code of the city.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_account_no</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/20</td>
              <td class="p-3">Bank account number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">iban_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/34</td>
              <td class="p-3">
                International Bank Account Number (IBAN), if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">id_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Identification number, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">modified_by</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">
                ID of the person who last modified the record.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">receiver_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the receiver.</td>
            </tr>
            <tr class="border">
              <td class="p-3">gender</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Gender of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/255</td>
              <td class="p-3">Name of the country (e.g., India).</td>
            </tr>
            <tr class="border">
              <td class="p-3">postal_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Postal or ZIP code.</td>
            </tr>
            <tr class="border">
              <td class="p-3">account_type</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">
                Type of bank account (e.g., Savings, Checking).
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">swift_no</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/11</td>
              <td class="p-3">SWIFT/BIC code, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_exp_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Expiration date of the identification.</td>
            </tr>
            <tr class="border">
              <td class="p-3">created_date</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Date when the record was created.</td>
            </tr>
            <tr class="border">
              <td class="p-3">version_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Version of the record.</td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/15</td>
              <td class="p-3">Phone number of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">nationality_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code representing the nationality.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_address</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Address of the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bank_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the bank.</td>
            </tr>
            <tr class="border">
              <td class="p-3">bic_cd</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/11</td>
              <td class="p-3">Bank Identifier Code (BIC), if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Date when the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">modified_date</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Date when the record was last modified.</td>
            </tr>
            <tr class="border">
              <td class="p-3">full_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Full name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">mobile_number</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/15</td>
              <td class="p-3">Mobile number of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">birth_country</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Country of birth.</td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">2/10</td>
              <td class="p-3">Code representing the relationship type.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/10</td>
              <td class="p-3">Unique identifier for the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">rec_type</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Record type (e.g., IND for Individual).</td>
            </tr>
            <tr class="border">
              <td class="p-3">id_issue_location</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Location where the ID was issued.</td>
            </tr>
            <tr class="border">
              <td class="p-3">policy_number</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Policy number, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">title</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Title or honorific, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">email_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Email address of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">country_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Country code (e.g., IND).</td>
            </tr>
            <tr class="border">
              <td class="p-3">relationship_others</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Other relationship details, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">branch_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">10/20</td>
              <td class="p-3">Code of the branch.</td>
            </tr>
            <tr class="border">
              <td class="p-3">partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">
                Unique identifier for the partner, if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">is_negativelisted</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">
                Indicates if the entity is on a negative list.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">upload_document_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">ID of the uploaded document, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">first_name</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">1/255</td>
              <td class="p-3">First name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">dob</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Date of birth.</td>
            </tr>
            <tr class="border">
              <td class="p-3">address</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Address of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">currency_code</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">3/3</td>
              <td class="p-3">Currency code (e.g., INR).</td>
            </tr>
            <tr class="border">
              <td class="p-3">phone_number_cty_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/5</td>
              <td class="p-3">Country code for the phone number.</td>
            </tr>
            <tr class="border">
              <td class="p-3">mod_partner_id</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/50</td>
              <td class="p-3">Modified partner ID, if applicable.</td>
            </tr>
            <tr class="border">
              <td class="p-3">negative_match_criteria</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">
                Criteria for negative matching, if applicable.
              </td>
            </tr>
            <tr class="border">
              <td class="p-3">uuid</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">36/36</td>
              <td class="p-3">Unique identifier for the record.</td>
            </tr>
            <tr class="border">
              <td class="p-3">middle_name</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/255</td>
              <td class="p-3">Middle name of the individual.</td>
            </tr>
            <tr class="border">
              <td class="p-3">state_code</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">0/10</td>
              <td class="p-3">Code representing the state.</td>
            </tr>
            <tr class="border">
              <td class="p-3">location_id</td>
              <td class="p-3 text-red-500">M</td>
              <td class="p-3">7/7</td>
              <td class="p-3">Unique identifier for the location.</td>
            </tr>
            <tr class="border">
              <td class="p-3">is_delete</td>
              <td class="p-3 text-green-500">O</td>
              <td class="p-3">N/A</td>
              <td class="p-3">Indicates if the record is deleted.</td>
            </tr>
          </table>
        </div>
      </section>
      <section class="my-4" id="reg-sample-res">
        <h2 class="font-bold">Sample Response Data</h2>
        <p>
          Please Check below given sample response data for the get all
          beneficiaries.
        </p>
        <codeBlock :code="response_body" />
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
              <td class="p-3">OK - The request has succeeded</td>
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
  { id: 'auth-api', label: 'Create Beneficiary ',is_main:true },
  { id: 'auth-endpoint', label: 'Endpoint', is_main:false },
  { id: 'auth-curl', label: 'cURL', is_main:false},
  { id: 'auth-req', label: 'Request Schema', is_main:false },
  { id: 'auth-sample-req', label: 'Sample Request Data', is_main:false },
  { id: 'auth-res', label: 'Response Schema',is_main:false},
  { id: 'auth-sample-res', label: 'Sample Response Data', is_main:false},
  { id: 'auth-status-codes', label: 'Status Codes', is_main:false},
  { id: 'register-api', label: 'Get All Benificiaries' ,is_main:true},
  { id: 'register-endpoint', label: 'Endpoint' ,is_main:false},
  { id: 'reg-curl', label: 'cURL' ,is_main:false},
  { id: 'reg-req', label: 'Request Schema',is_main:false },
  { id: 'reg-sample-req', label: 'Sample Request Data',is_main:false },
  { id: 'reg-res', label: 'Response Schema',is_main:false },
  { id: 'reg-sample-res', label: 'Sample Response Data',is_main:false },
  { id: 'reg-status-codes', label: 'Status Codes',is_main:false },

];
 const data=ref(` curl "https://online.remitrise.com/receiverservice/api/v1/individual/create" ^
`)
    const response_body=ref(       {
            "last_name": "",
            "nature_of_business": null,
            "district_code": "",
            "payment_code": "B",
            "location_name": "Axis Bank",
            "id_type": null,
            "created_by": "I00000001019",
            "customer_id": 14856,
            "last_name2": "",
            "designation": null,
            "city_code": "",
            "bank_account_no": "47474744858",
            "iban_no": null,
            "id_no": null,
            "modified_by": null,
            "receiver_id": 5356,
            "gender": null,
            "country_name": "India",
            "postal_code": "",
            "account_type": null,
            "swift_no": null,
            "id_exp_date": null,
            "created_date": "2024-08-17T11:20:24",
            "version_id": 1,
            "phone_number": "8585525222",
            "nationality_code": null,
            "branch_address": null,
            "bank_id": 0,
            "bic_cd": null,
            "id_issue_date": null,
            "modified_date": null,
            "full_name": "Hnmjmy",
            "mobile_number": "IND",
            "birth_country": null,
            "relationship_code": "20",
            "branch_id": 0,
            "rec_type": "IND",
            "id_issue_location": null,
            "policy_number": null,
            "title": null,
            "email_id": null,
            "country_code": "IND",
            "relationship_others": null,
            "branch_code": "52528555858",
            "partner_id": null,
            "is_negativelisted": false,
            "upload_document_id": null,
            "first_name": "hnmjmy",
            "dob": null,
            "address": "jmjmimu",
            "currency_code": "INR",
            "phone_number_cty_code": null,
            "mod_partner_id": null,
            "negative_match_criteria": null,
            "uuid": "5CCF1319-B399-4119-A6D0-CC0DABC6290B",
            "middle_name": "",
            "state_code": "",
            "location_id": "IND0001",
            "is_delete": false
        })
const request_body=ref({
    "payment_mode_name": "Bank Transfer",
    "rec_type": "IND",
    "country_name": "India",
    "country_code": "IND",
    "currency_code": "INR",
    "payment_code": "B",
    "branch_code": "52528555858",
    "branch_id": 0,
    "bank_id": 0,
    "bank_name": "Axis Bank",
    "bank_account_no": "47474744858",
    "location_id": "IND0001",
    "location_name": "Axis Bank",
    "first_name": "hnmjmy",
    "middle_name": "",
    "last_name": "",
    "last_name2": "",
    "relationship_code": "20",
    "relationship_name": "Service Provider",
    "phone_number": "8585525222",
    "mobile_number": "IND",
    "address": "jmjmimu",
    "state_code": "",
    "state_name": "",
    "district_code": "",
    "city_code": "",
    "city_name": "",
    "postal_code": "",
    "policy_number": "",
    "email_id": null,
    "id_no": "",
    "id_type": "",
    "phone_number_cty": "IN",
    "payment_mode": "B",
    "registration_type_cd": "IND",
    "id_type_name": [
        null
    ]
})
const data1 =ref(`curl "https://online.remitrise.com/receiverservice/api/v1/individual/get-all" ^
`)
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
