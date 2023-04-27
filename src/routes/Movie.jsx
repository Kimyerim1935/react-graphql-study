import { useParams } from 'react-router-dom';

export default function Movie() {
    const params = useParams();

    return <>this is movie: {params}</>;
}
