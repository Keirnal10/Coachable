export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Coachable</h1>
        <p className="text-center text-lg mb-8">
          A platform for coaches to provide feedback on athlete videos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">For Athletes</h2>
            <p>Upload your videos and receive detailed feedback from coaches</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">For Coaches</h2>
            <p>Provide detailed feedback with annotations and voice commentary</p>
          </div>
        </div>
      </div>
    </div>
  );
} 