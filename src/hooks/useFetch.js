import  {useEffect , useState} from 'react';

export default function useFetch(url) {
    const [users, setusers] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setusers(data)
                    
                })
        }, 1000);
    } , [])
    return [users ]
}
