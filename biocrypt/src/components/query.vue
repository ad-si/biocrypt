<template>
  <div class="query">
    <template v-if="question === 0">
      <p>What is the gender of the patient?</p>
      <input type="radio" id="male" value="male" v-model="gender">
      <label for="male">male</label>
      <br>
      <input type="radio" id="female" value="female" v-model="gender">
      <label for="female">female</label>
    </template>
    <template v-if="question === 1">
      <p>Does the patient have dark hair?</p>
      <input type="radio" id="yes" value="yes" v-model="darkHair">
      <label for="yes">yes</label>
      <br>
      <input type="radio" id="no" value="no" v-model="darkHair">
      <label for="no">no</label>
    </template>
    <template v-if="question === 3">
      <p>Does the patient still have all regular teeth?</p>
      <input type="radio" id="yes" value="yes" v-model="allTeeth">
      <label for="yes">yes</label>
      <br>
      <input type="radio" id="no" value="no" v-model="allTeeth">
      <label for="no">no</label>
    </template>
    <template v-if="question === 4">
      <p>Can you recognize this feature?</p>
      <img src="../assets/pic.jpeg">
      <p>Right arm</p>
      <a v-on:click="next">Yes! Retrieve Patient Infomation</a>
    </template>
    <template v-if="question === 2">
      <p>Is the patient\'s earlobe attached?</p>
      <input type="radio" id="yes" value="yes" v-model="earlobe">
      <label for="yes">yes</label>
      <br>
      <input type="radio" id="no" value="no" v-model="earlobe">
      <label for="no">no</label>
    </template>
    <template v-if="question === 5">
      <h2>Markus Petrykowski</h2>
      <p>Emergency Contact:</p>
      <p><strong>Brother +491572832882</strong></p>
      <p>Blood Type: <strong>AB-</strong></p>
      <p>Organ Donor: <strong>Yes</strong></p>
      <p>Organs: <strong>All</strong></p>
    </template>
    <div v-if="question<4">
      <a v-on:click="next">next</a>
    </div>
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
</style>
