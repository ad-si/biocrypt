<template>
  <div class="query">
    <template v-if="question < 4">
      <p>{{ questions[question].q }}</p>
      <a v-for="answer in questions[question].answers" v-on:click="next">{{ answer }}</a>
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
      <p>Known Medical Conditions:</p>
      <p><strong>Epileptic seizures</strong></p>
      <p>Blood Type:</p>
      <p><strong>AB-</strong></p>
      <p>Organ Donor:</p>
      <p><strong>Yes</strong></p>
      <p>Organs:</p>
      <p><strong>All</strong></p>
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
      questions: [
        {
          id: 'gender',
          q: 'What is the gender of the patient?',
          answers: ['male', 'female']
        },
        {
          id: 'darkHair',
          q: 'Does the patient have dark hair?',
          answers: ['yes', 'no']
        },
        {
          id: 'earlobe',
          q: 'Is the patient\'s earlobe attached?',
          answers: ['yes', 'no']
        },
        {
          id: 'allTeeth',
          q: 'Does the patient still have all regular teeth?',
          answers: ['yes', 'no']
        }
      ],
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
