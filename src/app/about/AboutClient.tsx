"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, CheckCircle2, Heart } from 'lucide-react';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

const coreValues = [
  {
    icon: <Users size={40} />,
    title: 'Real Experience',
    desc: 'Every advisor has built, operated, and sold businesses. We understand the pressures of ownership.'
  },
  {
    icon: <Target size={40} />,
    title: 'Practical Advice',
    desc: 'We focus on what works in the real world, not just theory. Advice grounded in commercial reality.'
  },
  {
    icon: <CheckCircle2 size={40} />,
    title: 'Honest Accountability',
    desc: 'We bring structure and discipline to ensure thorough, consistent, outcome-focused work.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Long-Term Thinking',
    desc: 'We build relationships on mutual respect, clear communication, and genuine partnership.'
  }
];

const pillars = [
  {
    number: '01',
    title: 'We understand that timing matters',
    desc: 'Context changes everything. What works for one business at one time may not work for another.'
  },
  {
    number: '02',
    title: 'We know when "best practice" needs to be adapted',
    desc: 'We adapt guidance to your specific situation, not the other way around.'
  },
  {
    number: '03',
    title: 'We appreciate the difference between advice that sounds good and advice that works',
    desc: 'We measure success by outcomes, not by how impressive the recommendations sound.'
  }
];

export default function About() {
  return (
    <main className={styles.main}>
      {/* Hero – Bold heading with animated blobs */}
      <div className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1><span className={styles.label}>ABOUT</span><br />Built by Business Owners, <span className={styles.gradientText}>for Business Owners</span></h1>
        </motion.div>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      {/* Foundation Section */}
      <Section className={styles.foundationSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.foundationContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.foundationBox}>
              <h2>Our Foundation</h2>
              <p className={styles.foundationLead}>
                ecco Consultants was founded on a simple belief:
              </p>
              <p className={styles.highlight}>
                The best business advice comes from people who have actually run businesses themselves.
              </p>
              <p>
                Every advisor at ecco has built, operated, and sold businesses. We've experienced the pressure of ownership, the responsibility of leadership, and the complexity that comes with growth. That lived experience shapes how we think, how we advise, and how we work with our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Perspective Section – 3-Column Values Grid */}
      <Section className={styles.perspectiveSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Perspective</h2>
            <p>Running a business isn't theoretical. Decisions are made with incomplete information. Trade-offs are unavoidable.</p>
          </motion.div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className={styles.pillarCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <div className={styles.pillarNumber}>{pillar.number}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Role Section */}
      <Section className={styles.roleSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.roleContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.roleBox}>
              <h2>Our Role</h2>
              <p>
                Our role is <strong>not</strong> to overwhelm you with ideas.
              </p>
              <p className={styles.roleHighlight}>
                It's to help you make clear, confident decisions and follow through on them.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* From Ownership to Advisory */}
      <Section className={styles.transitionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.transitionContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>From Ownership to Advisory</h2>
            <p>
              ecco wasn't created to replicate traditional consulting models. It was created as a response to what many of us experienced as business owners — advice that was technically sound, but disconnected from reality.
            </p>
            <p>
              Our transition into advisory work was driven by a desire to:
            </p>
            <ul className={styles.transitionList}>
              <li>Apply our real-world experience to other businesses</li>
              <li>Help owners avoid mistakes we've seen (and made ourselves)</li>
              <li>Support better outcomes through practical, commercially grounded advice</li>
            </ul>
            <p>
              We bring that mindset into every engagement.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values Grid – 4 Column */}
      <Section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How We Work</h2>
            <p>Our approach combines real-world experience with structured discipline.</p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who We Work With */}
      <Section className={styles.fitSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.fitContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Who We Work With</h2>
            <p>We work with established Australian and New Zealand business owners who:</p>
            <ul className={styles.fitList}>
              <li>Care about building better businesses</li>
              <li>Value thoughtful, experience-led advice</li>
              <li>Are open to challenge and accountability</li>
              <li>Want outcomes, not just insight</li>
            </ul>
            <p className={styles.fitClose}>
              Our clients don't expect perfection — but they do expect honesty, competence, and follow-through.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Trust Section */}
      <Section className={styles.trustSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.trustContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.trustBox}>
              <h2>A Relationship Built on Trust</h2>
              <p>
                Working with ecco is not a transaction. It's a relationship built on:
              </p>
              <ul className={styles.trustList}>
                <li>Mutual respect</li>
                <li>Clear communication</li>
                <li>Commercial realism</li>
                <li>Long-term thinking</li>
              </ul>
              <p>
                We take the trust our clients place in us seriously — because we know what it's like to have your business on the line.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team CTA */}
      <Section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.teamContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Advisors</h2>
            <p>Our advisors bring a broad range of real-world experience across different industries and business stages.</p>
            <a href="/team" className={styles.ctaBtn}>
              Meet Our Team <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </Section>

      <ContactForm description="If what you’ve read resonates and you’d like to continue the conversation, we’d welcome it. Complete the form to book a Complimentary Strategy Session where we’ll learn more about your business and share how we think about growth, value, and long-term resilience." />
    </main>
  );
}
