import React, {useEffect, useState} from 'react';


function Barbershop(props) {
    const [advice, setAdvice] = useState("");
    useEffect(()=> {
        const bbh = async () => {
            try{
            const getFetch = await fetch('https://yclients.com/dashboard/266801', {
                method:'GET',
                headers: {
                    'Authorization': `Bearer 6y6nzmdgrmdwctjcmgpg`,
                }

            });
            console.log(getFetch);
            const json = await getFetch.json();
            console.log(json);
            setAdvice(json.slip.advice)
            } catch(error) {
                console.log("error", error.message);
            }
        }
        bbh();
    }, [])
    return (
        <div>
            <div> {advice}</div>
        </div>
    );
}

export default Barbershop;