import React from "react";



const CSAESafetyStandards = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>CSAE Prevention and Safety Standards</h1>
            <p style={styles.text}>
                As a social or dating application, we are committed to ensuring user safety and complying with child safety policies. We publicly disclose our safety standards for preventing Child Sexual Abuse and Exploitation (CSAE).
            </p>
            <p style={styles.text}>
                For more details on our CSAE prevention measures, please visit the following link:
            </p>
            <p>
                <a href="https://www.example.com/csae-safety-standards" target="_blank" rel="noopener noreferrer" style={styles.link}>
                    CSAE Safety Standards
                </a>
            </p>
            <h2 style={styles.heading}>Contact Information</h2>
            <p style={styles.text}>If you have any questions or concerns regarding safety policies, please contact us at:</p>
            <p>
                Email: <a href="mailto:prettyfaceowner@gmail.com" style={styles.link}>support@example.com</a>
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
    },
    heading: {
        color: "#333",
    },
    text: {
        fontSize: "16px",
        lineHeight: "1.5",
        color: "#555",
    },
    link: {
        color: "#007BFF",
        textDecoration: "none",
    },
};

export default CSAESafetyStandards;



