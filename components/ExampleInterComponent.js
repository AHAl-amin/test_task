import { useInterFont } from '../lib/useInterFont';

export default function ExampleComponent() {
  const { fontClass, fontVariable } = useInterFont();

  return (
    <div className={fontClass}>
      <h1 className="text-2xl font-bold">This text uses Inter font</h1>
      <p>This paragraph also uses Inter font through the custom hook.</p>
    </div>
  );
}