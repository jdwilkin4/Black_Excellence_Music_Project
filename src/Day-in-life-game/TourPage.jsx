const TourPage = (props) => {

  return (
    <>
      <h2 className="my-6 text-4xl text-center">{props.greeting} </h2>
      <p className="my-2 text-xl text-center">Earnings: ${props.earnings}</p>
      {props.tourComponents}
    </>

  )

}
export default TourPage;