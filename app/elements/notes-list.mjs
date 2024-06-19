export default function NotesList({ html, state }) {
  const { store } = state
  let notes = store.notes || []
  return html`
  <style>
    :host div { border-inline-end: 1px solid var(--e-color-border); }
  </style>
  ${notes.map(item => `
    <div class="pb-2">
        <p><strong class="capitalize">${item?.title || ''}</strong></p>
        <p>${item?.updated || ''}</p>
        <p class="mb-1">
        <enhance-link href="/notes/${item.key}">Edit this note</enhance-link>
        </p>
        <form action="/notes/${item.key}/delete" method="POST" class="mb-1">
        <enhance-submit-button><span slot="label">Delete this note</span></enhance-submit-button>
        </form>
    </div>`).join('\n')}
      `
}
