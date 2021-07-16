
const WelcomePage = (props) => {
    return (
        <>
            <h1>A day in the Life Game</h1>
            <p>Welcome to 1930's New York City</p>
            <p>You are a young black jazz pianist looking to take your career to the next level</p>
            <p>Experience what is it like to perform and teach in the booming 30's.</p>
            <p>But be careful, the road to the top is not all fun and games</p>
            <button onClick={props.startBtn}>Start game</button>
        </>
    )
}
export default WelcomePage;