
import { useState,useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';


function BreadcrumbExample(props) {
    const [active, setActive] = useState(false);
    const [path,setPath] =useState('/')
    const list=props.data;
    const location = useLocation();
    console.log(location.pathname)
    console.log(path)
    useEffect(() => {
        setActive(false);
        if(path===location.pathname){
            setActive(true);
        }
        else{
            setActive(false);
        }
      }, [location, path]);
      const filteredList = list.filter(item => item.path !== '/about');
    return(
            
            <ul>
                {filteredList.map((item)=>(
                    <li key={item.path} className={item.path===location.pathname ? 'active' : ''}>
                        <Link onClick={()=>{setActive(true);setPath(item.path);props.setPageTitle(item.title)}} to={{pathname:item.path}} className={item.path===location.pathname ? 'active' : ''}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        
    )
}

export default BreadcrumbExample;

