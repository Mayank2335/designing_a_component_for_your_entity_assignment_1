

function Usercard(){
    const profilePhoto = "https://www.w3schools.com/howto/img_avatar.png";
    const name = "Mayank Sharma";
    const mail = "sharmayank@mail.com";
    const phoneNumber = "971878xxxx";
    const address = "Haryana, India";


    return(
        <>
        <div style={{ border: "1px solid white", padding: "2rem" }}>
        <img src={profilePhoto} alt="image" style={{ width: "150px", height: "150px" }} />
           <h2>Name: {name}</h2>
           <p>Mail: {mail}</p> 
           <p>Phone Number: {phoneNumber}</p> 
           <p>Address: {address}</p> 
        </div>
        </>
        )
}
export default Usercard