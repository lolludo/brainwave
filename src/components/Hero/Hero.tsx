import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {

    const FEATURES = [
        {
            title: 'Tuned Chatbot',
            desc: 'Your personalized academic assistant trained on your specific curriculum.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            title: 'AI Planner',
            desc: 'Smart scheduling that adapts to your deadlines and study habits.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            )
        },
        {
            title: 'Quiz Generator',
            desc: 'Instantly generate practice quizzes from your lecture notes and PDFs.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            title: 'Media Analyzer',
            desc: 'Transcribe YouTube videos and ask AI questions about the content.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            )
        },
        {
            title: 'AI Performance Insights',
            desc: 'Get personalized, actionable suggestions to improve your grades and attendance.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                    <path d="M23 6l-9.5 9.5-5-5L1 18"></path>
                    <path d="M17 6h6v6"></path>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.hero}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>

            <div className={styles.badge}>
                <span style={{ width: 8, height: 8, background: 'currentColor', borderRadius: '50%' }}></span>
                v1.0 Public Beta
            </div>

            <h1 className={styles.title}>
                <span className={styles.gradientText}>Your Academic</span>
                <br />
                <span className={styles.highlight}>Superintelligence</span>
                <br />
                <span style={{ fontSize: '0.4em', fontWeight: 400, color: 'var(--text-secondary)', display: 'block', marginTop: '16px', letterSpacing: 'normal' }}>
                    with NEXUS (Next-gen Education eXperience for University Students)
                </span>
            </h1>

            <p className={styles.subtitle}>
                The all-in-one platform for students. Manage files, track attendance, and get instant answers from your own personalized AI assistant.
            </p>

            <div className={styles.ctaGroup}>
                <Link href="/dashboard">
                    <button className={styles.primaryCta}>
                        Launch Dashboard
                    </button>
                </Link>
                <button
                    className={styles.secondaryCta}
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore Features
                </button>
            </div>

            {/* Features Grid */}
            <div id="features" className={styles.featuresGrid}>
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className={styles.featureCard}>
                        <div className={styles.featureIcon}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDesc}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
