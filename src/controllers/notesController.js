import  Note  from "../models/note.js";

let notes = [
  new Note(1, 'Note One', 'This is the first note.'),
  new Note(2, 'Note Two', 'This is the second note.'),
  new Note(3, 'Note Three', 'This is the third note.')
];
let nextId = 4;


export const getAllNotes = (req , res) => {
    res.json(notes);
}

export const getAllNoteById =  (req, res) => {
  const id = parseInt(req.params.id);
  const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.json(note);
};

export const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const note = new Note(nextId++, title, content);
  notes.push(note);
  res.status(201).json(note);
};

export const deleteNote = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  const note = notes.find(n => n.id === id);
  if (!note) {
    return res.status(404).json({ error: 'Note not found' });
  }

  notes = notes.filter(n => n.id !== id);

  res.json({
    message: 'Note deleted successfully',
    deletedNote: note
  });
};
