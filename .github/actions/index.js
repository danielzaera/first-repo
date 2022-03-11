const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `operation-A` input defined in action metadata file
  const operation-A = core.getInput('operation-A');
  (`maths ${inputs.operation-A}!`);
 result=0
  if [ "${{ inputs.operation }}" == "suma" ]; then
          result=${{ inputs.operation-A }}+${{ inputs.operation-B}}
          echo "sum of two numbers"
       elif [ "${{ inputs.operation }}" == "multiplicacion" ]; then
          result=${{ inputs.operation-A }}*${{ inputs.operation-B}}
       elif [ "${{ inputs.operation }}" == "resta" ]; then
          result=${{ inputs.operation-A }}-${{ inputs.operation-B}}
       elif [ "${{ inputs.operation }}" == "division" ]; then
          result=${{ inputs.operation-A }}/${{ inputs.operation-B}}
       else
          echo "error la operacion no existe!"
          exit 1
	
	fi
  const result = $(( env.result)) >> $GITHUB_ENV
  core.setOutput("result", result);
  
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}