import { useParams } from 'react-router-dom';

export default function Movie() {
    const params = useParams();

    console.log(params);

    return <>this is movie</>;
}
