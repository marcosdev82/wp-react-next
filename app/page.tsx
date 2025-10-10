import Publicidade from "./components/Publicidade/indext";
import Slider from "./components/Slider";


export default function Home() {

  return (
    <div className="w-full">
      <Slider />
      <main style={{ height: '700px' }}>
        <Publicidade />
        <h1>teste</h1>
      </main>
    </div>
  );
}
