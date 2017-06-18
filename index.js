const readline = require('readline')
const clone = require('clone')
const {stripIndents} = require('common-tags')

const persons = require('./persons')

const questions = [
  {
    id: 'gender',
    q: 'What is the gender of the patient?',
  },
  {
    id: 'darkHair',
    q: 'Does the patient have dark hair?',
  },
  {
    id: 'allTeeth',
    q: 'Does the patient still have all regular teeth?',
  },
  {
    id: 'wisdomTeeth',
    q: 'Does the patient have wisdom teeth?',
  },
  {
    id: 'toothFilling',
    q: 'Does the patient have tooth fillings?',
  },
  {
    id: 'earlobe',
    q: 'Is the patient\'s earlobe attached?',
  },
  {
    id: 'handFoldConnected',
    q: 'Are the patient\'s hand folds connected?',
  },
  {
    id: 'bothFeet',
    q: 'Does the patient have both feet?',
  },
  {
    id: 'bothArms',
    q: 'Does the patient have both arms?',
  },
  {
    id: 'allFingers',
    q: 'Does the patient have all fingers?',
  },
  {
    id: 'handForm',
    q: 'Which hand form does the patient have?',
  },
  {
    id: 'allToes',
    q: 'Does the patient have all toes?',
  },
  {
    id: 'footShape',
    q: 'Which foot shape does the patient have?',
  },
  {
    id: 'tall',
    q: 'Is the patient tall? (larger than 1.60 m)',
  },
  {
    id: 'earHole',
    q: 'Does the patient have an ear hole, ear holes?',
  },
]

module.exports = () => {
  let candidates = clone(persons)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  function questionLoop (index) {
    question = questions[index].q + ' '

    rl.question(question, answer => {
      answer = answer.toLowerCase()

      if (['y', 'yes', 'true'].includes(answer)) answer = true
      if (['n', 'no', 'false'].includes(answer)) answer = false

      questions[index].a = answer
      candidates = candidates.filter(candidate =>
        candidate[questions[index].id] === answer
      )

      if (!candidates.length) {
        console.error('No match!')
        process.exit(1)
      }

      if (candidates.length > 1) {
        questionLoop(++index)
      }
      else {
        const candidate = candidates[0]
        rl.close()
        const sep = '\n================\n'
        console.info('\n')
        console.info(stripIndents `
          ${sep}
          ${candidate.name}

          Emergency Contact: ${candidate.emergencyContact}
          Organ Donor: ${candidate.organDonor}
          ${sep}
        `)
      }
    })
  }

  questionLoop(0)
}
