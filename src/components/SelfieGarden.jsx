import React, { useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Webcam from "react-webcam";
import { FaCamera, FaDownload, FaRedo, FaVideo, FaVideoSlash } from "react-icons/fa";
import { GiVineFlower, GiOakLeaf } from "react-icons/gi";

export default function SelfieGarden() {
  const { t } = useTranslation();
  const webcamRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [capturedImg, setCapturedImg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const handleStartCamera = () => {
    setErrorMsg(null);
    setCapturedImg(null);
    setCameraActive(true);
  };

  const handleStopCamera = () => {
    setCameraActive(false);
    setCapturedImg(null);
  };

  const handleCapture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImg(imageSrc);
      setCameraActive(false);
    }
  }, [webcamRef]);

  const handleRetake = () => {
    setCapturedImg(null);
    setCameraActive(true);
  };

  const handleDownload = () => {
    if (!capturedImg) return;
    const link = document.createElement("a");
    link.href = capturedImg;
    link.download = `herbsphere_selfie_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUserMediaError = (err) => {
    console.error("Webcam error:", err);
    setErrorMsg(t("selfie.cameraError"));
    setCameraActive(false);
  };

  return (
    <section className="section selfie-section" id="selfie">
      <div className="section-inner">
        {/* Header */}
        <motion.div 
          className="section-header centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">{t("selfie.label")}</span>
          <h2 className="section-title">
            <span role="img" aria-label="camera">📸</span> {t("selfie.title")}
          </h2>
          <p className="section-subtitle">{t("selfie.description")}</p>
        </motion.div>

        {/* Selfie Portal Container */}
        <div className="selfie__container">
          <motion.div 
            className="selfie__display-wrapper glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Corner Decorative Plants */}
            <div className="selfie__deco deco-tl"><GiVineFlower size={36} /></div>
            <div className="selfie__deco deco-tr"><GiOakLeaf size={32} /></div>
            <div className="selfie__deco deco-bl"><GiOakLeaf size={32} /></div>
            <div className="selfie__deco deco-br"><GiVineFlower size={36} /></div>

            {/* Main viewscreen */}
            <div className="selfie__screen">
              <AnimatePresence mode="wait">
                {/* 1. Inactive State */}
                {!cameraActive && !capturedImg && (
                  <motion.div 
                    key="inactive"
                    className="selfie__placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="placeholder-art">
                      <FaVideoSlash className="camera-off-icon" />
                    </div>
                    <h4>{t("selfie.cameraOffline")}</h4>
                    <p>{t("selfie.cameraOfflineDesc")}</p>
                    {errorMsg && <p className="error-text">{errorMsg}</p>}
                    <button className="btn btn-primary" onClick={handleStartCamera}>
                      <FaVideo /> {t("selfie.openCamera")}
                    </button>
                  </motion.div>
                )}

                {/* 2. Live Camera Streaming */}
                {cameraActive && !capturedImg && (
                  <motion.div 
                    key="webcam"
                    className="selfie__webcam-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/png"
                      videoConstraints={videoConstraints}
                      onUserMediaError={handleUserMediaError}
                      className="selfie__webcam-stream"
                    />
                    
                    {/* Plant Frame Overlay */}
                    <div className="selfie__frame-overlay">
                      <div className="frame-border-line" />
                      <span className="frame-tag">🌿 HERBSPHERE GARDEN 🌿</span>
                    </div>

                    {/* Stream Controls */}
                    <div className="selfie__stream-controls">
                      <button className="btn btn-outline" onClick={handleStopCamera}>
                        {t("selfie.cancel")}
                      </button>
                      <button className="btn btn-primary btn-capture" onClick={handleCapture}>
                        <FaCamera /> {t("selfie.capturePhoto")}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 3. Captured Image Preview */}
                {capturedImg && (
                  <motion.div 
                    key="preview"
                    className="selfie__preview-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <img src={capturedImg} alt="Captured green moment" className="selfie__captured-img" />
                    
                    {/* Styled frame on preview too */}
                    <div className="selfie__frame-overlay">
                      <div className="frame-border-line" />
                      <span className="frame-tag">🌿 HERBSPHERE GARDEN 🌿</span>
                    </div>

                    {/* Preview Controls */}
                    <div className="selfie__stream-controls">
                      <button className="btn btn-outline" onClick={handleRetake}>
                        <FaRedo /> {t("selfie.retake")}
                      </button>
                      <button className="btn btn-primary btn-download" onClick={handleDownload}>
                        <FaDownload /> {t("selfie.download")}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .selfie-section {
          background: #fdfbf7;
          border-bottom: 1px solid var(--cream-dark);
        }
        .selfie__container {
          max-width: 720px;
          width: 100%;
          margin: 0 auto;
        }
        .selfie__display-wrapper {
          background: white;
          border: 1px solid var(--cream-dark);
          box-shadow: var(--shadow-card);
          position: relative;
          padding: 32px;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        
        /* Deco icons */
        .selfie__deco {
          position: absolute;
          color: var(--light-green);
          opacity: 0.35;
          z-index: 5;
          pointer-events: none;
        }
        .deco-tl { top: 12px; left: 12px; transform: rotate(-45deg); color: var(--forest-green); }
        .deco-tr { top: 12px; right: 12px; transform: rotate(45deg); }
        .deco-bl { bottom: 12px; left: 12px; transform: rotate(-135deg); }
        .deco-br { bottom: 12px; right: 12px; transform: rotate(135deg); color: var(--forest-green); }

        .selfie__screen {
          background: #121f15;
          border-radius: var(--radius-lg);
          aspect-ratio: 4 / 3;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 8px 32px rgba(0,0,0,0.5);
          border: 4px solid var(--cream-dark);
        }
        .selfie__placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          text-align: center;
          color: white;
        }
        .placeholder-art {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          color: var(--light-green);
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .camera-off-icon {
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(0.95); }
        }
        .selfie__placeholder h4 {
          font-family: var(--font-display);
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: var(--pale-sage);
        }
        .selfie__placeholder p {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.7);
          max-width: 380px;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .error-text {
          color: #ff6b6b !important;
          font-weight: 600;
          margin-bottom: 16px !important;
        }

        .selfie__webcam-container, .selfie__preview-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .selfie__webcam-stream, .selfie__captured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Plant Frame Overlays */
        .selfie__frame-overlay {
          position: absolute;
          inset: 16px;
          border: 2px solid rgba(116, 198, 157, 0.4);
          pointer-events: none;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding-bottom: 12px;
          z-index: 10;
          border-radius: 12px;
        }
        .frame-border-line {
          position: absolute;
          inset: 4px;
          border: 1px dashed rgba(255,255,255,0.3);
          border-radius: 8px;
        }
        .frame-tag {
          background: rgba(27, 67, 50, 0.85);
          color: var(--pale-sage);
          backdrop-filter: blur(4px);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 4px 14px;
          border-radius: 20px;
          border: 1px solid rgba(116, 198, 157, 0.3);
          z-index: 12;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        /* Stream Controls */
        .selfie__stream-controls {
          position: absolute;
          bottom: 24px;
          display: flex;
          gap: 12px;
          z-index: 15;
          width: 100%;
          justify-content: center;
          padding: 0 24px;
        }
        .btn-capture {
          background: #40916c;
          border-color: #40916c;
        }
        .btn-capture:hover {
          background: var(--forest-green);
        }
        .btn-download {
          background: var(--soft-brown);
          box-shadow: 0 4px 16px rgba(139, 105, 20, 0.35);
        }
        .btn-download:hover {
          background: #755910;
          box-shadow: 0 8px 24px rgba(139, 105, 20, 0.45);
        }

        @media (max-width: 600px) {
          .selfie__display-wrapper {
            padding: 16px;
            border-radius: var(--radius-lg);
          }
          .selfie__frame-overlay {
            inset: 10px;
          }
          .selfie__stream-controls {
            bottom: 12px;
            gap: 8px;
          }
          .selfie__stream-controls .btn {
            padding: 10px 16px;
            font-size: 0.78rem;
          }
          .frame-tag {
            font-size: 0.55rem;
            padding: 3px 10px;
          }
        }
      `}</style>
    </section>
  );
}
