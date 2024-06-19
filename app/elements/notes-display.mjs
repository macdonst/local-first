export default function NotesDisplay({ html, state }) {
  const { store } = state
  let notes = store.notes || []
  const note = notes[0] || {}
  const problems = store.problems || {}
  return html`
  <enhance-form
  action="/notes/${note.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <e-input-group>
    <fieldset>
        <label>Title</label>
        <input type="text" name="title" value="${note?.title}" errors="${problems?.title?.errors}">
    </fieldset>
  </e-input-group>
  <e-input-group>
    <fieldset>
        <label>Text area</label>
        <textarea name="data" errors="${problems?.data?.errors}">${note?.data}</textarea>
    </fieldset>
  </e-input-group>
  <input type="hidden" id="created" name="created" value="${note?.created}" />
  <input type="hidden" id="updated" name="updated" value="${note?.updated}" />
  <input type="hidden" id="key" name="key" value="${note?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-form>
  `
}
