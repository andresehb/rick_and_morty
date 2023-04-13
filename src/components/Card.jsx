import { Link } from 'react-router-dom';
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions/actions';
import { useEffect, useState } from 'react';

export default function Card(props) {

   const dispatch = useDispatch();

   const { id, name, status, species, gender, origin, image, onClose } = props;

   const [isFav, setIsFav] = useState(false);

   const { myFavorites } = useSelector((s) => s)

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const superClose = () => {
      onClose(id)
   }

   return (
      <div className="card">
         {
            isFav ? (
               <button className='fav-btn' onClick={handleFavorite}>❤️</button>
            ) : (
               <button className='fav-btn' onClick={handleFavorite}>🤍</button>
            )
         }
         <button className='card-button' onClick={superClose}>X</button>
         <Link className='link' to={`/detail/${id}`}>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name}/>
         </Link>
      </div>
   );
};