import { card_data } from '../data/Card';

function Card() {
  return (
    <div className='flex flex-col justify-center items-center mt-10 px-5'>
      <h1 className='text-3xl md:text-5xl font-bold font-mono text-center mb-5'>
        From inspiration to creation.
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-5">
        {
          card_data.map(card => {
            return (
              <div key={card.id} className="w-full md:w-1/2 lg:w-1/4 p-2">
                <video src={card.image} autoPlay loop muted className='video w-full h-72 rounded-2xl mb-3'></video>
                <h1 className='text-xl font-bold font-mono text-center'>{card.title}</h1>
                <p className='font-mono text-center'>{card.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Card;
