import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const segments = [
    { id: 'vc', title: 'Venture Capital Funds', link: '#vc' },
    { id: 'innovation', title: 'Corporate Innovation', link: '#innovation' },
    { id: 'pe', title: 'Private Equity Funds', link: '#pe' },
    { id: 'corpdev', title: 'Corporate Development - M&A Teams', link: '#corpdev' },
    { id: 'ib', title: 'Investment banks', link: '#ib' },
    { id: 'journalists', title: 'Journalists and Publications', link: '#journalists' },
    { id: 'incubators', title: 'Incubators', link: '#incubators' },
    { id: 'gov', title: 'Government Agencies', link: '#gov' }
];

const CustomerSegments = () => {
    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>
                        Built for the entire <br />
                        <span className="text-gradient-testimonial">Private Market Ecosystem</span>
                    </h2>
                </div>

                <div style={styles.grid}>
                    {segments.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.link}
                            style={styles.listItem}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <span style={styles.itemTitle}>{item.title}</span>
                            <motion.div variants={{
                                rest: { x: 0 },
                                hover: { x: 8 }
                            }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                                <ArrowRight size={24} color="#656565" strokeWidth={1} />
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0',
        backgroundColor: '#FCFCFC',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
    },
    header: {
        textAlign: 'center',
        marginBottom: '60px',
    },
    heading: {
        fontSize: '3.5rem',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: 1.2,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '80px',
        rowGap: '0px',
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '32px 0 24px 0',
        borderBottom: '1px solid #1a1a1a',
        textDecoration: 'none',
        color: '#1a1a1a',
    },
    itemTitle: {
        fontSize: '1.25rem',
        fontWeight: 600,
        fontFamily: 'var(--font-family-sans)',
        color: '#1a1a1a',
    }
};

export default CustomerSegments;
