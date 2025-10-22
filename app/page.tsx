import Publicidade from "./components/Publicidade/indext";
import Slider from "./components/Slider";
import LinksRapidos from "./components/LinksRapidos"


export default function Home() {

  return (
    <div className="w-full">
      <Slider />
      <main style={{ height: '700px' }}>
        <LinksRapidos />
        <Publicidade />
        <h1>teste</h1>
      </main>
    </div>
  );
}
