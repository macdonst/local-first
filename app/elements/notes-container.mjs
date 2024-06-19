export default function NotesContainer({ html }) {
  return html`
    <e-box>
      <e-row>
        <e-col span="3">
            <slot name="list"></slot>
        </e-col>
        <e-col >
            <slot name="note"></slot>
        </e-col>
      </e-row>
    </e-box>
`
}
