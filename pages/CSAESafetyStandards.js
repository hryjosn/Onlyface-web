import React from 'react';

function CSAEPreventionPolicies() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CSAE Prevention Policies</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Introduction</h2>
        <p style={styles.text}>
          Our application is dedicated to preventing Child Sexual Abuse and Exploitation (CSAE). We enforce strict policies and employ advanced measures to ensure a safe environment for all users.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Prohibited Activities</h2>
        <p style={styles.text}>
          We strictly prohibit the following activities:
        </p>
        <ul style={styles.list}>
          <li>Any form of child sexual abuse material (CSAM)</li>
          <li>Grooming or coercing minors into inappropriate activities</li>
          <li>Sextortion or blackmailing minors</li>
          <li>Any attempt to facilitate or promote child trafficking</li>
          <li>Sharing or distributing exploitative content involving minors</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Prevention Measures</h2>
        <ol style={styles.list}>
          <li>
            <strong>Content Moderation</strong>: Our AI-powered and human review systems actively scan and remove CSAE-related content.
          </li>
          <li>
            <strong>User Verification</strong>: Identity verification processes help prevent the creation of fake accounts used for illicit activities.
          </li>
          <li>
            <strong>Age Restrictions</strong>: Minors are restricted from accessing adult content, and age verification steps are enforced.
          </li>
          <li>
            <strong>Real-Time Monitoring</strong>: We implement automated monitoring tools to detect and flag suspicious activities.
          </li>
          <li>
            <strong>Strict Reporting System</strong>: Users can report suspicious behavior through our in-app reporting system.
          </li>
          <li>
            <strong>Parental Controls</strong>: We provide parents with tools to monitor and restrict their child's activities on the platform.
          </li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Reporting and Enforcement</h2>
        <ul style={styles.list}>
          <li>
            <strong>Immediate Action</strong>: Reported CSAE violations are reviewed and acted upon immediately.
          </li>
          <li>
            <strong>Collaboration with Authorities</strong>: We work closely with law enforcement agencies and child protection organizations.
          </li>
          <li>
            <strong>Permanent Account Bans</strong>: Users found violating CSAE policies will face an irreversible account ban.
          </li>
          <li>
            <strong>Legal Action</strong>: We take legal measures against individuals involved in CSAE activities.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Contact and Support</h2>
        <p style={styles.text}>
          If you encounter any CSAE-related content or suspicious activity, please report it through our in-app reporting feature or contact our support team at{' '}
          <a href="mailto:support@example.com" style={styles.link}>
            support@example.com
          </a>.
        </p>
        <p style={styles.text}>
          For more information, visit:{' '}
          <a
            href="https://www.example.com/csae-prevention-policies"
            style={styles.link}
          >
            https://www.example.com/csae-prevention-policies
          </a>.
        </p>
      </section>
    </div>
  );
}

// Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  subHeading: {
    color: '#555',
    marginBottom: '15px',
    borderBottom: '2px solid #eee',
    paddingBottom: '5px',
  },
  text: {
    color: '#666',
    marginBottom: '20px',
  },
  list: {
    paddingLeft: '20px',
    color: '#666',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default CSAEPreventionPolicies;