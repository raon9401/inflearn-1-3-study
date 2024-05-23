import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Input from "./components/Input";
import PokemonGallery from "./components/pokemon/PokemonGallery";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Input />
        <PokemonGallery />
        <div className="flex justify-center mb-8">
          <button className="bg-slate-900 rounded-md border-0 text-white font-semibold py-2 px-4">
            MORE
          </button>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
