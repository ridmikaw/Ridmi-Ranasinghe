"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function CVPreview() {
  const [showModal, setShowModal] = useState(false);

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
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-white border border-orange-500/25 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-300"
        >
          <i className="ri-file-pdf-line" />
          View CV
        </button>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                CV - Ridmi Ranasinghe
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="/Ridmi-Ranasinghe.pdf"
                  download="Ridmi-Ranasinghe-CV.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <i className="ri-download-line" />
                  Download
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <i className="ri-close-line text-2xl text-gray-700" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-auto bg-gray-100">
              <iframe
                src="/Ridmi-Ranasinghe.pdf#toolbar=0"
                className="w-full h-full"
                title="CV Preview"
              />
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm text-gray-600 text-center">
              Use the viewer controls to navigate. Press Escape or click the X
              to close.
            </div>
          </motion.div>
        </div>
      )}

      {/* Close on Escape key */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 z-[99]"
          onKeyDown={(e) => {
            if (e.key === "Escape") setShowModal(false);
          }}
        />
      )}
    </>
  );
}
