// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const note = store.note || {}
  const problems = store.problems || {}

  return html`<e-container>
  <main>
    <h1 class="mb1 font-semibold text3">Notes</h1>
    <notes-container>
      <notes-list slot="list"></notes-list>
      <notes-display slot="note"></notes-display>
    </notes-container>
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New note</summary>
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
  <input type="hidden" id="key" name="key" value="${note?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</details>
</main>
</e-container>
  `
}
