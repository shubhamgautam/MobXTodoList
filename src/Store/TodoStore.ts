import { observable, action, computed } from "mobx";
import { v4 as uuid } from "uuid";

type TodoItem = {
  id: string;
  task: string;
};

export class TodoStore {
  @observable listItems: TodoItem[] = [];

  constructor() {}

  @action
  addTodo = (text: string) => {
    const id = uuid();
    this.listItems.push({ id: id, task: text });
  };

  @action
  remove = (id) => {
    const idx = this.listItems.findIndex((item) => item.id === id);
    this.listItems.splice(idx, 1);
  };

  @computed
  get totalItems(): number {
    return this.listItems.length;
  }
}
