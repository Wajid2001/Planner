import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { DialogHeader } from "./components/ui/dialog";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const newTask: Task = {
      id: Math.random().toString(36).substring(7),
      title: "New Task",
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="flex flex-col gap-4 px-8 py-6">
      <h2>Task Board</h2>

      <div className="flex flex-row gap-2">
        <Input type="text" placeholder="Search tasks..." />

        <Dialog>
          <DialogTrigger>
            <Button title="New Task" onClick={addTask}>
              <PlusIcon />
              <span>New Task</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our
                servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Button variant="outline">All</Button>
          <Button variant="outline">Active</Button>
          <Button variant="outline">Completed</Button>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Button variant="outline" size="icon">
              <PlusIcon />
            </Button>
            <Button variant="outline" size="icon">
              <PlusIcon />
            </Button>
            <Button variant="outline" size="icon">
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex flex-row gap-2">
            <Button variant="ghost">{task.title}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
