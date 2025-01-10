import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_STORAGE_KEY = "task-storage";

export type TaskStorage = {
  name: string;
};

async function get(): Promise<TaskStorage[]> {
  const storage = await AsyncStorage.getItem(TASK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function save(newTask: TaskStorage) {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newTask]);

    await AsyncStorage.setItem(TASK_STORAGE_KEY, updated);
  } catch (error) {
    throw new Error("Error on save task");
  }
}

async function remove(name: string) {
  try {
    const storage = await get();

    const updated = storage.filter((task) => task.name != name);

    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw new Error("Error on remove task");
  }
}

async function update(oldName: string, newName: string) {
  try {
    const storage = await get();

    const updated = storage.filter((task) => task.name != oldName);

    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updated));

    save({ name: newName });
  } catch (error) {
    throw new Error("Error on update task");
  }
}

export const taskStorage = {
  get,
  save,
  remove,
  update,
};
