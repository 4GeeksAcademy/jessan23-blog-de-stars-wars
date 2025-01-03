import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { type, id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const data = await response.json();
                setDetails(data.result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching details:", error);
            }
        };
        fetchDetails();
    }, [type, id]);

    if (loading) {
        return <div className="container text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${id}.jpg`}
                        alt={details.properties.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h1>{details.properties.name}</h1>
                    <ul className="list-group">
                        {Object.keys(details.properties).map((key, index) => (
                            <li className="list-group-item" key={index}>
                                <strong>{key.replace("_", " ")}:</strong> {details.properties[key]}
                            </li>
                        ))}
                    </ul>
                    <a href="/" className="btn btn-primary mt-3">Back to Home</a>
                </div>
            </div>
        </div>
    );
};
