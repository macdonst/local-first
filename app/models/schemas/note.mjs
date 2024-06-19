export const Note = {
  "id": "Note",
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "data": {
      "type": "string"
    },
    "created": {
      "type": "string",
      "format": "date-time"
    },
    "updated": {
      "type": "string",
      "format": "date-time"
    },
    "key": {
      "type": "string"
    }
  }
}
