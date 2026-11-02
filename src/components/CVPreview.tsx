"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

// Must match a file in /public exactly (case-sensitive)
const CV_PATH = "/RidmiRanasinghe.pdf";
const CV_DOWNLOAD_NAME = "Ridmi-Ranasinghe-CV.pdf";

export default function CVPreview() {
  const [showModal, setShowModal] = useState(false);

  // Close on Escape + lock page scroll while the modal is open
  useEffect(() => {
    if (!showModal) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <>
      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-[#4b3a29] bg-white border border-pink-500/25 hover:border-pink-500/60 hover:text-pink-600 hover:shadow-[0_8px_22px_rgba(236,72,153,0.15)] transition-all duration-300"
        >
          <i className="ri-file-pdf-line" />
          View CV
        </button>
      </motion.div>

      {/* Modal
          The outer div is the backdrop (click to close).
          The card stops propagation so clicks inside never close it. */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="CV preview"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                CV - Ridmi Ranasinghe
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={CV_PATH}
                  download={CV_DOWNLOAD_NAME}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <i className="ri-download-line" />
                  Download
                </a>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <i className="ri-close-line text-2xl text-gray-700" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 min-h-0 bg-gray-100">
              <iframe
                src={`${CV_PATH}#toolbar=0`}
                className="w-full h-full border-0"
                title="CV Preview"
              />
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm text-gray-600 text-center">
              Press Escape or click outside to close.
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
