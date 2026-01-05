"use client";

import { useEffect, useState } from "react";

interface FileViewerProps {
  path: string;
  title: string;
  onClose: () => void;
}

export function FileViewer({ path, title, onClose }: FileViewerProps) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      try {
        const res = await fetch(`/api/file?path=${encodeURIComponent(path)}`);
        const data = await res.json();
        setContent(data.content || data.error || "Unable to load file");
      } catch (error) {
        setContent("Error loading file");
      } finally {
        setLoading(false);
      }
    }
    fetchContent();
  }, [path]);

  const copyContent = async () => {
    if (content) {
      try {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-700">
          <h2 className="font-semibold text-white truncate">{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={copyContent}
              className="text-sm px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
            >
              {copied ? "✓ Copied" : "Copy"}
            </button>
            <button
              onClick={onClose}
              className="text-sm px-3 py-1 rounded bg-zinc-800 hover:bg-red-900 text-zinc-300 hover:text-red-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {loading ? (
            <div className="text-zinc-500">Loading...</div>
          ) : (
            <pre className="text-sm text-zinc-300 whitespace-pre-wrap font-mono leading-relaxed">
              {content}
            </pre>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-zinc-800 text-xs text-zinc-500 truncate">
          {path}
        </div>
      </div>
    </div>
  );
}
