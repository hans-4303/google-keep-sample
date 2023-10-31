export type defaultNote = {
  id?: number;
  title: string;
  content: string;
};

export type creatingNote = {
  title: string;
  content: string;
}

export type editNote = {
  id: number;
  editTitle: string;
  editContent: string;
};
