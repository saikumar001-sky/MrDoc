<template>
  <section class="flex justify-between">
    <div>
      <div class="container mb-4" id="interface">
        <h2 class="font-bold">Digital Signature</h2>
        <span>
          <h1>
            A digital signature is a cryptographic technique used to validate
            the authenticity and integrity of digital messages or documents. It
            involves generating a unique encrypted signature using the sender's
            private key, which can be verified by the recipient with the
            corresponding public key. Digital signatures ensure that the data
            has not been tampered with and confirms the sender's identity,
            making them essential for secure online transactions and
            communications.
          </h1>
        </span>
      </div>
      <div class="container mb-4" id="overview">
        <h1 class="text-md font-bold">Important Points</h1>
        <h1>
          <h2 class="text-xl font-bold mt-6">
            Here are some key points about digital signatures:
          </h2>
          <span class="list-disc">
            <li class="mb-2">
              <span class="text-md font-semibold"> Authenticity:</span> Digital
              signatures verify the identity of the sender, ensuring that the
              message or document comes from a legitimate source.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold"> Integrity:</span> They
              protect against data tampering, as any alteration to the signed
              document would render the signature invalid.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold"> Non-repudiation:</span> Once
              a document is digitally signed, the signer cannot deny having
              signed it, providing legal proof of the transaction.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold">
                Public Key Infrastructure (PKI):</span
              >
              Digital signatures rely on PKI, using a pair of keys (private and
              public) for encryption and decryption.
            </li>
            <li class="mb-2">
              <span class="text-md font-semibold"> Legal Validity: </span> In
              many jurisdictions, digital signatures are legally recognized and
              hold the same weight as handwritten signatures.
            </li>
          </span>
        </h1>
      </div>
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
  { id: 'interface', label: 'Digital Signature',is_main:true },
  { id: 'overview', label: 'Important Points ',is_main:false },



];
</script>
<style></style>
