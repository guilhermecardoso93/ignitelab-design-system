import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Envelope } from "phosphor-react";
import { Logo } from "./Logo";
import "./styles/global.css";

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10">
        <label htmlFor="email" className="flex flex-col gap-2" >
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col mt-2" >
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='senha' placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>
      </form>
    </div>
  );
}
