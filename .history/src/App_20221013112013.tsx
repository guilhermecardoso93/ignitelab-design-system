import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form className='flex flex-col items-stretch'>
        <label htmlFor='email' className='font-bold'>
          <Text>Endereço de e-mail</Text>
        </label>
      </form>
    </div>
  );
}
