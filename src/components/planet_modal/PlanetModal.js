import { useParams } from 'react-router-dom';
import './planetModal.css';

export default function PlanetModal() {
  let { planetId } = useParams();
  function hidden() {
    document.body.style.overflow = 'hidden';
  }
  return (
    <div id='planet_modal'>
      <i className='far fa-arrow-alt-circle-left planet_model_back_arrow'></i>
      <div>{planetId}</div>
      {hidden()}
    </div>
  );
}
