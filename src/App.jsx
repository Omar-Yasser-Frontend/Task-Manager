import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import TasksApp from "./pages/TasksApp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import TaskDetails from "./features/tasks/TaskDetails";
import EditTask from "./features/tasks/EditTask";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./features/signup/Signup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TasksApp />
              </ProtectedRoute>
            }
          >
            <Route path="details/:taskId" element={<TaskDetails />} />
            <Route path="edit/:taskId" element={<EditTask />} />
          </Route>
        </Routes>
        <ReactQueryDevtools />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
