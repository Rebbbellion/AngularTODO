export type TaskAPI = {
  title: string;
  desc: string;
  completed: boolean;
};

export type TasksCollectionResponse = {
  id: TaskAPI;
};

export type TaskCreationResponse = {
  name: string;
};
