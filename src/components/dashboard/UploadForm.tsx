import React, { useState } from 'react';
import { Upload, Link, Loader2 } from 'lucide-react';

export const UploadForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [jobUrl, setJobUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl border-2 border-primary-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Optimize Your Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Upload Resume (PDF)</label>
            <div className="flex items-center justify-center w-full">
              <label className="w-full flex flex-col items-center px-4 py-6 bg-primary-50 text-primary-500 rounded-lg tracking-wide border-2 border-dashed border-primary-200 cursor-pointer hover:bg-primary-100 transition-colors">
                <Upload className="w-8 h-8" />
                <span className="mt-2 text-base">{file ? file.name : 'Select your resume'}</span>
                <input type='file' className="hidden" accept=".pdf" onChange={handleFileChange} />
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Description URL</label>
            <div className="flex items-center h-full">
              <div className="relative flex-1">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="url"
                  className="w-full h-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                  placeholder="https://example.com/job-posting"
                  value={jobUrl}
                  onChange={(e) => setJobUrl(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing || !file}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium flex items-center justify-center space-x-2
            ${isProcessing || !file
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-500 hover:bg-primary-600'}`}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Optimize Resume</span>
          )}
        </button>
      </form>
    </div>
  );
};