import React from 'react'; 

const User = ({data}) => {
    //console.log(data);
    return (
        <div className="container mx-auto border">
            <div className="row">
                <div className="col-2">
                    { <img src={data.picture.large} /> }
                </div>
                <div className="col-5">
                    <p>nom/prénom: {data.name.title} {data.name.first} {data.name.last}</p>
                    <p>Nationalité : {data.nat}</p>
                    <p>Adresse: {data.location.street.number}, {data.location.street.name}</p>
                    <p>Ville: {data.location.postcode},  {data.location.city}</p>
                    <p>Pays: {data.location.country}</p>
                </div>
                <div className="col-5">
                    {/* <iframe src={"http://maps.google.com/maps?q="+data.location.coordinates.latitude+","+data.location.coordinates.longitude+"&z=16&output=embed"} height="100%" width="100%"></iframe> */}
                </div>
            </div>

        </div>
    );
}

export default User; 