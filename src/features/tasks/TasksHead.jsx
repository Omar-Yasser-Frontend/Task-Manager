function TasksHead() {
  return (
    <section>
      <div className="mx-auto mt-6 flex w-[36rem] max-w-full items-start gap-3 px-4">
        <img src="/public/Logo.svg" alt="Icon to website logo" />
        <div className="space-y-3">
          <h1 className="text-4xl capitalize">My task board </h1>
          <p>Task to keep organize</p>
        </div>
      </div>
    </section>
  );
}

export default TasksHead;
