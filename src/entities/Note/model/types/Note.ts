export interface Note {
  text: string;
  name: string;
  hashtag?: string;
}

export interface NoteSchema {
  data: Note[];
}
