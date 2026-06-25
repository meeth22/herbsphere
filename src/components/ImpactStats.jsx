import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { GiOakLeaf, GiCalendar, GiTwoCoins } from "react-icons/gi";
import { MdGroups, MdAccessTime, MdMenuBook } from "react-icons/md";

// Animated counter sub-component
function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16); // cap at ~60fps
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / totalMiliseconds, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function ImpactStats() {
  const { t } = useTranslation();

  const stats = [
    {
      id: "plants",
      target: "500",
      suffix: "+",
      labelKey: "stats.plants",
      icon: <MdMenuBook size={32} />,
      color: "#2d6a4f",
      bg: "#d8f3dc",
    },
    {
      id: "events",
      target: "100",
      suffix: "+",
      labelKey: "stats.events",
      icon: <GiCalendar size={32} />,
      color: "#40916c",
      bg: "#b7e4c7",
    },
    {
      id: "members",
      target: "2500",
      suffix: "+",
      labelKey: "stats.members",
      icon: <MdGroups size={32} />,
      color: "#8b6914",
      bg: "#fef9ee",
    },
    {
      id: "hours",
      target: "1000",
      suffix: "+",
      labelKey: "stats.hours",
      icon: <MdAccessTime size={32} />,
      color: "#1b4332",
      bg: "#95d5b2",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section stats-section">
      <div className="section-inner">
        {/* Section Header */}
        <motion.div
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("stats.label")}</span>
          <h2 className="section-title">{t("stats.title")}</h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="stats__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stats__card glass-card"
              variants={cardVariants}
            >
              <div className="stats__icon-wrapper" style={{ background: stat.bg, color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stats__number" style={{ color: stat.color }}>
                <AnimatedCounter target={stat.target} />
                <span>{stat.suffix}</span>
              </div>
              <p className="stats__label">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .stats-section {
          background: linear-gradient(180deg, var(--cream) 0%, #fdfbf7 100%);
          position: relative;
          overflow: hidden;
        }
        .stats-section::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(116, 198, 157, 0.08) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          z-index: 1;
          pointer-events: none;
        }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .stats__card {
          background: white;
          border: 1px solid var(--cream-dark);
          border-radius: var(--radius-lg);
          padding: 36px 24px;
          text-align: center;
          box-shadow: var(--shadow-card);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 2;
        }
        .stats__card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--sage);
        }
        .stats__icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: inset 0 2px 6px rgba(0,0,0,0.05);
        }
        .stats__number {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
          justify-content: center;
        }
        .stats__number span {
          font-size: 2rem;
          font-weight: 700;
          margin-left: 1px;
        }
        .stats__label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        @media (max-width: 1024px) {
          .stats__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .stats__grid {
            grid-template-columns: 1fr;
          }
          .stats__card {
            padding: 28px 20px;
          }
          .stats__number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
