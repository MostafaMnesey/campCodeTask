import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Index from "./Products/View";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Index />
        <Toaster position="top-right"
          reverseOrder={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
