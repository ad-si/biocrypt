<template>
  <div class="query">
    <template v-if="question === 0">
      <p>What is the gender of the patient?</p>
      <a v-on:click="next">male</a><a v-on:click="next">female</a>
    </template>
    <template v-if="question === 1">
      <p>Does the patient have dark hair?</p>
      <a v-on:click="next">yes</a><a v-on:click="next">no</a>
    </template>
     <template v-if="question === 2">
      <p>Is the patient's earlobe attached?</p>
      <a v-on:click="next">yes</a><a v-on:click="next">no</a>
    </template>
    <template v-if="question === 3">
      <p>Does the patient still have all regular teeth?</p>
      <a v-on:click="next">yes</a><a v-on:click="next">no</a>
    </template>
    <template v-if="question === 4">
      <p>Right arm</p>
      <img src="../assets/pic.jpeg">
      <p>Can you recognize this feature?</p>
      <a v-on:click="next">yes</a><a v-on:click="next">no</a>
    </template>
    <template v-if="question === 5">
      <h2>Markus Petrykowski</h2>
      <p>Emergency Contact:</p>
      <p><strong>Brother +491572832882</strong></p>
      <p>Blood Type: <strong>AB-</strong></p>
      <p>Organ Donor: <strong>Yes</strong></p>
      <p>Organs: <strong>All</strong></p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'query',
  methods: {
    next: function () {
      this.question++
    }
  },
  data () {
    return {
      gender: undefined,
      darkHair: undefined,
      allTeeth: undefined,
      wisdomTeeth: undefined,
      toothFilling: undefined,
      earlobe: undefined,
      question: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

img {
  max-width: 100%;
  max-height: 100%;
}

a {
  border: 1px solid grey;
  padding: 3px 6px;
  margin: 10px 15px;
  display: inline-block;
}
</style>
