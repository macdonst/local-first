// View documentation at: https://enhance.dev/docs/learn/starter-project/api
import { deleteNote } from '../../../models/notes.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, note: removed, ...newSession } = session
  try {
    let note = await deleteNote(id)
    return {
      session: newSession,
      json: { note },
      location: '/notes'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/notes'
    }
  }
}