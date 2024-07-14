import "./Greetings.css"


function Greetuser()
{


    const fname = (name)=> name.toUpperCase()
    return (
        
        <div className="bg-dark">
        <h1>Hello, {fname("aman dubey")}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptatum unde cum minima, accusantium officiis eos quos fugit provident. Consequatur ipsam quibusdam quos voluptate quo illum vero. Nam, beatae ipsum!
        Iste veritatis odit incidunt. Rem quasi asperiores hic. Vero ullam sit provident blanditiis reprehenderit! Molestias praesentium obcaecati perferendis sapiente accusamus amet nesciunt, soluta inventore, quaerat iusto error enim debitis ratione?
        Repellat iste omnis deserunt nostrum quam dolorem quisquam voluptate ipsum! Suscipit officia consequuntur corporis est autem nesciunt. Illum dolore exercitationem porro quaerat accusantium? Perferendis, nobis magnam sint animi quidem dolor.
        </p>
        
        
        
        </div>
    )
}


export default Greetuser