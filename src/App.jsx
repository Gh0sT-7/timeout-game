import Player from './components/player/Player.jsx';
import Challenge from './components/challenge/Challenge.jsx';

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <Challenge title="Easy" targetTime={1} />
                <Challenge title="Medium" targetTime={5} />
                <Challenge title="Hard" targetTime={10} />
                <Challenge title="Pro" targetTime={15} />
            </div>
        </>
    );
}

export default App;
