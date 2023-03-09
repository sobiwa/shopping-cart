import Search from './Search'

export default function SearchSlide({show, setShow, stock}) {
  return (
    <div className={`search-slide ${show ? 'slide-up' : ''}`}>
      <Search stock={stock} isOpen={show} exit={() => setShow(false)} focusAuto={true}/>


    </div>
  )
}