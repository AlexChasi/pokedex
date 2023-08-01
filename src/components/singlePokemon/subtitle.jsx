export function Subtitle ({ text, center = true }) {
  return <div className={`relative w-full flex ${center ? 'justify-center' : 'justify-start'} after:w-full after:h-[3px] after:-z-10
  after:bg-neutral-200 after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2`}>
    <h1 className={`text-4xl capitalize bg-white ${center ? 'px-4' : 'pr-4'}`}>{text}</h1>
  </div>
}
