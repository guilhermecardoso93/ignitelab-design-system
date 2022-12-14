import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-2">
          Faça login e comece a usar
        </Text>
      </header>
    </div>
  );
}
