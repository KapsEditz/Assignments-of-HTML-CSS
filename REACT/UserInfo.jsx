import ContactForm from "./ContactForm";

export default function UserInfo({data}) {

    if (!data) {
        return <h3>No User Data Available</h3>;
    }

    return(
        <>
        <h2>User Information - </h2>
        <p>Username - {data.username}</p>
        <p>Address - {data.address}</p>
        <p>Email - {data.email}</p>
        <p>Age - {data.age}</p>
        </>
    )
}
