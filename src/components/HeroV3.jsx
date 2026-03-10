import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../assets/hero-bg-final-v2.png';

const logos = [
    { name: 'Accel', url: 'https://cdn.tracxn.com/images/static/homepage/clients/accel_90x90_1x.png' },
    { name: 'Partech', url: 'https://cdn.tracxn.com/images/static/homepage/clients/partech-wbg_90x90_1x.png' },
    { name: 'IQT', url: 'https://cdn.tracxn.com/images/static/homepage/clients/iqt_90x90_1x.png' },
    { name: 'Palo Alto Networks', url: 'https://cdn.tracxn.com/images/static/homepage/clients/paloalto_90x90_1x.png' },
    { name: 'Maersk', url: 'https://cdn.tracxn.com/images/static/homepage/clients/maersk_90x90_1x.png' }
];

const HeroV3 = () => {
    const { scrollY } = useScroll();
    const highlightGradient = useTransform(
        scrollY,
        [0, 300],
        [
            'linear-gradient(90deg, #003366 0%, #003366 20%, #003366 30%, #66CCFF 40%, #003366 50%, #66CCFF 60%, #003366 70%, #003366 80%, #003366 100%)',
            'linear-gradient(90deg, #003366 0%, #003366 20%, #003366 30%, #66CCFF 40%, #003366 50%, #66CCFF 60%, #003366 70%, #003366 80%, #003366 100%)'
        ]
    );

    return (
        <section style={styles.section}>
            {/* Background Image Layer */}
            <div style={styles.bgLayer}>
                <img
                    src={heroBg}
                    alt="Hero Background"
                    style={styles.bgImage}
                />
            </div>
            <div className="container" style={styles.container}>
                <div style={styles.topSection}>
                    <div style={styles.leftColumn}>
                        <h1 style={styles.headline}>
                            <span style={{ display: 'block' }}>Everything You Need on</span>
                            <motion.span
                                style={{ ...styles.highlight, backgroundImage: highlightGradient, display: 'block' }}
                            >
                                Private Market Data
                            </motion.span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={styles.subhead}
                        >
                            AI-powered technology and human intelligence for global deal discovery. A unified data platform for investors, M&A teams, and government agencies.
                        </motion.p>
                        <div style={styles.ctaGroup}>
                            <button className="btn-donate">Request for demo</button>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={styles.rightColumn}
                    >
                        <div style={styles.videoWrapper}>
                            <video
                                src="https://cdn.tracxn.com/marketing-campaigns/AI_Search_Video_for_homepage_wireframe_qWXUFy_7YCbu6GFAeCCwL.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={styles.videoStyle}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Logos Section */}
                <div style={styles.logosSection}>
                    <h3 style={styles.trustedBy}>Trusted by</h3>
                    <div style={styles.logoStrip}>
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                style={styles.logoItem}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                            >
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    style={styles.logoImg}
                                    title={logo.name}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0 60px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    bgLayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'bottom',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 180px)', // Account for section padding
        justifyContent: 'center',
    },
    topSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '80px', // Reverted back to a smaller gap to fit side-by-side
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    leftColumn: {
        flex: '1.2 1 0',
        textAlign: 'left',
        minWidth: '50%',
    },
    rightColumn: {
        flex: '1 1 0',
        minWidth: '40%',
    },
    headline: {
        fontSize: '3.5rem',
        fontFamily: '"PT Serif", serif',
        fontWeight: 400,
        color: '#1a1a1a',
        marginBottom: '20px',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        position: 'relative',
        zIndex: 2,
    },
    highlight: {
        backgroundSize: '200% auto',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
    },
    subhead: {
        fontSize: '1.25rem',
        color: '#5f6368',
        marginBottom: '24px',
        fontFamily: 'var(--font-family-sans)',
        lineHeight: 1.6,
        maxWidth: '1000px',
        margin: '0 0 30px 0',
        position: 'relative',
        zIndex: 2,
    },
    logosSection: {
        textAlign: 'center',
        marginTop: 'auto',
    },
    trustedBy: {
        fontSize: '1rem',
        color: '#5f6368',
        marginBottom: '20px',
        fontFamily: 'var(--font-family-sans)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    logoStrip: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 2,
    },
    logoItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImg: {
        height: '100px',
        width: 'auto',
        transition: 'all 0.3s ease',
    },
    ctaGroup: {
        marginTop: '10px',
        marginBottom: '40px',
    },
    videoWrapper: {
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.05)',
        backgroundColor: '#000',
    },
    videoStyle: {
        width: '100%',
        height: 'auto',
        display: 'block',
    }
};

export default HeroV3;
