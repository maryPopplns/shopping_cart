import { useParams } from 'react-router-dom';
import './planetModal.css';

export default function PlanetModal() {
  let { planetId } = useParams();
  return (
    <div id='planet_modal'>
      <div>{planetId}</div>
      {(document.body.style.overflow = 'hidden')}
    </div>
  );
}
