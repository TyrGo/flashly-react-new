export type Children = {
  children?: React.ReactNode;
};

export enum Permissions {
  Admin = 'admin',
  Authenticated = 'auth',
  Anon = 'anon',
}

export type BinUpdate = {
  level: 'up' | 'down';
  cardId: number;
};


export type CardEditorFormValues = {
  word: string;
  defn: string;
};

export type CardEditorWithId =
  CardEditorFormValues & { id: number };
