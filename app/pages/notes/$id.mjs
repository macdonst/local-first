// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const note = store.note || {}
  const problems = store.problems || {}

  console.log('note', note)

  return html`<enhance-page-container>
  <enhance-form
  action="/notes/${note.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Note">
  <enhance-text-input label="Title" type="text" id="title" name="title" value="${note?.title}" errors="${problems?.title?.errors}"></enhance-text-input>
  <enhance-text-input label="Data" type="text" id="data" name="data" value="${note?.data}" errors="${problems?.data?.errors}"></enhance-text-input>
  <input type="hidden" id="created" name="created" value="${note?.created}" />
  <input type="hidden" id="updated" name="updated" value="${note?.updated}" />
  <input type="hidden" id="key" name="key" value="${note?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}
