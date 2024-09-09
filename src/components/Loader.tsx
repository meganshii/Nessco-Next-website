// components/Loader.tsx
export default function Loader() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
        <div className="loader"></div> {/* You can add your loader animation here */}
        <style jsx>{`
          .loader {
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px dashed black;
            width: 60px;
            height: 60px;
            animation: spin 2s linear infinite;
          }
  
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }
  