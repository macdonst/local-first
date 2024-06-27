// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getNotes, upsertNote, validate } from '../models/notes.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const notes = await getNotes()
  if (req.session.problems) {
    let { problems, note, ...session } = req.session
    return {
      session,
      json: { problems, notes, note }
    }
  }

  return {
    json: { notes }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  console.log(req.body)
  const { body } = req
  return {
    json: {
      body
    }
  }
}
