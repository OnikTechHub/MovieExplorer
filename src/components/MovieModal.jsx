import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MovieModal = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
          >
            {/* Modal Header Bar with Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
              {/* Poster */}
              <div className="w-full sm:w-48 shrink-0 rounded-2xl overflow-hidden bg-slate-950 h-64 sm:h-72 shadow-lg flex items-center justify-center">
                {show.image?.original || show.image?.medium ? (
                  <img
                    src={show.image?.original || show.image?.medium}
                    alt={show.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
                    No Poster Available
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-1 text-sm">
                  <span className="text-amber-400 font-bold">
                    Rating: {show.rating?.average || 'N/A'}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">
                    Year: {show.premiered ? show.premiered.slice(0, 4) : 'N/A'}
                  </span>
                  {show.runtime && (
                    <>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{show.runtime} min</span>
                    </>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {show.name}
                </h2>

                {/* Genres */}
                {show.genres && show.genres.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {show.genres.map((genre) => (
                      <span
                        key={genre}
                        className="bg-slate-800 text-amber-300 text-xs px-2.5 py-1 rounded-lg border border-slate-700 font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                )}

                {/* Summary */}
                {show.summary && (
                  <div className="text-slate-300 text-sm leading-relaxed mb-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: show.summary
                      }}
                    />
                  </div>
                )}

                {/* Additional Metadata */}
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-400 mt-auto pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Status:</span>
                    <span className="text-white font-medium">{show.status || 'Unknown'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Language:</span>
                    <span className="text-white font-medium">{show.language || 'English'}</span>
                  </div>
                </div>

                {show.officialSite && (
                  <a
                    href={show.officialSite}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-lg cursor-pointer"
                  >
                    <span>Visit Official Site</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MovieModal;
