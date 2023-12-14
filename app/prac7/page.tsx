import Image  from "next/image"




const menu = [
    {
        
        title:"bryani",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img5.jpg"
    },
    {

        title:"tikka",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img4.jpg"
    },
    {

        title:"malai boti",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img3.jpg"
    },
    {

        title:"karela",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img2.webp"
    },
    {

        title:"karahi",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img1.jpg"
    },
    {

        title:"lafi",
        description:"laziz bryani with chicken piece and making some delicious flavours in this",
        price:500,
        colddrink:true,
        image:"/img.jpg"
    },
]
const page = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[90%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                menu.map((item,index) =>
                    
                        <div key={index} className='border rounded-md p-5 hover:shadow-2xl'>
                        <Image src={item.image} alt={item.title} width={500} height={500}/>
                        <h3 className="font-bold">{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}$</p>
                        <p>Cold drink: {item.colddrink ? "Pepsi":"Water"}</p>
                        </div>
                    
                )
            }
        </div>

    </div>
  );
}

export default page