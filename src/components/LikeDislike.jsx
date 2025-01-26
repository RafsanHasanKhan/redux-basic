
const LikeDislike = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white shadow-md max-w-md mx-auto rounded-lg p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-6">like dislike</h1>
        <div>
          <p>
            Likes: <span className="text-green-500">0</span>
          </p>
          <p>
            Dislikes: <span className="text-red-500">0</span>
          </p>

          <div className="space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
              Add Like
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
              Add Dislike
            </button>
            <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;