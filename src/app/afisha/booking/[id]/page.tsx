import { EVENTSINFOALL } from "@/data/events.all.data"

export function generateStaticParams() {
  return EVENTSINFOALL.map(event => ({
    id: event.id
  }))
}

export default async function Booking({params}: {params: Promise<{ id: string }>})  {
  const {id} = await params

  const event = EVENTSINFOALL.find(e => e.id === id)
  if (!event) return (
    <div className="text-center mt-10 md:mt-20 ">
      <h1 className="text-9xl  text-white">404</h1>
      <p className="text-white/10 text-3xl">Событие не найдено</p>
    </div>

  )
  return (
    <div >
      <span
        data-tc-event-inline={event.dataTcEvent}
        data-tc-token={event.dataTcToken}
      ></span>
    </div>
  )
}
