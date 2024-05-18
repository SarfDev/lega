export function Card({imgCampione, item1,item2,item3,item4,item5,item6,nome}){

    return(

        <div className='flex flex-col gap-4 items-start md:w-[250px]' style={{display:"flex", flexDirection:"column", gap:"16px",alignItems:"center"}}>

            <img src={imgCampione} className='h-60' style={{height:"240px",objectFit:"cover"}}/>

            <h2>{nome}</h2>

            <div className='grid grid-cols-3 grid-rows-3 gap-2' style={{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))", gridTemplateRows:"repeat(3, minmax(0, 1fr))", gap:"8px"}}>

                <img src={item1} className='h-16' style={{height:"64px",objectFit:"cover"}}/>
                <img src={item2} className='h-16' style={{height:"64px",objectFit:"cover"}}/>
                <img src={item3} className='h-16' style={{height:"64px",objectFit:"cover"}}/>

                <img src={item4} className='h-16' style={{height:"64px",objectFit:"cover"}}/>
                <img src={item5} className='h-16'style={{height:"64px",objectFit:"cover"}}/>
                <img src={item6} className='h-16'style={{height:"64px",objectFit:"cover"}}/>

            </div>

        </div>
    )
}